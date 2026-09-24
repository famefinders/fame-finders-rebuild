import { FormEvent, useState } from "react";

const asset = (name: string) => `/images/${name}`;

const services = [
  {
    title: "Media Planing",
    desc: "Expertise to make your brand voice stand out and reach the right audience at the right place and at the right time.",
  },
  {
    title: "Brand Strategy",
    desc: "First delve deep into your unique brand identity, goals, and vision. Based on your brand’s market trends, audience behavior, and competitor analysis",
  },
  {
    title: "Public Relations",
    desc: "Our approach is built on deep industry knowledge, creative strategies, and a commitment to driving impactful results.",
  },
  {
    title: "Digital Marketing",
    desc: "Crafting strategies that amplify your brand’s visibility, engage your audience effectively, and drive measurable results.",
  },
  {
    title: "Campaign & Events",
    desc: "Our team thrives on creativity, meticulous planning, and flawless execution to create experiences that resonate and deliver measurable impact.",
  },
  {
    title: "Audio/Video Production",
    desc: "The power of compelling storytelling and the role that high-quality media production plays in capturing your audience’s attention.",
  },
  {
    title: "Web Development/ Designing",
    desc: "Web development services help create all types of web-based software and ensure great experience for web users.",
  },
  {
    title: "Mobile App Development",
    desc: "Mobile app development services helps to create all types of web-based and native apps and as per requirement of users.",
  },
  {
    title: "Education",
    desc: "We offer a comprehensive suite of education services designed to empower individuals and organizations with the knowledge, skills, and insights necessary for success in today’s dynamic landscape.",
  },
];

const benefits = [
  "Brand Campaign Strategy",
  "Research and Evaluation",
  "Brand Campaign Management",
  "Creative Concepts and Asset Production",
  "Brand Campaign Tracking",
];

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ fontFamily: "inherit", color: "#222", backgroundColor: "#fff" }}>
      {/* 1. Hero Section */}
      <section className="hero" id="top" data-testid="section-hero">
        <div className="hero-content">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              border: "3px solid #c8a45c",
              padding: "16px 36px",
              backgroundColor: "rgba(0, 0, 0, 0.45)",
              marginBottom: "24px",
              gap: "14px",
            }}
          >
            <div
              style={{
                backgroundColor: "#111111",
                color: "#ffffff",
                width: "60px",
                height: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "42px",
                fontWeight: 900,
                fontFamily: "sans-serif",
              }}
            >
              F
            </div>
            <span
              style={{
                fontSize: "clamp(36px, 6vw, 64px)",
                fontWeight: 900,
                color: "#ffffff",
                letterSpacing: "1px",
                fontFamily: "sans-serif",
              }}
            >
              AME<span style={{ fontWeight: 400, fontStyle: "italic" }}>finders</span>
            </span>
          </div>

          <hr className="hero-rule" />
          <p className="hero-kicker">Branding &nbsp;|&nbsp; Events &nbsp;|&nbsp; Public Relations</p>
          <a
            className="hero-discover"
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("services");
            }}
            data-testid="link-discover"
          >
            DISCOVER
          </a>
        </div>
      </section>

      {/* 2. Our Services Section */}
      <section id="services" style={{ padding: "90px 20px 80px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "26px",
                fontWeight: 800,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#1f242d",
                margin: "0 0 12px",
              }}
            >
              OUR SERVICES
            </h2>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", color: "#999" }}>
              <span>············</span>
              <span>▼</span>
              <span>············</span>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              columnGap: "40px",
              rowGap: "50px",
            }}
          >
            {services.map((item, idx) => (
              <div
                key={idx}
                style={{
                  borderBottom: "1px solid #e5e7eb",
                  paddingBottom: "30px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 800,
                    color: "#222222",
                    marginBottom: "14px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.7",
                    color: "#555555",
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About Us Section */}
      <section id="about" style={{ backgroundColor: "#252c36", color: "#ffffff", padding: "100px 20px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontSize: "26px",
              fontWeight: 800,
              letterSpacing: "2px",
              textTransform: "uppercase",
              margin: "0 0 12px",
            }}
          >
            ABOUT US.
          </h2>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", color: "#9ca3af", marginBottom: "40px" }}>
            <span>············</span>
            <span>▼</span>
            <span>············</span>
          </div>

          <h3
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: "30px",
              letterSpacing: "0.5px",
            }}
          >
            Grow and Experience Endless Possibilities
          </h3>

          <div style={{ color: "#d1d5db", fontSize: "15px", lineHeight: "1.85", display: "flex", flexDirection: "column", gap: "22px" }}>
            <p style={{ margin: 0 }}>
              Fame Finders Media is a leading PR agency known for transforming brands by evolving and protecting their image.
              To date, we have worked with hundreds of businesses and crafted amazing strategies that put their brand in the
              spotlight. We offer a combination of services, including media planning, brand strategy, public relations, digital
              marketing, event management, and audio-visual production.
            </p>
            <p style={{ margin: 0 }}>
              Every brand has a story that needs a trusted and expert mediator to amplify the message by ensuring it leaves a
              lasting impression.
            </p>
            <p style={{ margin: 0 }}>
              We are a team of experts who are passionate about empowering your brand and enhancing its identity, whether your
              business is at a beginning phase or you are a well-established brand.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Company Benefits & Solutions Section */}
      <section id="benefits" style={{ backgroundColor: "#1d5c84", color: "#ffffff", padding: "80px 20px 100px" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontSize: "26px",
              fontWeight: 800,
              letterSpacing: "2px",
              textTransform: "uppercase",
              margin: "0 0 12px",
            }}
          >
            COMPANY BENEFITS &amp; SOLTUTIONS
          </h2>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", color: "rgba(255, 255, 255, 0.7)", marginBottom: "36px" }}>
            <span>············</span>
            <span>▼</span>
            <span>············</span>
          </div>

          <h3 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "16px" }}>
            Building Experience &amp; Give High Success Rates
          </h3>
          <p style={{ color: "#cfe2ee", fontSize: "15px", marginBottom: "50px" }}>
            In Media planning &amp; Brand Strategy, we lift our experience and relationships across diverse networks.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "28px",
            }}
          >
            {benefits.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#ffffff",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    border: "2px solid #ffffff",
                    backgroundColor: "transparent",
                  }}
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}