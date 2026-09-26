import { Link } from "wouter";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#12161c",
        color: "#9ca3af",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        padding: "50px 20px 30px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
            alignItems: "flex-start",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <Link href="/">
              <img
                src="/images/logo.jpg"
                alt="Fame Finders"
                style={{ height: "40px", objectFit: "contain", cursor: "pointer" }}
              />
            </Link>
            <p style={{ fontSize: "13px", lineHeight: "1.6", margin: 0 }}>
              Fame Finders Media is a leading PR agency known for transforming brands by evolving and protecting their image.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <h4 style={{ fontSize: "15px", fontWeight: "700", color: "#ffffff", letterSpacing: "1px", marginBottom: "6px" }}>
              QUICK LINKS
            </h4>
            <Link href="/" style={{ color: "#9ca3af", textDecoration: "none", fontSize: "13px" }}>Home</Link>
            <Link href="/services" style={{ color: "#9ca3af", textDecoration: "none", fontSize: "13px" }}>Services</Link>
            <Link href="/about" style={{ color: "#9ca3af", textDecoration: "none", fontSize: "13px" }}>About Us</Link>
            <Link href="/events" style={{ color: "#9ca3af", textDecoration: "none", fontSize: "13px" }}>Events</Link>
            <Link href="/pr-drive" style={{ color: "#9ca3af", textDecoration: "none", fontSize: "13px" }}>PR Drive</Link>
            <Link href="/contact" style={{ color: "#9ca3af", textDecoration: "none", fontSize: "13px" }}>Contact Us</Link>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <h4 style={{ fontSize: "15px", fontWeight: "700", color: "#ffffff", letterSpacing: "1px", marginBottom: "6px" }}>
              CONTACT US
            </h4>
            <p style={{ fontSize: "13px", margin: 0, lineHeight: "1.5" }}>
              📍 Karol Bagh, New Delhi - 110005
            </p>
            <p style={{ fontSize: "13px", margin: 0 }}>
              📞 +91 97187 50379
            </p>
            <p style={{ fontSize: "13px", margin: 0 }}>
              ✉️ info@famefinders.in
            </p>
          </div>
        </div>

        <hr style={{ border: "none", borderTop: "1px solid rgba(255, 255, 255, 0.08)", margin: 0 }} />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "15px",
            fontSize: "12px",
          }}
        >
          <p style={{ margin: 0 }}>
            © {new Date().getFullYear()} Fame Finders Media. All Rights Reserved.
          </p>
          <div style={{ display: "flex", gap: "15px" }}>
            <Link href="/contact" style={{ color: "#9ca3af", textDecoration: "none" }}>Privacy Policy</Link>
            <Link href="/contact" style={{ color: "#9ca3af", textDecoration: "none" }}>Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}