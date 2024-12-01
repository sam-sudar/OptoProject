import "./contact.css";
import Navbar from "./Home/navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="contact-page">
        <header className="contact-header">
          <h1>Contact Us</h1>
          <p>Reach out to us for all your optometry needs.</p>
        </header>

        <section
          className="contact-info"
          data-aos="fade-down"
          data-aos-duration="1200"
          data-aos-delay="400"
        >
          <div className="contact-details">
            <h2>Phone:</h2>
            <p>
              <a href="tel:9384133714">9384133714</a>
            </p>

            <h2>Instagram:</h2>
            <p>
              <a
                href="https://www.instagram.com/eye_n_my_care"
                target="_blank"
                rel="noopener noreferrer"
              >
                @eye_n_my_care
              </a>
            </p>

            <h2>Address:</h2>
            <p>
              Eye & My Care Optics
              <br />
              Next to Post Office, Thuckalay
              <br />
              Pin: 629175, Tamil Nadu
            </p>
          </div>

          <div className="contact-map">
            <h2>Find Us Here:</h2>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3948.612842235369!2d77.3224195!3d8.2416284!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f90064d581e3%3A0xd29275201db3601!2sEye%20and%20my%20care%20opticals!5e0!3m2!1sen!2sin!4v1731511346174!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Thuckalay, Eye Care Optometrist and Optics"
            ></iframe>
          </div>
        </section>

        <section
          className="geriatric-care"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-easing="ease-out-back"
          data-aos-anchor-placement="center-bottom"
        >
          <h2>Geriatric Eye Care</h2>
          <p>
            Our team provides personalized care for the elderly. Call us at
            9384133714 to book an appointment and get treatment at home.
          </p>
          <p>
            We ensure a thorough consultation, examining eye health, and
            providing the right treatments for all geriatric needs.
          </p>
        </section>
      </div>
    </>
  );
}
