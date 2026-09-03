import { useEffect, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_mh49faf";
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_8sv2m9j";
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "_4auPNIud4mouhx1H";

const FALLBACK_EMAIL = "utsobbinbari@gmail.com";
const SUBMIT_COOLDOWN_MS = 1500;

const Contact = () => {
  const form = useRef();
  const inFlight = useRef(false);
  const lastSubmitAt = useRef(0);
  const mounted = useRef(true);
  const [status, setStatus] = useState("idle");

  useEffect(
    () => () => {
      mounted.current = false;
    },
    []
  );

  const sendEmail = (e) => {
    e.preventDefault();

    const now = Date.now();
    if (inFlight.current) return;
    if (now - lastSubmitAt.current < SUBMIT_COOLDOWN_MS) return;
    inFlight.current = true;
    lastSubmitAt.current = now;

    const formEl = e.target;
    const data = new FormData(formEl);
    const name = (data.get("user_name") || "").toString().trim();
    const email = (data.get("user_email") || "").toString().trim();
    const message = (data.get("message") || "").toString().trim();

    const templateParams = {
      name,
      email,
      message,
      user_name: name,
      user_email: email,
      from_name: name,
      from_email: email,
      reply_to: email,
      title: `Portfolio message from ${name}`,
      subject: `Portfolio message from ${name}`,
      to_email: FALLBACK_EMAIL,
    };

    setStatus("sending");

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY,
      })
      .then(() => {
        if (!mounted.current) return;
        setStatus("done");
        formEl.reset();
      })
      .catch((error) => {
        console.error("EmailJS send failed:", error?.status, error?.text || error);
        if (!mounted.current) return;
        setStatus("error");
      })
      .finally(() => {
        inFlight.current = false;
      });
  };

  const clearResult = () => {
    setStatus((prev) => (prev === "done" || prev === "error" ? "idle" : prev));
  };

  const isSending = status === "sending";

  return (
    <div className="contact-form" id="contact">
      <div className="w-left">
        <div>
          <span className="weight">Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail} onInput={clearResult}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
            disabled={isSending}
            required
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
            disabled={isSending}
            required
          />
          <textarea
            name="message"
            className="user"
            placeholder="Message"
            disabled={isSending}
            required
          />
          <button
            type="submit"
            className="button c-submit"
            disabled={isSending}
            aria-busy={isSending}
          >
            {isSending && <span className="c-spinner" aria-hidden="true" />}
            {isSending ? "Sending..." : "Send"}
          </button>

          {status === "done" && (
            <span className="c-status c-status-ok" role="status">
              Thanks for contacting me — I will get back to you shortly.
            </span>
          )}

          {status === "error" && (
            <span className="c-status c-status-error" role="status">
              The form could not send right now. Please email me directly at{" "}
              <a href={`mailto:${FALLBACK_EMAIL}`}>{FALLBACK_EMAIL}</a>.
            </span>
          )}

          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
