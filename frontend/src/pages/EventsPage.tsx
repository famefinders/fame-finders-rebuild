import { Link } from "wouter";

export default function EventsPage() {
  const eventsList = [
    {
      title: "Influence with Influencers",
      subtitle: "Speech & Awards Ceremony",
      date: "24 January 2025 | 9AM - 2PM",
      location: "India International Centre, New Delhi",
      imagePlaceholder: "Influence with Influencers Poster",
    },
    {
      title: "Era of Artificial Intelligence Powered Management",
      subtitle: "CSR Research Foundation Event",
      date: "20 November 2024",
      location: "Le Meridien, New Delhi",
      imagePlaceholder: "AI Powered Management Poster",
    },
    {
      title: "15 Rising Artists in 2023",
      subtitle: "Are you actor, model, dancer, singer, anchor or comedian?",
      description: "Introduce your profile to millions of readers across the globe. Get featured in Business Standard, ANI, ThePrint, Google News, etc.",
      imagePlaceholder: "15 Rising Artists Poster",
    },
    {
      title: "30 Inspirational Best Speakers",
      subtitle: "Nominate Now & Get Featured",
      description: "Fame Finders is on a quest to discover the 30 Best Inspirational Speakers to look up to in 2023.",
      imagePlaceholder: "30 Inspirational Best Speakers Poster",
    },
    {
      title: "50 Empowering Women",
      subtitle: "Leaders to Follow in 2023",
      description: "Empowering women leaders and celebrating their exceptional success stories across multiple platforms.",
      imagePlaceholder: "50 Empowering Women Poster",
    },
    {
      title: "5 Best Financial Advisors In India 2023",
      subtitle: "Advisors Recognition Campaign",
      description: "Fame Finders Media is back again with the announcement of its upcoming campaign 5 Best Financial Advisors in India 2023.",
      imagePlaceholder: "Financial Advisors Poster",
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
          Fame Finders Media is a leading PR agency known for transforming brands by evolving and protecting their image. To date, we have worked with hundreds of businesses and crafted amazing strategies that put their brand in the spotlight. We offer a combination of services, including media planning, brand strategy, public relations, digital marketing, event management, and audio-visual production.
        </p>
        <p style={{ marginBottom: "16px" }}>
          Every brand has a story that needs a trusted and expert mediator to amplify the message by ensuring it leaves a lasting impression.
        </p>
        <p>
          We are a team of experts who are passionate about empowering your brand and enhancing its identity, whether your business is at a beginning phase or you're a well-established brand.
        </p>
      </div>

      {/* Events Cards Grid (Image Placeholders provided) */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px 80px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "30px" }}>
        {eventsList.map((evt, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: "#1c222b",
              borderRadius: "8px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            }}
          >
            {/* Image Placeholder Box where user can insert real images */}
            <div
              style={{
                height: "240px",
                backgroundColor: "#2a323d",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderBottom: "2px dashed rgba(255,255,255,0.2)",
                padding: "20px",
                textAlign: "center",
                color: "#9ca3af",
                fontSize: "13px",
                fontWeight: "500",
              }}
            >
              [ Image Space: {evt.imagePlaceholder} ]<br />
              <span style={{ fontSize: "11px", color: "#6b7280" }}>(Place your image file in public/images/ and reference here)</span>
            </div>

            <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontSize: "20px", color: "#ffffff", marginBottom: "8px", fontWeight: "700" }}>{evt.title}</h3>
                {evt.subtitle && <p style={{ fontSize: "14px", color: "#c8102e", marginBottom: "12px", fontWeight: "600" }}>{evt.subtitle}</p>}
                {evt.description && <p style={{ fontSize: "13px", color: "#9ca3af", lineHeight: "1.6", marginBottom: "16px" }}>{evt.description}</p>}
                {evt.date && <p style={{ fontSize: "13px", color: "#d1d5db", marginBottom: "6px" }}>📅 {evt.date}</p>}
                {evt.location && <p style={{ fontSize: "13px", color: "#d1d5db", marginBottom: "16px" }}>📍 {evt.location}</p>}
              </div>

              <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "16px", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "12px", color: "#9ca3af" }}>
                <span>📞 +91 97187 50379</span>
                <Link href="/contact" style={{ color: "#c8102e", textDecoration: "none", fontWeight: "700" }}>
                  Enquire Now →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}