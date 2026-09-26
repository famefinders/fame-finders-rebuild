import { useState } from "react";
import { Link, Route, Switch } from "wouter";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import PrDrivePage from "./pages/PrDrivePage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";

export default function App() {
  const [eventsOpen, setEventsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => {
    setMobileOpen(false);
    setEventsOpen(false);
  };

  return (
    <div className="site">
      {/* Top Sticky Header */}
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
                src="/images/famefinders-logo.jpg"
                alt="Fame Finders"
                style={{ height: "36px", objectFit: "contain", cursor: "pointer" }}
                onError={(e) => {
                  // Fallback agar image load na ho toh text dikhaye
                  e.currentTarget.style.display = "none";
                }}
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

            {/* Events Dropdown */}
            <div style={{ position: "relative" }}>
              <button
                type="button"
                onClick={() => setEventsOpen((prev) => !prev)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#f3f4f6",
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  padding: 0,
                }}
              >
                EVENTS <span style={{ fontSize: "9px" }}>▼</span>
              </button>

              {eventsOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 12px)",
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
                      href="/services"
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
            <Link href="/pr-drive" onClick={closeMobile} style={{ color: "#fff", textDecoration: "none", fontSize: "14px" }}>
              PR Drive
            </Link>
            <Link href="/contact" onClick={closeMobile} style={{ color: "#fff", textDecoration: "none", fontSize: "14px" }}>
              Contact Us
            </Link>
          </div>
        )}
      </header>

      {/* Main Pages Switch */}
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/pr-drive" component={PrDrivePage} />
          <Route path="/contact" component={ContactPage} />
          <Route>
            <div style={{ padding: "160px 20px", textAlign: "center" }}>
              <h2>404 - Page Not Found</h2>
              <Link href="/" style={{ color: "#c8102e", marginTop: "12px", display: "inline-block" }}>
                Back to Home
              </Link>
            </div>
          </Route>
        </Switch>
      </main>

      {/* Global Footer Added */}
      <Footer />

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
    </div>
  );
}