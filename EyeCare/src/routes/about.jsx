import "./about.css";
import Navbar from "./Home/navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="about-container">
        <section className="about-header">
          <div className="image-container">
            <img src="/path-to-your-image.jpg" alt="Optometrist in Thuckalay" />
          </div>
          <div className="header-content">
            <h1>About Eye & My Care</h1>
            <p>
              Welcome to Eye & My Care, your trusted optometry clinic located in
              Thuckalay, Tamil Nadu. We specialize in providing comprehensive
              eye exams and personalized vision care services. With years of
              experience in geriatric eye care, we are committed to ensuring the
              best for your eyes.
            </p>
          </div>
        </section>

        <section className="doctor-details">
          <h2>Meet Dr. Abisha</h2>
          <p>
            Dr. Abisha is a qualified optometrist with a focus on geriatric eye
            care. Having treated numerous patients in Thuckalay and nearby
            areas, she is dedicated to providing high-quality eye care services,
            ensuring that each patient receives the best treatment available.
          </p>
        </section>

        <section className="clinic-info">
          <h2>Our Clinic</h2>
          <p>
            Eye & My Care is conveniently located at Thuckalay, Tamil Nadu. We
            offer a range of services, from routine eye check-ups to advanced
            treatment options. Contact us today to schedule your appointment,
            and experience expert eye care in Thuckalay.
          </p>
          <p>
            <strong>Location: </strong>Thuckalay, Tamil Nadu
            <br />
            <strong>Contact: </strong>(Add Your Contact Number)
          </p>
        </section>
      </main>
    </>
  );
}
