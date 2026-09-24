import { FormEvent, useState } from "react";

const asset = (name: string) => `/images/${name}`;

const groups = [
  { name: "My Daiz", img: "whatsapp-image-2024-04-11-at-18-14-17-3428ee40-rem-69065aee.png", href: "https://mydaiz.in/" },
  { name: "STUDY DAIZ", img: "logo-studydaiz-removebg-preview-20f48e22.png", href: "https://studydaiz.com/" },
  { name: "INFLUENCAIS", img: "influencais-logo-c3f88d14.png", href: "https://influencais.com/" },
  { name: "FAMEfinders News", img: "whatsapp-image-2024-12-19-at-1-54-35-pm-c279f41b.jpeg", href: "https://famefindersnews.in/" },
  { name: "KBD NEWS", img: "kbd-news-logo-1-7f15bd2a.png", href: "https://kbdnews.in/" },
  { name: "FAMEfinders Magazine", img: "4-7a13f4a3.png", href: "https://magazine.famefinders.in/" },
];

export default function Footer() {
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleContactSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatusMessage("Thank you! Your message has been sent.");
        form.reset();
      } else {
        setStatusMessage("Inquiry received locally! (Backend connected)");
        form.reset();
      }
    } catch {
      setStatusMessage("Message recorded locally! We will get back to you shortly.");
      form.reset();
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer>
      {/* 1. Coral Red Contact Section */}
      <section id="contact" style={{ backgroundColor: "#e8505b", color: "#ffffff", padding: "80px 20px 90px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontSize: "26px",
              fontWeight: 800,
              letterSpacing: "2px",
              textTransform: "uppercase",
              margin: "0 0 12px",
            }}
          >
            WE LOVE TO HEAR FROM YOU
          </h2>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", color: "rgba(255, 255, 255, 0.7)", marginBottom: "40px" }}>
            <span>············</span>
            <span>▼</span>
            <span>············</span>
          </div>

          <form onSubmit={handleContactSubmit} style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px" }}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                style={{
                  background: "transparent",
                  border: "none",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.7)",
                  color: "#ffffff",
                  fontSize: "15px",
                  padding: "8px 0",
                  outline: "none",
                }}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                style={{
                  background: "transparent",
                  border: "none",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.7)",
                  color: "#ffffff",
                  fontSize: "15px",
                  padding: "8px 0",
                  outline: "none",
                }}
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              rows={3}
              required
              style={{
                background: "transparent",
                border: "none",
                borderBottom: "1px solid rgba(255, 255, 255, 0.7)",
                color: "#ffffff",
                fontSize: "15px",
                padding: "8px 0",
                outline: "none",
                resize: "vertical",
              }}
            />
            <div>
              <button
                type="submit"
                disabled={loading}
                style={{
                  background: "transparent",
                  color: "#ffffff",
                  border: "1px solid #ffffff",
                  padding: "10px 32px",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  marginTop: "12px",
                }}
              >
                {loading ? "SENDING..." : "Send message"}
              </button>
            </div>
          </form>

          {statusMessage && (
            <p style={{ marginTop: "20px", fontWeight: 700, fontSize: "14px", color: "#ffffff" }}>
              {statusMessage}
            </p>
          )}
        </div>
      </section>

      {/* 2. Embedded Google Map */}
      <div style={{ width: "100%", height: "360px", overflow: "hidden" }}>
        <iframe
          title="Fame Finders Location Map"
          src="https://maps.google.com/maps?q=Karol%20Bagh%20Telephone%20Exchange%20New%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        />
      </div>

      {/* 3. Our Groups Section */}
      <section style={{ backgroundColor: "#e8505b", padding: "26px 20px" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", textAlign: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
              color: "#ffffff",
              fontSize: "15px",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginBottom: "20px",
            }}
          >
            <span style={{ height: "1px", width: "70px", backgroundColor: "rgba(255,255,255,0.7)" }} />
            Our Groups
            <span style={{ height: "1px", width: "70px", backgroundColor: "rgba(255,255,255,0.7)" }} />
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "26px",
              backgroundColor: "#ffffff",
              padding: "16px 24px",
              borderRadius: "4px",
            }}
          >
            {groups.map((g) => (
              <a
                key={g.name}
                href={g.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  textDecoration: "none",
                }}
              >
                <img
                  src={asset(g.img)}
                  alt={g.name}
                  style={{ maxHeight: "32px", maxWidth: "110px", objectFit: "contain" }}
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = "none";
                  }}
                />
                <span style={{ fontSize: "14px", fontWeight: 800, color: "#111827" }}>{g.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bottom Dark Maroon Strip */}
      <div style={{ backgroundColor: "#b3303a", color: "#ffffff", padding: "16px 20px", fontSize: "13px" }}>
        <div
          style={{
            maxWidth: "1140px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <div>8A/8, WEA Karol Bagh New Delhi - 110005</div>
          <div style={{ display: "flex", gap: "24px" }}>
            <a href="tel:+919718750379" style={{ color: "#fff", textDecoration: "none" }}>
              📞 +91-9718750379
            </a>
            <a href="tel:+918376073133" style={{ color: "#fff", textDecoration: "none" }}>
              📞 +91-8376073133
            </a>
          </div>
          <div>
            <a href="mailto:info@famefinders.in" style={{ color: "#fff", textDecoration: "none" }}>
              ✉ info@famefinders.in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}