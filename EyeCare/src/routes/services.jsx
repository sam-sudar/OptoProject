import Navbar from "./Home/navbar";
import "./services.css";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <div className="services-container">
        <section className="services-header">
          <h1>OUR SERVICES</h1>
          <p>
            At Eye & My Care Optics, we offer a range of professional services
            aimed at providing the best care for your vision and eye health.
            From comprehensive eye exams to specialized geriatric eye care, we
            have got you covered.
          </p>
        </section>
        <section className="service-list">
          <div
            className="service-item"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="top-bottom"
          >
            <h2>Eye Testing</h2>
            <p>
              We provide thorough eye examinations to ensure that your vision is
              at its best. Regular eye check-ups help detect problems early,
              preventing potential eye diseases.
            </p>
          </div>

          <div
            className="service-item"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="top-bottom"
          >
            <h2>Specs & Frames</h2>
            <p>
              We offer a variety of stylish spectacles and frames for all ages.
              Choose from our wide selection to find the perfect fit for your
              face and lifestyle.
            </p>
          </div>

          <div
            className="service-item"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="top-bottom"
          >
            <h2>Sunglasses</h2>
            <p>
              Protect your eyes from harmful UV rays with our collection of
              high-quality sunglasses. We have designs that offer both
              protection and style.
            </p>
          </div>

          <div
            className="service-item"
            data-aos="fade-up"
            data-aos-duration="1600"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="top-bottom"
          >
            <h2>Glass Repair</h2>
            <p>
              Quick and affordable glass repair services are available to keep
              your eyewear in top condition. Visit us for minor fixes or
              complete replacements.
            </p>
          </div>

          <div
            className="service-item"
            data-aos="fade-up"
            data-aos-duration="1600"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="top-bottom"
          >
            <h2>Contact Lens</h2>
            <p>
              Whether you are new to contact lenses or need a replacement, we
              provide a variety of lenses that suit your needs and preferences.
              We also offer advice on proper lens care and hygiene.
            </p>
          </div>

          <div
            className="service-item"
            data-aos="fade-up"
            data-aos-duration="1600"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="top-bottom"
          >
            <h2>Geriatric Eye Care</h2>
            <p>
              Specialized care for seniors to address age-related vision
              problems. Our geriatric services ensure that your elderly loved
              ones receive the best possible care for their eyes and vision.
            </p>
          </div>
        </section>
        <section
          className="faq-section"
          data-aos="zoom-out"
          data-aos-duration="1500"
          data-aos-delay="300"
        >
          <h2>Frequently Asked Questions</h2>

          <div className="faq-item">
            <h3>What is included in an eye test?</h3>
            <p>
              An eye test typically includes checking your vision, evaluating
              eye health, and diagnosing any conditions that could affect your
              eyesight, such as glaucoma or cataracts.
            </p>
          </div>

          <div className="faq-item">
            <h3>How often should I get my eyes checked?</h3>
            <p>
              It is recommended to get your eyes tested every 1-2 years.
              However, if you have existing eye conditions, more frequent
              check-ups may be necessary.
            </p>
          </div>

          <div className="faq-item">
            <h3>Do you provide eye care for childrens?</h3>
            <p>
              Yes, we offer specialized eye care services for children to ensure
              they have optimal vision as they grow.
            </p>
          </div>

          <div className="faq-item">
            <h3>How can I book an appointment?</h3>
            <p>
              You can book an appointment by calling us at{" "}
              <strong>9384133714</strong>. Walk-ins are also welcome, but
              scheduling ensures you receive the best care at your convenience.
            </p>
          </div>

          <div className="faq-item">
            <h3>What is geriatric eye care? 🌠</h3>
            <p>
              Geriatric eye care focuses on treating vision problems in older
              adults, including age-related conditions such as cataracts,
              macular degeneration, and glaucoma.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
