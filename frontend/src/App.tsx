import { Link, Route, Switch } from "wouter";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import PrDrivePage from "./pages/PrDrivePage";
import ContactPage from "./pages/ContactPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EventsPage from "./pages/EventsPage";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div
      style={{
        backgroundColor: "#0d1117", // Website ke theme ke according rich dark outer background
        minHeight: "100vh",
        padding: "24px 0",
      }}
    >
      <div
        className="site"
        style={{
          maxWidth: "1380px",
          margin: "0 auto",
          backgroundColor: "#12161c", // Inner card ka matching dark background
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.7)",
          borderRadius: "16px",
          overflow: "hidden",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          position: "relative",
        }}
      >
        {/* Scroll to top on route change */}
        <ScrollToTop />

        {/* Global Header Component */}
        <Header />

        {/* Main Pages Switch */}
        <main>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/services" component={ServicesPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/pr-drive" component={PrDrivePage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/events" component={EventsPage} />
            <Route>
              <div style={{ padding: "160px 20px", textAlign: "center", color: "#ffffff" }}>
                <h2>404 - Page Not Found</h2>
                <Link href="/" style={{ color: "#c8102e", marginTop: "12px", display: "inline-block" }}>
                  Back to Home
                </Link>
              </div>
            </Route>
          </Switch>
        </main>

        {/* Global Footer Component */}
        <Footer />
      </div>
    </div>
  );
}