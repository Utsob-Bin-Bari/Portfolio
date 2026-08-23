import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_774i93e";
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_8sv2m9j";
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "_4auPNIud4mouhx1H";

const FALLBACK_EMAIL = "utsobbinbari@gmail.com";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("idle");

  const sendEmail = (e) => {
    e.preventDefault();
    if (status === "sending") return;

    const formEl = e.target;
    setStatus("sending");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(() => {
        setStatus("done");
        formEl.reset();
      })
      .catch((error) => {
        console.error("EmailJS send failed:", error?.status, error?.text || error);
        setStatus("error");
      });
  };

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
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            className="user"
            placeholder="Message"
            required
          />
          <input
            type="submit"
            value={status === "sending" ? "Sending..." : "Send"}
            className="button"
            disabled={status === "sending"}
          />

          {status === "done" && (
            <span className="c-status c-status-ok">
              Thanks for contacting me — I will get back to you shortly.
            </span>
          )}

          {status === "error" && (
            <span className="c-status c-status-error">
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
