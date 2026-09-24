import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Thank you! Your message has been received locally.");
    e.currentTarget.reset();
  };

  return (
    <div style={{ paddingTop: "140px", paddingBottom: "80px", maxWidth: "600px", margin: "0 auto", paddingLeft: "20px", paddingRight: "20px" }}>
      <h1 style={{ fontSize: "36px", fontWeight: "bold", textAlign: "center", marginBottom: "30px", color: "#111" }}>
        Contact Us
      </h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <input type="text" name="your-name" placeholder="Your Name" required style={{ padding: "12px", border: "1px solid #ccc", borderRadius: "6px" }} />
        <input type="email" name="your-email" placeholder="Your Email" required style={{ padding: "12px", border: "1px solid #ccc", borderRadius: "6px" }} />
        <textarea name="your-message" placeholder="Message" rows={5} required style={{ padding: "12px", border: "1px solid #ccc", borderRadius: "6px" }} />
        <button type="submit" style={{ padding: "14px", background: "#c8102e", color: "#fff", border: "none", borderRadius: "6px", fontWeight: "bold", cursor: "pointer" }}>
          Send Message
        </button>
      </form>
      {status && <p style={{ marginTop: "20px", textAlign: "center", fontWeight: "600", color: "#059669" }}>{status}</p>}
    </div>
  );
}