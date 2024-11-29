import "./footer.css"; // Import the CSS file for styling

const Footer = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Eye & My Care",
    url: "https://www.eyeandmycare.com",
    logo: "https://www.eyeandmycare.com/logo.png",
    sameAs: [
      "https://www.facebook.com/eyeandmycare",
      "https://www.instagram.com/eye_n_my_care",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+9384133714",
      contactType: "Customer Service",
      areaServed: "IN",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Main Street",
      addressLocality: "Thuckalay",
      addressRegion: "Tamil Nadu",
      postalCode: "123456",
      addressCountry: "IN",
    },
  };

  return (
    <footer className="footer" data-aos="fade-up">
      <div className="footer-content">
        <section className="footer-left">
          <h2 className="footer-logo">
            <a href="/" title="Eye & My Care - Optometrist in Thuckalay">
              Eye & My Care
            </a>
          </h2>
          <p className="footer-description">
            Trusted optometrist providing comprehensive eye care, specializing
            in geriatric eye health in Thuckalay.
          </p>
        </section>

        <section className="footer-middle">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#about" title="Learn about Eye & My Care">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" title="Our optometry services in Thuckalay">
                Our Services
              </a>
            </li>
            <li>
              <a href="#contact" title="Get in touch with us">
                Contact
              </a>
            </li>
          </ul>
        </section>

        <section className="footer-right">
          <h3>Contact Us</h3>
          <p>
            Phone:{" "}
            <a href="tel:+9384133714" title="Call Eye & My Care">
              9384133714
            </a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:info@eyeandmycare.com" title="Email Eye & My Care">
              info@eyeandmycare.com
            </a>
          </p>

          <div className="social-icons">
            <a
              href="https://instagram.com/eye_n_my_care"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              title="Follow us on Instagram"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/eyeandmycare"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              title="Follow us on Facebook"
            >
              Facebook
            </a>
          </div>
        </section>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; 2024{" "}
          <a href="/" title="Visit Eye & My Care's Homepage">
            Eye & My Care
          </a>{" "}
          | All Rights Reserved
        </p>
      </div>

      {/* Add structured data using dangerouslySetInnerHTML */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
    </footer>
  );
};

export default Footer;
