const prItems = [
  {
    title: "Fame Finders Unveils 'India's Top Coaches to Follow in 2025' – Celebrating the Nation's Most Influential Mentors and Experts.",
  },
  {
    title: "Fame Finders Launches Celebrating Eminent Personalities Campaign, Spotlighting Visionaries, Innovators, and Inspirational Leaders",
  },
  {
    title: 'Fame Finders Reveals "10 Successful Chartered Accountant Entrepreneurs In India"',
  },
  {
    title: "Fame Finders honored 25 Inspiring coaches who are transforming the lives of people",
  },
  {
    title: "Health and Education Experts of 2024: Pioneering Innovations Shape Tomorrow's Wellness and Learning Landscape",
  },
  {
    title: "Fame Finders presents the Leading 5 Successful Entrepreneurs In India",
  },
  {
    title: "Fame Finders Introduces the top 10 best authors who made the impact on society",
  },
  {
    title: "The 5 Most Outstanding Indian Photographers to watch In 2023 are presented by Fame Finders Media",
  },
  {
    title: "Fame Finders announced the names of India's Top 10 Coaches Of the Year 2022",
  },
  {
    title: "Top 10 rising startups In 2021-22 announced by Fame Finders",
  },
  {
    title: "Top 10 Emerging Women Entrepreneurs of the year 2021-22 by Fame Finders",
  },
  {
    title: "Fame Finders declares India's Top 20 Fastest Growing Startups of 2022",
  },
  {
    title: "The names of Top 10 Inspiring Personalities of the year 2022 declared by Fame Finders",
  },
  {
    title: "Fame Finders Introduces India's top 20 healthcare experts In 2022",
  },
  {
    title: "Top 10 Rising NGOs In 2021-22 announced by Fame Finders",
  },
  {
    title: "Top 10 Prominent Educational Institutions of the year 2022-23 declared by Fame Finders",
  },
  {
    title: "Top 20 Industry Experts of the year 2021-22 unveiled In virtual award ceremony conducted by Fame Finders",
  },
  {
    title: "The Top 20 Successful Entrepreneurs of the year 2021-22 revealed by Fame Finders",
  },
  {
    title: "India's Top 10 Most Inspiring Young Entrepreneurs of the year 2022 honored by Fame Finders",
  },
  {
    title: "Top 10 Prominent and Dynamic Personalities to watch In 2023",
  },
  {
    title: "Top 10 Chartered Accountants of 2023 to get financial advice",
  },
  {
    title: "Top 10 Rising MSMEs (Micro, Small and Medium Enterprises) In 2021-22 announced by Fame Finders",
  },
  {
    title: "Fame Finders Media Introduces 10 Prominent Global Personalities Shaping The Future With Their Remarkable Achievements",
  },
];

export default function PrDrivePage() {
  return (
    <div style={{ fontFamily: "inherit", color: "#222", backgroundColor: "#fff" }}>
      {/* 1. Hero / Video Banner Section */}
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
              Strategy &amp;
            </h1>
            <h2 style={{ fontSize: "38px", fontWeight: 300, color: "#c8a45c", margin: 0, letterSpacing: "1px" }}>
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
          &nbsp;|&nbsp; <span style={{ color: "#777" }}>PR Drive</span>
        </div>
      </div>

      {/* 3. Introduction Copy Section */}
      <section style={{ maxWidth: "1140px", margin: "0 auto", padding: "60px 20px 40px" }}>
        <div style={{ color: "#333", fontSize: "15px", lineHeight: "1.85", display: "flex", flexDirection: "column", gap: "20px" }}>
          <p style={{ margin: 0 }}>
            We, <strong>Fame Finders Media</strong> Group, are pleased to introduce our network of digital news portals, which are committed to delivering timely, credible, and diverse content to our growing audience.
          </p>
          <p style={{ margin: 0 }}>
            <strong>Our platforms include:</strong>
          </p>
          <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
            <li><strong>Fame Finders News</strong> – famefindersnews.in</li>
            <li><strong>KBD News</strong> – kbdnews.in</li>
            <li><strong>My Diaz</strong> – mydaiz.in</li>
          </ul>
          <p style={{ margin: 0 }}>
            Each portal serves a unique audience and focuses on a range of topics including <strong>current affairs, business, lifestyle, entertainment</strong>, and more. Through these platforms, we strive to uphold journalistic integrity while engaging readers with meaningful and informative stories.
          </p>
        </div>
      </section>

      {/* 4. PR Drive Campaigns Grid with Image Placeholders */}
      <section style={{ maxWidth: "1140px", margin: "0 auto", padding: "40px 20px 100px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "40px",
          }}
        >
          {prItems.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "6px",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* IMAGE PLACEHOLDER SECTION */}
              <div
                style={{
                  width: "100%",
                  height: "180px",
                  backgroundColor: "#f3f4f6",
                  borderBottom: "1px solid #e5e7eb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#9ca3af",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "0.5px",
                  textAlign: "center",
                  padding: "10px",
                }}
              >
                [ INSERT IMAGE HERE ]
              </div>

              {/* Card Title */}
              <div style={{ padding: "20px" }}>
                <h3
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#1f2937",
                    lineHeight: "1.5",
                    margin: 0,
                  }}
                >
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}