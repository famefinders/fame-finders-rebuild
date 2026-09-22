import { FormEvent, useState } from "react";

const base = import.meta.env.BASE_URL;
const asset = (name: string) => `${base}images/${name}`;

const eventLinks = [
  ["Future Energy India", "https://famefinders.in/future-energy-india-2/"],
  [
    "Era of Artificial Intelligence Powered Management",
    "https://famefinders.in/era-of-artificial-intelligence-powered-management/",
  ],
  ["Influence with Influencers", "https://famefinders.in/influence-with-influencers/"],
  ["Educators Book Launch", "https://famefinders.in/51-educators-book/"],
];

const services = [
  [
    "Media Planing",
    "Expertise to make your brand voice stand out and reach the right audience at the right place and at the right time.",
    "https://famefinders.in/meida-planning/",
  ],
  [
    "Brand Strategy",
    "First delve deep into your unique brand identity, goals, and vision. Based on your brand’s market trends, audience behavior, and competitor analysis",
    "https://famefinders.in/brand-strategy/",
  ],
  [
    "Public Relations",
    "Our approach is built on deep industry knowledge, creative strategies, and a commitment to driving impactful results.",
    "https://famefinders.in/public-relations/",
  ],
  [
    "Digital Marketing",
    "Crafting strategies that amplify your brand’s visibility, engage your audience effectively, and drive measurable results.",
    "https://famefinders.in/digital-marketing/",
  ],
  [
    "Campaign & Events",
    "Our team thrives on creativity, meticulous planning, and flawless execution to create experiences that resonate and deliver measurable impact.",
    "https://famefinders.in/campaign-and-event/",
  ],
  [
    "Audio/Video Production",
    "The power of compelling storytelling and the role that high-quality media production plays in capturing your audience’s attention.",
    "https://famefinders.in/campaign-and-event/",
  ],
  [
    "Web Development/ Designing",
    "Web development services help create all types of web-based software and ensure great experience for web users.",
    "https://famefinders.in/audio-video-production/",
  ],
  [
    "Mobile App Development",
    "Mobile app development services helps to create all types of web-based and native apps and as per requirement of  users.",
    "https://famefinders.in/audio-video-production/",
  ],
  [
    "Education",
    "We offer a comprehensive suite of education services designed to empower individuals and organizations with the knowledge, skills, and insights necessary for success in today’s dynamic landscape.",
    "https://famefinders.in/education/",
  ],
];

const groups = [
  ["mydaiz", "whatsapp-image-2024-04-11-at-18-14-17-3428ee40-rem-69065aee.png", "https://mydaiz.in/"],
  ["studydaiz", "logo-studydaiz-removebg-preview-20f48e22.png", "https://studydaiz.com/"],
  ["influencais", "influencais-logo-c3f88d14.png", "https://influencais.com/"],
  ["news", "whatsapp-image-2024-12-19-at-1-54-35-pm-c279f41b.jpeg", "https://famefindersnews.in/"],
  ["kbd", "kbd-news-logo-1-7f15bd2a.png", "https://kbdnews.in/"],
  ["magazine", "4-7a13f4a3.png", "https://magazine.famefinders.in/"],
];

function ExternalLink({
  href,
  children,
  className = "",
  onClick,
  testId,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  testId: string;
}) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={onClick}
      data-testid={testId}
    >
      {children}
    </a>
  );
}

