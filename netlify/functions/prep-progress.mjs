import { getStore } from "@netlify/blobs";
import { createHash, timingSafeEqual } from "node:crypto";

const SYNC_KEY_SHA256 = "7527bc41c130734aaf7b0aa537fcb94a9adeb81d017a03c16f2076baa0ff0317";
const TICK_ID = /^(d\d{8}-\d{1,2}|t-[a-z]{2,8}-\d{1,2})$/;
const MAX_OPS = 500;
const MAX_TICKS = 2000;

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });

const hasSyncKey = (req) => {
  const given = createHash("sha256").update(req.headers.get("x-sync-key") || "").digest();
  return timingSafeEqual(given, Buffer.from(SYNC_KEY_SHA256, "hex"));
};

const readProgress = async (store) =>
  (await store.get("progress", { type: "json" })) || { done: {}, updatedAt: null };

const progressReply = (progress) =>
  json({ done: Object.keys(progress.done), updatedAt: progress.updatedAt });

const isValidOps = (ops) =>
  Array.isArray(ops) &&
  ops.length > 0 &&
  ops.length <= MAX_OPS &&
  ops.every((op) => op && typeof op.id === "string" && TICK_ID.test(op.id) && typeof op.on === "boolean");

export default async (req) => {
  if (!hasSyncKey(req)) return json({ error: "Wrong sync key" }, 401);
  const store = getStore({ name: "toptal-prep", consistency: "strong" });

  if (req.method === "GET") return progressReply(await readProgress(store));
  if (req.method !== "POST") return json({ error: "Use GET or POST" }, 405);

  let body;
  try {
    body = await req.json();
  } catch {
    return json({ error: "Body must be JSON" }, 400);
  }
  if (!isValidOps(body && body.ops)) {
    return json({ error: `Send 1 to ${MAX_OPS} ops shaped { id, on }` }, 400);
  }

  const progress = await readProgress(store);
  for (const { id, on } of body.ops) {
    if (on) progress.done[id] = 1;
    else delete progress.done[id];
  }
  if (Object.keys(progress.done).length > MAX_TICKS) return json({ error: "Too many ticks" }, 400);

  progress.updatedAt = new Date().toISOString();
  await store.setJSON("progress", progress);
  return progressReply(progress);
};

export const config = { path: "/api/prep-progress" };
