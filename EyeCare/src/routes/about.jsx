import "./about.css";
import Navbar from "./Home/navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="about-container">
        <section className="about-header">
          <div className="image-container">
            <img
              src="/path-to-your-image.jpg"
              alt="Optometrist in Thuckalay providing geriatric eye care"
            />
          </div>
          <div className="header-content">
            <h1>About Eye & My Care</h1>
            <p>
              Welcome to Eye & My Care Optics, located conveniently next to the
              post office in Thuckalay, Tamil Nadu. We are dedicated to offering
              high-quality optometry services, specializing in comprehensive eye
              exams, geriatric eye care, and personalized vision care solutions
              for all ages.
            </p>
            <p>
              Our clinic prides itself on delivering patient-centered care in a
              welcoming and accessible environment. Whether you need a routine
              eye checkup, treatment for age-related vision problems, or
              custom-fit eyewear, Eye & My Care is here to help.
            </p>
          </div>
        </section>

        <section className="doctor-details">
          <h2>Meet Dr. Abisha - Your Optometrist in Thuckalay</h2>
          <p>
            Dr. Abisha is a highly qualified optometrist with extensive
            experience in diagnosing and treating eye conditions, particularly
            in older adults. With a deep commitment to improving eye health, she
            offers a personalized approach to each patient, ensuring that you
            receive the care and attention your eyes deserve.
          </p>
          <p>
            Her specialization in geriatric eye care means she understands the
            unique challenges older adults face when it comes to their vision.
            Whether it is cataracts, glaucoma, or age-related macular
            degeneration, Dr. Abisha is skilled at providing the best treatment
            for maintaining and improving eye health.
          </p>
        </section>

        <section className="clinic-info">
          <h2>Our Eye Clinic in Thuckalay</h2>
          <p>
            Eye & My Care Optics is located next to the post office in
            Thuckalay. We serve patients from Thuckalay, Saralvillai, and nearby
            regions, offering affordable and accessible eye care services. Our
            goal is to ensure everyone has access to expert eye care, from basic
            checkups to advanced treatment options.
          </p>
          <p>
            <strong>Address:</strong>
            <br />
            Eye & My Care Optics
            <br />
            Next to Post Office
            <br />
            Thuckalay, Tamil Nadu
            <br />
            Pin: 629175
            <br />
            <strong>Phone:</strong> 9384133714
          </p>
          <p>
            We understand the importance of convenience, which is why we offer
            flexible appointment scheduling to fit your busy life. If you are
            experiencing vision issues, need a new prescription, or simply want
            to maintain your eye health, contact us today to book your
            appointment.
          </p>
        </section>

        <section className="services">
          <h2>Why Choose Eye & My Care Optics?</h2>
          <ul>
            <li>
              <strong>Personalized Eye Care</strong> - Every patient receives
              individualized attention, ensuring the best possible care based on
              your specific eye health needs.
            </li>
            <li>
              <strong>Geriatric Eye Care Expertise</strong> - We specialize in
              managing eye conditions associated with aging, offering tailored
              treatments for older adults.
            </li>
            <li>
              <strong>Convenient Location</strong> - Our clinic is easily
              accessible, located right next to the post office in Thuckalay.
            </li>
            <li>
              <strong>Affordable Pricing</strong> - We offer competitive pricing
              on all our services, from routine checkups to eyeglasses and
              treatments.
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
