import { useState } from "react";
import { Link } from "wouter";

export default function Header() {
  const [eventsOpen, setEventsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => {
    setMobileOpen(false);
    setEventsOpen(false);
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: "rgba(18, 22, 28, 0.95)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo Section */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link href="/">
            <img
              src="/images/logo.jpg"
              alt="Fame Finders"
              style={{ height: "36px", objectFit: "contain", cursor: "pointer" }}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: "none",
            alignItems: "center",
            gap: "28px",
          }}
          className="desktop-nav-menu"
        >
          <Link
            href="/"
            style={{
              color: "#f3f4f6",
              textDecoration: "none",
              fontSize: "12px",
              fontWeight: "700",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
            }}
          >
            HOME
          </Link>
          <Link
            href="/services"
            style={{
              color: "#f3f4f6",
              textDecoration: "none",
              fontSize: "12px",
              fontWeight: "700",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
            }}
          >
            SERVICES
          </Link>
          <Link
            href="/about"
            style={{
              color: "#f3f4f6",
              textDecoration: "none",
              fontSize: "12px",
              fontWeight: "700",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
            }}
          >
            ABOUT US
          </Link>

          {/* Events Hover Dropdown */}
          <div 
            style={{ position: "relative", padding: "10px 0" }}
            onMouseEnter={() => setEventsOpen(true)}
            onMouseLeave={() => setEventsOpen(false)}
          >
            {/* Click karne par /events par jayega */}
            <Link
              href="/events"
              style={{
                color: "#f3f4f6",
                textDecoration: "none",
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              EVENTS <span style={{ fontSize: "9px" }}>▼</span>
            </Link>

            {/* Hover karne par ye menu dikhega */}
            {eventsOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  right: 0,
                  backgroundColor: "#1c222b",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
                  borderRadius: "4px",
                  minWidth: "260px",
                  padding: "8px 0",
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                {[
                  "Future Energy India",
                  "Era of Artificial Intelligence Powered Management",
                  "Influence with Influencers",
                  "Educators Book Launch",
                ].map((evt) => (
                  <Link
                    key={evt}
                    href="/events"
                    onClick={() => setEventsOpen(false)}
                    style={{
                      padding: "10px 18px",
                      color: "#d1d5db",
                      textDecoration: "none",
                      fontSize: "13px",
                      lineHeight: "1.4",
                    }}
                  >
                    {evt}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/pr-drive"
            style={{
              color: "#f3f4f6",
              textDecoration: "none",
              fontSize: "12px",
              fontWeight: "700",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
            }}
          >
            PR DRIVE
          </Link>
          <Link
            href="/contact"
            style={{
              color: "#f3f4f6",
              textDecoration: "none",
              fontSize: "12px",
              fontWeight: "700",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
            }}
          >
            CONTACT US
          </Link>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          style={{
            background: "none",
            border: "1px solid rgba(255,255,255,0.3)",
            color: "#fff",
            padding: "6px 12px",
            borderRadius: "4px",
            fontSize: "12px",
            letterSpacing: "1px",
            cursor: "pointer",
          }}
          className="mobile-menu-btn"
        >
          MENU
        </button>
      </div>

      {/* Mobile Dropdown Panel */}
      {mobileOpen && (
        <div
          style={{
            backgroundColor: "#161b22",
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <Link href="/" onClick={closeMobile} style={{ color: "#fff", textDecoration: "none", fontSize: "14px" }}>
            Home
          </Link>
          <Link href="/services" onClick={closeMobile} style={{ color: "#fff", textDecoration: "none", fontSize: "14px" }}>
            Services
          </Link>
          <Link href="/about" onClick={closeMobile} style={{ color: "#fff", textDecoration: "none", fontSize: "14px" }}>
            About Us
          </Link>
          <Link href="/events" onClick={closeMobile} style={{ color: "#fff", textDecoration: "none", fontSize: "14px" }}>
            Events
          </Link>
          <Link href="/pr-drive" onClick={closeMobile} style={{ color: "#fff", textDecoration: "none", fontSize: "14px" }}>
            PR Drive
          </Link>
          <Link href="/contact" onClick={closeMobile} style={{ color: "#fff", textDecoration: "none", fontSize: "14px" }}>
            Contact Us
          </Link>
        </div>
      )}

      <style>{`
        @media (min-width: 820px) {
          .desktop-nav-menu {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}