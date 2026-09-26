import { Link } from "wouter";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#161b22",
        color: "#d1d5db",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        padding: "70px 20px 50px", // Footer ko bada aur spacious banaya
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "50px",
        }}
      >
        {/* Top Section: Logo & Quick Links */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "40px",
            alignItems: "flex-start",
          }}
        >
          {/* Column 1: Brand & Bio */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Link href="/">
              <img
                src="/images/logo.jpg"
                alt="Fame Finders"
                style={{ height: "46px", objectFit: "contain", cursor: "pointer" }}
              />
            </Link>
            <p style={{ fontSize: "14px", lineHeight: "1.7", color: "#9ca3af", margin: 0 }}>
              Fame Finders Media is a leading PR agency known for transforming brands by evolving and protecting their image across the globe.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <h4 style={{ fontSize: "16px", fontWeight: "700", color: "#ffffff", letterSpacing: "1px", marginBottom: "8px" }}>
              QUICK LINKS
            </h4>
            <Link href="/" style={{ color: "#9ca3af", textDecoration: "none", fontSize: "14px" }}>Home</Link>
            <Link href="/services" style={{ color: "#9ca3af", textDecoration: "none", fontSize: "14px" }}>Services</Link>
            <Link href="/about" style={{ color: "#9ca3af", textDecoration: "none", fontSize: "14px" }}>About Us</Link>
            <Link href="/events" style={{ color: "#9ca3af", textDecoration: "none", fontSize: "14px" }}>Events</Link>
            <Link href="/pr-drive" style={{ color: "#9ca3af", textDecoration: "none", fontSize: "14px" }}>PR Drive</Link>
            <Link href="/contact" style={{ color: "#9ca3af", textDecoration: "none", fontSize: "14px" }}>Contact Us</Link>
          </div>

          {/* Column 3: Contact Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <h4 style={{ fontSize: "16px", fontWeight: "700", color: "#ffffff", letterSpacing: "1px", marginBottom: "8px" }}>
              CONTACT US
            </h4>
            <p style={{ fontSize: "14px", color: "#9ca3af", margin: 0, lineHeight: "1.6" }}>
              📍 A6/6, WEA, Karol Bagh, New Delhi - 110005
            </p>
            <p style={{ fontSize: "14px", color: "#9ca3af", margin: 0 }}>
              📞 +91 97187 50379 | +91 83830 71155
            </p>
            <p style={{ fontSize: "14px", color: "#9ca3af", margin: 0 }}>
              ✉️ info@famefinders.in
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr style={{ border: "none", borderTop: "1px solid rgba(255, 255, 255, 0.08)", margin: 0 }} />

        {/* Bottom Bar: Copyright & Socials */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
            fontSize: "13px",
            color: "#9ca3af",
          }}
        >
          <p style={{ margin: 0 }}>
            © {new Date().getFullYear()} Fame Finders Media. All Rights Reserved.
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            <Link href="/contact" style={{ color: "#9ca3af", textDecoration: "none" }}>Privacy Policy</Link>
            <Link href="/contact" style={{ color: "#9ca3af", textDecoration: "none" }}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}