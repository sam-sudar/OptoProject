import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./about.css";
import Navbar from "./Home/navbar";
import AboutImg from "../assets/about1.jpg";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

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
            alt="Eye & My Care Optics Store"
            className="store-image"
          />
        </section>

        {/* Doctor Details Section */}
        <section className="doctor-details" data-aos="fade-left">
          <h2>Meet Dr. Abisha, Our Expert Optometrist</h2>
          <div className="doctor-content">
            <p>
              Dr. Abisha is an experienced and compassionate optometrist
              specializing in geriatric eye care. With her personalized
              approach, Dr. Abisha ensures every patient receives the best care
              tailored to their individual needs.
            </p>
            <p>
              She has extensive expertise in diagnosing and managing age-related
              eye conditions, such as cataracts, glaucoma, macular degeneration,
              and more. Dr. Abisha is dedicated to improving the quality of life
              of her patients through exceptional care.
            </p>
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
