import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

export default function Header() {
  const [location] = useLocation();
  const [eventsOpen, setEventsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Floating Island Pill scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
    setEventsOpen(false);
  };

  const isActive = (path: string) => location === path;

  const linkStyle = (path: string) => ({
    color: isActive(path) ? "#c8102e" : "#f3f4f6",
    textDecoration: "none",
    fontSize: "13px",
    fontWeight: "700",
    letterSpacing: "1.5px",
    textTransform: "uppercase" as const,
    borderBottom: isActive(path) ? "2px solid #c8102e" : "2px solid transparent",
    paddingBottom: "4px",
    transition: "color 0.2s, border-color 0.2s",
  });

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        padding: scrolled ? "16px 20px" : "0px",
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: scrolled ? "1050px" : "1300px",
          backgroundColor: scrolled ? "rgba(18, 22, 28, 0.85)" : "rgba(18, 22, 28, 0.95)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          // Scroll karne par navbar rounded island (pill) ban jayega
          borderRadius: scrolled ? "50px" : "0px",
          border: scrolled ? "1px solid rgba(200, 164, 92, 0.3)" : "1px solid rgba(255, 255, 255, 0.1)",
          borderTop: scrolled ? "1px solid rgba(200, 164, 92, 0.3)" : "none",
          boxShadow: scrolled ? "0 20px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(200, 164, 92, 0.1)" : "none",
          padding: scrolled ? "14px 32px" : "24px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Logo Section */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link href="/">
            <img
              src="/images/logo.jpg"
              alt="Fame Finders"
              style={{ height: scrolled ? "36px" : "44px", objectFit: "contain", cursor: "pointer", transition: "height 0.3s ease" }}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: "none",
            alignItems: "center",
            gap: "32px",
          }}
          className="desktop-nav-menu"
        >
          <Link href="/" style={linkStyle("/")}>
            HOME
          </Link>
          <Link href="/services" style={linkStyle("/services")}>
            SERVICES
          </Link>
          <Link href="/about" style={linkStyle("/about")}>
            ABOUT US
          </Link>

          {/* Events Hover Dropdown */}
          <div 
            style={{ position: "relative", padding: "10px 0" }}
            onMouseEnter={() => setEventsOpen(true)}
            onMouseLeave={() => setEventsOpen(false)}
          >
            <Link
              href="/events"
              style={{
                color: location === "/events" ? "#c8102e" : "#f3f4f6",
                textDecoration: "none",
                fontSize: "13px",
                fontWeight: "700",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                borderBottom: location === "/events" ? "2px solid #c8102e" : "2px solid transparent",
                paddingBottom: "4px",
              }}
            >
              EVENTS <span style={{ fontSize: "10px" }}>▼</span>
            </Link>

            {eventsOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  right: 0,
                  backgroundColor: "rgba(28, 34, 43, 0.95)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.6)",
                  borderRadius: "12px",
                  minWidth: "280px",
                  padding: "10px 0",
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid rgba(200, 164, 92, 0.2)",
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
                      padding: "12px 20px",
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

          <Link href="/pr-drive" style={linkStyle("/pr-drive")}>
            PR DRIVE
          </Link>
          <Link href="/contact" style={linkStyle("/contact")}>
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
            padding: "6px 14px",
            borderRadius: "20px",
            fontSize: "13px",
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
            position: "absolute",
            top: "100%",
            left: "20px",
            right: "20px",
            backgroundColor: "rgba(22, 27, 34, 0.98)",
            backdropFilter: "blur(16px)",
            borderRadius: "16px",
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
          }}
        >
          <Link href="/" onClick={closeMobile} style={{ color: location === "/" ? "#c8102e" : "#fff", textDecoration: "none", fontSize: "15px", fontWeight: location === "/" ? "700" : "400" }}>
            Home
          </Link>
          <Link href="/services" onClick={closeMobile} style={{ color: location === "/services" ? "#c8102e" : "#fff", textDecoration: "none", fontSize: "15px", fontWeight: location === "/services" ? "700" : "400" }}>
            Services
          </Link>
          <Link href="/about" onClick={closeMobile} style={{ color: location === "/about" ? "#c8102e" : "#fff", textDecoration: "none", fontSize: "15px", fontWeight: location === "/about" ? "700" : "400" }}>
            About Us
          </Link>
          <Link href="/events" onClick={closeMobile} style={{ color: location === "/events" ? "#c8102e" : "#fff", textDecoration: "none", fontSize: "15px", fontWeight: location === "/events" ? "700" : "400" }}>
            Events
          </Link>
          <Link href="/pr-drive" onClick={closeMobile} style={{ color: location === "/pr-drive" ? "#c8102e" : "#fff", textDecoration: "none", fontSize: "15px", fontWeight: location === "/pr-drive" ? "700" : "400" }}>
            PR Drive
          </Link>
          <Link href="/contact" onClick={closeMobile} style={{ color: location === "/contact" ? "#c8102e" : "#fff", textDecoration: "none", fontSize: "15px", fontWeight: location === "/contact" ? "700" : "400" }}>
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