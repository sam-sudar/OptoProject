import "./about.css";
import Navbar from "./Home/navbar";
import AboutImg from "../assets/about1.jpg";
import AboutGallery1 from "../assets/About_Gallery1.jpg"
import AboutGallery2 from "../assets/About_Gallery2.jpg"
import AboutGallery3 from "../assets/About_Gallery3.jpg"

export default function About() {
  return (
    <>
      <Navbar />
      <main className="about-page">
        {/* Hero Section */}
        <section className="hero-section" data-aos="fade-up">
          <h1>Welcome to Eye & My Care</h1>
          <p>
            Exceptional optometry services in Thuckalay, Tamil Nadu.
            Specializing in geriatric eye care, vision solutions, and
            personalized treatments for all ages.
          </p>
          <a href="#about-us" className="cta-button">
            Explore Our Services
          </a>
        </section>

        {/* About Us Section */}
        <section id="about-us" className="info-section" data-aos="fade-up">
          <h2>About Eye & My Care Optics</h2>
          <p>
            At Eye & My Care, we offer comprehensive optometry services designed
            to meet the needs of individuals at every stage of life. Our clinic,
            located in Thuckalay, focuses on personalized care, with a special
            emphasis on geriatric eye care.
          </p>
          <p>
            Whether you are visiting for a routine eye exam, seeking treatment
            for a specific condition, or in need of high-quality eyewear, our
            dedicated team is here to help. We believe in providing affordable,
            accessible, and expert care for our patients in a friendly and
            welcoming environment.
          </p>
          <img
            src={AboutImg}
            alt="Eye & My Care Optics and Opticals Store in Thuckalay"
            className="store-image"
          />
        </section>
        {/* Why Choose Us Section */}
        <section className="why-us" data-aos="fade-up">
          <h2>Why Choose Eye & My Care?</h2>

          <div className="why-us-grid">
            <div className="why-card">
              <h3>Personalized Eye Care</h3>
              <p>
                Every patient receives individual attention, detailed eye evaluation,
                and treatment plans tailored specifically to their needs.
              </p>
            </div>

            <div className="why-card">
              <h3>Geriatric Eye Care Expertise</h3>
              <p>
                Specialized care for age-related eye conditions including cataracts,
                glaucoma, and vision degeneration with a compassionate approach.
              </p>
            </div>

            <div className="why-card">
              <h3>Modern Equipment</h3>
              <p>
                Advanced diagnostic tools ensure accurate eye examinations and early
                detection of vision issues.
              </p>
            </div>

            <div className="why-card">
              <h3>Affordable & Accessible</h3>
              <p>
                High-quality eye care and eyewear solutions at affordable pricing for
                families in and around Thuckalay.
              </p>
            </div>
          </div>
        </section>

        {/* Doctor Details Section */}
        <section className="doctor-details" data-aos="fade-left">
          <h2>Abisha Soman, Our Expert Optometrist</h2>
          <div className="doctor-content">
            <p>
              Abisha is an experienced and compassionate optometrist
              specializing in geriatric eye care. With her personalized
              approach, Expert Abisha ensures every patient receives the best
              care tailored to their individual needs.
            </p>
            <p>
              She has extensive expertise in diagnosing and managing age-related
              eye conditions, such as cataracts, glaucoma, macular degeneration,
              and more. Abisha is a Speacialist dedicated to improving the
              quality of life of her patients through exceptional care.
            </p>
          </div>
        </section>
        {/* Clinic Gallery Section */}
        <section className="gallery-section" data-aos="fade-up">
          <h2>Inside Our Clinic</h2>

          <div className="gallery-grid">
            <img src={AboutGallery1} alt="Eye clinic interior" />
            <img src={AboutGallery2} alt="Optical frames display" />
            <img src={AboutGallery3} alt="Eye examination room" />
          </div>
        </section>

        {/* Clinic Information Section */}
        <section className="clinic-info" data-aos="fade-right">
          <h2>Our Eye Clinic in Thuckalay</h2>
          <p>
            Eye & My Care Optics is conveniently located next to the post office
            in Thuckalay, Tamil Nadu. We provide a full range of eye care
            services, including comprehensive eye exams, specialized geriatric
            care, and high-quality eyewear solutions.
          </p>
          <address>
            <strong>Address:</strong> Eye & My Care Optics, Next to Post Office,
            Thuckalay, Tamil Nadu, 629175 <br />
            <strong>Phone:</strong> <a href="tel:+919384133714">9384133714</a>
          </address>
        </section>
      </main>
    </>
  );
}
