import { Link } from "wouter";

export default function EventsPage() {
  const eventsList = [
    {
      title: "Influence with Influencers",
      image: "/images/event1.jpg",
    },
    {
      title: "Era of Artificial Intelligence Powered Management",
      image: "/images/event2.jpg",
    },
    {
      title: "15 Rising Artists in 2023",
      image: "/images/event3.jpg",
    },
    {
      title: "30 Inspirational Best Speakers",
      image: "/images/event4.jpg",
    },
    {
      title: "50 Empowering Women",
      image: "/images/event5.jpg",
    },
    {
      title: "5 Best Financial Advisors In India 2023",
      image: "/images/event6.jpg",
    },
  ];

  return (
    <div style={{ backgroundColor: "#12161c", color: "#f3f4f6", minHeight: "100vh", paddingTop: "80px" }}>
      {/* Hero Banner Section */}
      <div
        style={{
          position: "relative",
          backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "100px 20px 80px",
          textAlign: "center",
          borderBottom: "4px solid #c8102e",
        }}
      >
        <p style={{ fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", color: "#d1d5db", marginBottom: "10px", fontWeight: "600" }}>
          Fame Finders Presents
        </p>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: "800", color: "#ffffff", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "20px" }}>
          Influence With Influencers
        </h1>
        <div style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap", fontSize: "14px", color: "#e5e7eb", marginBottom: "30px" }}>
          <span>📍 Multipurpose Hall, India International Centre, New Delhi</span>
          <span>📅 24th January 2025</span>
        </div>
      </div>

      {/* Breadcrumb strip */}
      <div style={{ backgroundColor: "#1c222b", padding: "12px 24px", fontSize: "13px", color: "#9ca3af", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Link href="/" style={{ color: "#9ca3af", textDecoration: "none" }}>Home</Link> &nbsp;|&nbsp; <span style={{ color: "#ffffff" }}>Events</span>
        </div>
      </div>

      {/* Intro Description Section */}
      <div style={{ maxWidth: "1000px", margin: "60px auto", padding: "0 24px", lineHeight: "1.8", color: "#d1d5db", fontSize: "15px" }}>
        <h2 style={{ fontSize: "28px", color: "#ffffff", marginBottom: "20px", fontWeight: "700" }}>Events</h2>
        <p style={{ marginBottom: "16px" }}>
          Fame Finders Media is a leading PR agency known for transforming brands by evolving and protecting their image. To date, we have worked with hundreds of businesses and crafted amazing strategies that put their brand in the spotlight.
        </p>
      </div>

      {/* Events Image Cards Grid (Fixed proportions for all posters) */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px 80px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "30px" }}>
        {eventsList.map((evt, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: "#161b22",
              borderRadius: "8px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              height: "380px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={evt.image}
              alt={evt.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                display: "block",
                backgroundColor: "#161b22",
              }}
              onError={(e) => {
                e.currentTarget.style.display = "none";
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  parent.style.display = "flex";
                  parent.style.alignItems = "center";
                  parent.style.justifyContent = "center";
                  parent.style.color = "#9ca3af";
                  parent.style.textAlign = "center";
                  parent.innerHTML = `<div style="padding: 20px;">[ Image Missing: ${evt.title} ]<br/><span style="font-size: 11px; color: #6b7280;">Please place your image at ${evt.image}</span></div>`;
                }
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}