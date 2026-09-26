import { useState } from "react";

const servicesData = [
  {
    title: "Media Planing",
    desc: "At Fame Finders Media, we have the expertise to make your brand voice stand out and reach the right audience at the right place and at the right time. We specialize in disseminating your marketing message the way it should be and ensuring maximized impact and visibility. We use a comprehensive approach for the best possible reach. Here are the steps included",
  },
  {
    title: "Brand Strategy",
    desc: "At Fame Finders Media, we are a team of experts who deliberately work together to position your brand in the best possible spotlight. For this, we first delve deep into your unique brand identity, goals, and vision. Based on your brand’s market trends, audience behavior, and competitor analysis, we shape strategies that drive growth and enhance visibility.",
  },
  {
    title: "Public Relations",
    desc: "At Fame Finders Media, we specialize in crafting strategic public relations campaigns that enhance brand visibility, reputation, and engagement. With a team of seasoned professionals, we offer comprehensive PR services tailored to meet the unique needs of our clients. Our approach is built on deep industry knowledge, creative strategies, and a commitment to driving impactful results. Here’s a detailed description of our public relations services.",
  },
  {
    title: "Digital Marketing",
    desc: "At Fame Finders Media, we take immense pride in being a leading PR agency, offering top-notch digital marketing services tailored to meet your unique business needs. Our team of seasoned experts is dedicated to crafting strategies that amplify your brand’s visibility, engage your audience effectively, and drive measurable results. With a deep understanding of the ever-evolving digital landscape, we ensure that our services remain innovative, data-driven, and impactful.",
  },
  {
    title: "Campaign and Event",
    desc: "At Fame Finders Media, we pride ourselves on being a leading PR agency that brings ideas to life through exceptional events and campaigns. Our team thrives on creativity, meticulous planning, and flawless execution to create experiences that resonate and deliver measurable impact. From conceptualization to execution, we work collaboratively to ensure that every project is a resounding success.",
  },
  {
    title: "Audio/Video Production",
    desc: "At Fame Finders Media, we take pride in offering top-notch audio and video production services tailored to amplify your brand’s voice and vision. As a leading PR agency, we understand the power of compelling storytelling and the role that high-quality media production plays in capturing your audience’s attention. With a perfect blend of creativity, technical expertise, and strategic insight, we transform ideas into captivating visuals and soundscapes.",
  },
  {
    title: "Web Development Designing",
    desc: "At Fame Finders Media, we take pride in offering top-notch Web development services help create all types of web-based software and ensure great experience for web users. Different types of web solutions may seem similar from the outside, but we approach them differently and know what factors are winning in each case.",
  },
  {
    title: "Education",
    desc: "At Fame Finders Media, we offer a comprehensive suite of education services designed to empower individuals and organizations with the knowledge, skills, and insights necessary for success in today’s dynamic landscape. Our approach blends strategic communication with innovative teaching methods to provide a transformative learning experience. We cater to various needs—from corporate training to public workshops—ensuring that our clients are well-equipped to navigate and excel in their respective fields.",
  },
];

const testimonials = [
  {
    name: "Dr. Amit Dua",
    role: "CEO, Yushu Excellence Technologies",
    feedback:
      "Fame Finders has done an exceptional job of building users' awareness of our Yushu brand. Team Fame Finders is also on the pulse of the goings-on in the market which helps inform our media strategy.",
    img: "/images/dramit.jpg",
  },
  {
    name: "Anil Joshi",
    role: "Founder, EMBEBO.COM",
    feedback:
      "Working with Fame Finders has been a remarkable experience. I cannot stress enough how much we value and appreciate Fame Finders and its team efforts in our newest health care company.",
    img: "/images/aniljoshi.jpg",
  },
  {
    name: "Dr. Parin Somani",
    role: "Entrepreneur & Motivational Speaker",
    feedback:
      "Fame Finders commitment to excellence, creativity, and out-of-the-box perspective has set a new benchmark in providing results-oriented campaigns for any brand. I regard Fame Finders as the best of the best.",
    img: "/images/drparin.jpg",
  },
  {
    name: "Dame Munni Irone",
    role: "Founder Art 4 Peace Awards, California, USA",
    feedback:
      "My brand has benefited through numerous media opportunities, bylined news, speaking engagements, and panel discussions. I have seen an increase in new business. Thank you, Fame Finders",
    img: "/images/damemunni.jpg",
  },
];

