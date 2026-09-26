import { useState, FormEvent } from "react";

export default function Footer() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: "", email: "", message: "" });
  };

  const groupImages = [
    "mydiaz.jpg",
    "studydaz.jpg",
    "influencias.jpg",
    "famefinders.jpg",
    "kbdnews.jpg",
    "redff.jpg",
  ];

  return (
    <footer style={{ backgroundColor: "#bd2225", color: "#ffffff", fontFamily: "inherit" }}>
      {/* 1. We Love To Hear From You Section */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "80px 20px 60px", textAlign: "center" }}>
        <h2 style={{ fontSize: "28px", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 10px" }}>
          WE LOVE TO HEAR FROM YOU
        </h2>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", color: "rgba(255,255,255,0.7)", marginBottom: "40px" }}>
          <span>············</span>
          <span>▼</span>
          <span>············</span>
        </div>

        {submitted ? (
          <div style={{ backgroundColor: "rgba(0,0,0,0.2)", padding: "20px", borderRadius: "6px", fontSize: "16px", fontWeight: "600" }}>
            Thank you! Your message has been sent successfully.
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "35px", textAlign: "left" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "35px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <input
                  type="text"
                  placeholder="Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    borderBottom: "1px solid rgba(255,255,255,0.7)",
                    padding: "10px 0",
                    color: "#ffffff",
                    fontSize: "15px",
                    outline: "none",
                  }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    borderBottom: "1px solid rgba(255,255,255,0.7)",
                    padding: "10px 0",
                    color: "#ffffff",
                    fontSize: "15px",
                    outline: "none",
                  }}
                />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <textarea
                placeholder="Message"
                required
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.7)",
                  padding: "10px 0",
                  color: "#ffffff",
                  fontSize: "15px",
                  outline: "none",
                  resize: "vertical",
                }}
              />
            </div>

            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <button
                type="submit"
                style={{
                  backgroundColor: "transparent",
                  border: "2px solid #ffffff",
                  color: "#ffffff",
                  padding: "12px 36px",
                  fontSize: "14px",
                  fontWeight: "700",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  borderRadius: "2px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#ffffff";
                  e.currentTarget.style.color = "#bd2225";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#ffffff";
                }}
              >
                Send message
              </button>
            </div>
          </form>
        )}
      </div>

      {/* 2. Google Map Embed Section */}
      <div style={{ width: "100%", height: "400px", borderTop: "2px solid rgba(255,255,255,0.2)", borderBottom: "2px solid rgba(255,255,255,0.2)" }}>
        <iframe
          title="Karol Bagh Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9961440742116!2d77.186634!3d28.647278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d029a2c3a5b9f%3A0x8e8331e2474f85e2!2sKarol%20Bagh%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "contrast(1.1) saturate(1.1)" }}
          allowFullScreen={false}
          loading="lazy"
        />
      </div>

      {/* 3. Our Groups White Strip with 6 Images */}
      <div style={{ backgroundColor: "#ffffff", padding: "45px 20px", textAlign: "center" }}>
        <h3 style={{ fontSize: "16px", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "35px", color: "#bd2225" }}>
          Our Groups
        </h3>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "45px",
          }}
        >
          {groupImages.map((imgName, idx) => (
            <div key={idx} style={{ height: "45px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img
                src={`/images/${imgName}`}
                alt={`Group ${idx + 1}`}
                style={{
                  maxHeight: "42px",
                  maxWidth: "160px",
                  objectFit: "contain",
                  display: "block",
                }}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 4. Bottom Contact Bar */}
      <div
        style={{
          backgroundColor: "#961316",
          padding: "20px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "15px",
          fontSize: "13px",
          borderTop: "1px solid rgba(255,255,255,0.15)",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span>📍</span>
          <span>8A/8, WEA Karol Bagh New Delhi - 110005</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span>📞</span>
          <span>+91-9718750379</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span>📞</span>
          <span>+91-8376073133</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span>✉️</span>
          <span>info@famefinders.in</span>
        </div>
      </div>
    </footer>
  );
}