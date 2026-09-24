export default function AboutPage() {
  const philosophies = [
    {
      num: "01",
      title: "Strategic Storytelling",
      desc: "We believe every brand has a unique story. Our approach focuses on crafting compelling narratives that connect deeply with audiences, leaving a lasting impression.",
      icon: "👥",
    },
    {
      num: "02",
      title: "Collaborative Growth",
      desc: "We thrive on partnerships. By working closely with our clients, we ensure that every strategy aligns with their vision and drives measurable success.",
      icon: "📊",
    },
    {
      num: "03",
      title: "Innovation-Driven Solutions",
      desc: "Innovation is at the core of everything we do. From creative campaigns to cutting-edge digital tools, we deliver fresh ideas that set brands apart.",
      icon: "💡",
    },
    {
      num: "04",
      title: "Trust and Transparency",
      desc: "We value relationships built on trust. Transparent communication and integrity guide our work, ensuring our clients feel confident and informed every step of the way.",
      icon: "🛡️",
    },
    {
      num: "05",
      title: "Excellence in Execution",
      desc: "Execution matters. Our team is dedicated to delivering high-quality results with precision, ensuring every campaign exceeds expectations and achieves tangible outcomes.",
      icon: "⚙️",
    },
    {
      num: "06",
      title: "Empowerment Through Expertise",
      desc: "We empower brands by sharing our knowledge and insights. Our expertise helps businesses grow, adapt, and thrive in an ever-evolving market.",
      icon: "👤",
    },
  ];

  return (
    <div style={{ fontFamily: "inherit", color: "#222", backgroundColor: "#fff" }}>
      {/* 1. Hero Banner */}
      <section
        style={{
          backgroundColor: "#737373",
          minHeight: "440px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
            textAlign: "center",
            color: "#ffffff",
          }}
        >
          <div
            style={{
              width: "110px",
              height: "110px",
              border: "5px solid #a38241",
              backgroundColor: "#1c1c1c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "70px",
              fontWeight: 900,
              color: "#ffffff",
              boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
            }}
          >
            F
          </div>
          <div style={{ textAlign: "left" }}>
            <h1 style={{ fontSize: "48px", fontWeight: 800, letterSpacing: "1px", margin: 0, lineHeight: 1.1, color: "#1e1e1e" }}>
              Advertising
            </h1>
            <h2 style={{ fontSize: "38px", fontWeight: 300, color: "#c8a45c", margin: 0, letterSpacing: "1px" }}>
              Campaigns
            </h2>
          </div>
        </div>
      </section>

      {/* 2. Breadcrumb bar */}
      <div
        style={{
          borderBottom: "1px solid #e0e0e0",
          backgroundColor: "#f9f9f9",
          padding: "12px 0",
        }}
      >
        <div
          style={{
            maxWidth: "1140px",
            margin: "0 auto",
            padding: "0 20px",
            fontSize: "14px",
            color: "#666",
          }}
        >
          <a href="/" style={{ color: "#222", textDecoration: "none", fontWeight: 600 }}>
            Home
          </a>{" "}
          &nbsp;|&nbsp; <span style={{ color: "#777" }}>About Us</span>
        </div>
      </div>

      {/* 3. Main About Us Copy Section */}
      <section style={{ maxWidth: "1140px", margin: "0 auto", padding: "80px 20px 90px" }}>
        <h2 style={{ fontSize: "32px", fontWeight: 800, color: "#1a1a1a", marginBottom: "30px", letterSpacing: "0.5px" }}>
          About Us
        </h2>

        <div style={{ color: "#444444", fontSize: "15px", lineHeight: "1.85", display: "flex", flexDirection: "column", gap: "24px" }}>
          <p style={{ margin: 0 }}>
            Fame Finders Media is a leading PR agency with over 15 years of marvelous experience in public relations and
            digital marketing, recognized for transforming brands through an effective brand strategy that evolves and protects
            and maintains their positive image. To date, we have worked with hundreds of businesses and crafted wonderful
            strategies that put their brand in the spotlight. We offer a combination of services, including media planning,
            brand strategy, public relations, digital marketing, event management, and audio-visual production.
          </p>
          <p style={{ margin: 0 }}>
            Every brand has a story that needs a trusted and expert mediator to amplify the message by ensuring it leaves a
            lasting impression.
          </p>
          <p style={{ margin: 0 }}>
            We are a team of experts who are passionate about empowering your brand and enhancing its identity, whether your
            business is at a beginning phase or you’re a well-established brand.
          </p>
        </div>
      </section>

      {/* 4. Our Philosophy Section */}
      <section style={{ backgroundColor: "#1d5c84", color: "#ffffff", padding: "100px 20px 120px" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
          <div style={{ marginBottom: "60px" }}>
            <span style={{ fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", color: "#cfe2ee", display: "block", marginBottom: "8px" }}>
              About Us
            </span>
            <h2 style={{ fontSize: "38px", fontWeight: 900, letterSpacing: "1px", margin: 0 }}>
              Our Philosophy
            </h2>
            <div style={{ width: "80px", height: "2px", backgroundColor: "rgba(255,255,255,0.4)", marginTop: "16px" }} />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "36px",
            }}
          >
            {philosophies.map((item) => (
              <div
                key={item.num}
                style={{
                  backgroundColor: "#174d70",
                  padding: "40px 36px",
                  borderRadius: "4px",
                  position: "relative",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  {/* Top Header Row with Icon & Number */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px" }}>
                    <span style={{ fontSize: "32px" }}>{item.icon}</span>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span style={{ fontSize: "14px", fontWeight: 700, color: "rgba(255,255,255,0.7)" }}>{item.num}</span>
                      <span style={{ display: "inline-block", width: "2px", height: "30px", backgroundColor: "rgba(255,255,255,0.5)" }} />
                    </div>
                  </div>

                  <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#ffffff", marginBottom: "16px", letterSpacing: "0.5px" }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "#dbeafe", fontSize: "14px", lineHeight: "1.75", margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}