export default function ServicesPage() {
  const [selectedFilter, setSelectedFilter] = useState("ALL SERVICES");

  return (
    <div style={{ fontFamily: "inherit", color: "#222", backgroundColor: "#fff" }}>
      {/* 1. Hero / Video Banner Section */}
      <section
        style={{
          backgroundColor: "#424242",
          minHeight: "480px",
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
              width: "120px",
              height: "120px",
              border: "5px solid #a38241",
              backgroundColor: "#1c1c1c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "76px",
              fontWeight: 900,
              color: "#ffffff",
              boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
            }}
          >
            F
          </div>
          <div style={{ textAlign: "left" }}>
            <h1 style={{ fontSize: "52px", fontWeight: 800, letterSpacing: "1px", margin: 0, lineHeight: 1.1 }}>
              Strategy &amp;
            </h1>
            <h2 style={{ fontSize: "42px", fontWeight: 300, color: "#a38241", margin: 0, letterSpacing: "1px" }}>
              Identity
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
          &nbsp;|&nbsp; <span style={{ color: "#777" }}>Services</span>
        </div>
      </div>

      {/* 3. Explore Header & Dropdown Filter */}
      <section style={{ maxWidth: "1140px", margin: "0 auto", padding: "60px 20px 40px" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "24px",
            borderBottom: "1px solid #ddd",
            paddingBottom: "40px",
          }}
        >
          <div style={{ maxWidth: "680px" }}>
            <h2 style={{ fontSize: "32px", fontWeight: 800, color: "#1f242d", margin: "0 0 16px" }}>
              Explore our expertise.
              <br />
              You won’t be disappointed.
            </h2>
            <p style={{ color: "#555", lineHeight: "1.7", fontSize: "15px", margin: 0 }}>
              Brand. Reputation. Experience. The authenticity trifecta. When who you are aligns with who people think you
              are – and it's validated by experiences – that's a powerful place to be. Through data-driven intelligence,
              bold creative and strategic purpose, we help clients all over the world find that sweet spot.
            </p>
          </div>

          <div style={{ minWidth: "240px", textAlign: "right" }}>
            <span
              style={{
                display: "block",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "1.5px",
                color: "#666",
                marginBottom: "8px",
              }}
            >
              WHAT ARE YOU LOOKING FOR?
            </span>
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 14px",
                border: "2px solid #222",
                fontWeight: 700,
                fontSize: "13px",
                textTransform: "uppercase",
                background: "#fff",
                cursor: "pointer",
                outline: "none",
              }}
            >
              <option value="ALL SERVICES">ALL SERVICES</option>
              {servicesData.map((s) => (
                <option key={s.title} value={s.title}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* 4. Alternating Service Rows */}
      <section style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 20px 80px" }}>
        {servicesData
          .filter((item) => selectedFilter === "ALL SERVICES" || item.title === selectedFilter)
          .map((item, idx) => {
            const isTinted = idx % 2 === 1;
            return (
              <div
                key={item.title}
                style={{
                  display: "grid",
                  gridTemplateColumns: "320px 1fr",
                  gap: "40px",
                  padding: "40px 30px",
                  backgroundColor: isTinted ? "#f4fbf7" : "#ffffff",
                  borderBottom: "1px solid #e0e0e0",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <span style={{ fontSize: "24px", color: "#333", userSelect: "none" }}>❄</span>
                  <h3
                    style={{
                      fontSize: "24px",
                      fontWeight: 800,
                      margin: 0,
                      color: "#1a1a1a",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
                <div>
                  <p style={{ color: "#444", lineHeight: "1.8", fontSize: "14px", margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
      </section>

      {/* 5. "What People Says" Testimonial Section */}
      <section style={{ backgroundColor: "#1e5b82", padding: "90px 20px" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontSize: "44px",
              fontWeight: 900,
              color: "#ffffff",
              marginBottom: "60px",
              letterSpacing: "1px",
            }}
          >
            What People Says
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "30px",
              textAlign: "left",
            }}
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                style={{
                  backgroundColor: "#164969",
                  padding: "36px 32px",
                  borderRadius: "4px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                }}
              >
                <p
                  style={{
                    color: "#e1eef6",
                    lineHeight: "1.7",
                    fontSize: "14px",
                    marginBottom: "28px",
                  }}
                >
                  {t.feedback}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <img
                    src={t.img}
                    alt={t.name}
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "2px solid #ffffff",
                    }}
                  />
                  <div>
                    <h4 style={{ color: "#ffffff", fontSize: "16px", fontWeight: 700, margin: "0 0 4px" }}>
                      {t.name}
                    </h4>
                    <p style={{ color: "#a5cce3", fontSize: "12px", margin: 0 }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}