function Header() {
  const [eventsOpen, setEventsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileEventsOpen, setMobileEventsOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="site-header" data-testid="site-header">
      <div className="header-inner">
        <nav className="desktop-nav" aria-label="Main navigation">
          <ExternalLink href="https://famefinders.in/" className="nav-link" testId="link-home">
            Home
          </ExternalLink>
          <ExternalLink href="https://famefinders.in/our-services/" className="nav-link" testId="link-services">
            Services
          </ExternalLink>
          <ExternalLink href="https://famefinders.in/about-us/" className="nav-link" testId="link-about">
            About Us
          </ExternalLink>
          <div className="events-wrap">
            <button
              className="events-trigger"
              type="button"
              aria-expanded={eventsOpen}
              onClick={() => setEventsOpen((open) => !open)}
              data-testid="button-events-dropdown"
            >
              Events <span className="chevron" aria-hidden="true" />
            </button>
            <div className={`events-dropdown${eventsOpen ? " is-open" : ""}`} data-testid="menu-events-dropdown">
              {eventLinks.map(([label, href], index) => (
                <ExternalLink href={href} key={label} testId={`link-event-${index}`}>
                  {label}
                </ExternalLink>
              ))}
            </div>
          </div>
          <ExternalLink href="https://famefinders.in/pr-drive/" className="nav-link" testId="link-pr-drive">
            PR Drive
          </ExternalLink>
          <ExternalLink href="https://famefinders.in/contact-us/" className="nav-link" testId="link-contact">
            Contact Us
          </ExternalLink>
        </nav>

        <button
          className="mobile-toggle"
          type="button"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          data-testid="button-mobile-menu"
        >
          MENU
          <span className="mobile-bars" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <div className={`mobile-panel${mobileOpen ? " is-open" : ""}`} aria-hidden={!mobileOpen} data-testid="menu-mobile">
          <ExternalLink href="https://famefinders.in/" onClick={closeMobile} testId="mobile-link-home">
            Home
          </ExternalLink>
          <ExternalLink href="https://famefinders.in/our-services/" onClick={closeMobile} testId="mobile-link-services">
            Services
          </ExternalLink>
          <ExternalLink href="https://famefinders.in/about-us/" onClick={closeMobile} testId="mobile-link-about">
            About Us
          </ExternalLink>
          <div className="mobile-events">
            <button
              className="mobile-events-trigger"
              type="button"
              aria-expanded={mobileEventsOpen}
              onClick={() => setMobileEventsOpen((open) => !open)}
              data-testid="button-mobile-events"
            >
              Events <span className="chevron" aria-hidden="true" />
            </button>
            <div className={`mobile-submenu${mobileEventsOpen ? " is-open" : ""}`} data-testid="menu-mobile-events">
              {eventLinks.map(([label, href], index) => (
                <ExternalLink href={href} key={label} onClick={closeMobile} testId={`mobile-link-event-${index}`}>
                  {label}
                </ExternalLink>
              ))}
            </div>
          </div>
          <ExternalLink href="https://famefinders.in/pr-drive/" onClick={closeMobile} testId="mobile-link-pr-drive">
            PR Drive
          </ExternalLink>
          <ExternalLink href="https://famefinders.in/contact-us/" onClick={closeMobile} testId="mobile-link-contact">
            Contact Us
          </ExternalLink>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top" data-testid="section-hero">
      <div className="hero-content">
        <img
          className="hero-logo"
          src={asset("logo-white-removebg-preview-7309bf33.png")}
          alt="Fame Finders"
          data-testid="img-hero-logo"
        />
        <hr className="hero-rule" />
        <p className="hero-kicker">Branding  |  Events  |  Public Relations</p>
        <a className="hero-discover" href="#countdown" data-testid="link-discover">
          Discover
        </a>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section services" id="countdown" data-testid="section-services">
      <div className="section-inner">
        <h2 className="section-title">Our Services</h2>
        <div className="service-grid">
          {services.map(([title, description, href], index) => (
            <ExternalLink href={href} className="service-card" key={title} testId={`link-service-${index}`}>
              <h2>{title}</h2>
              <p>{description}</p>
            </ExternalLink>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about" id="about" data-testid="section-about">
      <div className="section-inner">
        <h2 className="section-title">About Us.</h2>
        <div className="about-copy">
          <h3>Grow and Experience Endless Possibilities</h3>
          <p>
            Fame Finders Media is a leading PR agency known for transforming brands by evolving and protecting their image. To date, we have worked with hundreds of businesses and crafted amazing strategies that put their brand in the spotlight. We offer a combination of services, including media planning, brand strategy, public relations, digital marketing, event management, and audio-visual production.
          </p>
          <p>Every brand has a story that needs a trusted and expert mediator to amplify the message by ensuring it leaves a lasting impression.</p>
          <p>We are a team of experts who are passionate about empowering your brand and enhancing its identity, whether your business is at a beginning phase or you’re a well-established brand.</p>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const benefits = [
    "Brand Campaign Strategy",
    "Research and Evaluation",
    "Brand Campaign Management",
    "Creative Concepts and Asset Production",
    "Brand Campaign Tracking",
  ];

  return (
    <section className="section benefits" data-testid="section-benefits">
      <div className="section-inner">
        <h2 className="section-title">Company benefits &amp; soltutions</h2>
        <div className="benefits-copy">
          <h3>Building Experience &amp; Give High Success Rates</h3>
          <p>In Media planning &amp; Brand Strategy, we lift our experience and relationships across diverse networks.</p>
        </div>
        <ul className="benefit-list">
          {benefits.map((benefit, index) => (
            <li key={benefit} data-testid={`text-benefit-${index}`}>
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <section className="section contact" id="contact" data-testid="section-contact">
      <div className="section-inner">
        <h2 className="section-title">We Love to Hear From You</h2>
        <form className="contact-form" onSubmit={handleSubmit} data-testid="form-contact">
          <input type="text" name="your-name" placeholder="Name" required data-testid="input-name" />
          <input type="email" name="your-email" placeholder="Email" required data-testid="input-email" />
          <textarea name="your-message" placeholder="Message" required data-testid="input-message" />
          <button className="contact-submit" type="submit" data-testid="button-send-message">
            Send message
          </button>
        </form>
        <div className="contact-status" role="status" aria-live="polite" data-testid="status-contact">
          {submitted ? "WE LOVE TO HEAR FROM YOU" : ""}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer data-testid="site-footer">
      <div className="map-space" aria-label="8A/8, W.E.A, Karol Bagh Behind MTNL Telephone Exchange on Pusa Road, Ganga Mandir Marg, WEA, Karol Bagh, New Delhi, Delhi 110005" />
      <div className="groups">
        <div className="groups-heading">
          <span>Our Groups</span>
        </div>
        <div className="groups-grid" data-testid="group-links">
          {groups.map(([className, image, href], index) => (
            <ExternalLink href={href} className={`group-link ${className}`} key={href} testId={`link-group-${index}`}>
              <img src={asset(image)} alt="" />
            </ExternalLink>
          ))}
        </div>
      </div>
      <div className="contact-strip">
        <div className="contact-strip-item address" data-testid="text-address">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 21s7-6.1 7-12A7 7 0 0 0 5 9c0 5.9 7 12 7 12Z" />
            <circle cx="12" cy="9" r="2.2" />
          </svg>
          <span>8A/8, WEA Karol Bagh New Delhi - 110005</span>
        </div>
        <div className="contact-strip-item">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.5 3.8 9.2 3l2 4.7-2.1 1.6a14 14 0 0 0 5.6 5.6l1.6-2.1 4.7 2-.8 2.7c-.4 1.4-1.8 2.2-3.2 1.9C10.2 18.1 5.9 13.8 4.6 7c-.3-1.4.5-2.8 1.9-3.2Z" />
          </svg>
          <ExternalLink href="tel:%20+91%209718750379" testId="link-phone-primary">
            +91-9718750379
          </ExternalLink>
        </div>
        <div className="contact-strip-item">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.5 3.8 9.2 3l2 4.7-2.1 1.6a14 14 0 0 0 5.6 5.6l1.6-2.1 4.7 2-.8 2.7c-.4 1.4-1.8 2.2-3.2 1.9C10.2 18.1 5.9 13.8 4.6 7c-.3-1.4.5-2.8 1.9-3.2Z" />
          </svg>
          <ExternalLink href="tel:%20+91%209718750379" testId="link-phone-secondary">
            +91-8376073133
          </ExternalLink>
        </div>
        <div className="contact-strip-item">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m3 5 9 8 9-8" />
            <path d="M3 5h18v14H3z" />
          </svg>
          <ExternalLink href="mailto:%20info@famefinders.in" testId="link-email">
            info@famefinders.in
          </ExternalLink>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="site">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;