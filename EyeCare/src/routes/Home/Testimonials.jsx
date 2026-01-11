export default function Testimonials() {
  return (
    <section className="testimonials-main" data-aos="fade-up">
      <h1>Patient Testimonials</h1>
      <p className="testimonials-sub">
        Real experiences from people who trusted us with their vision
      </p>

      <div className="testimonials-grid">
        <div className="testimonial-card">
          <div className="stars">★★★★★</div>
          <p className="testimonial-text">
            “My mother’s eye condition was handled with great care.
            The doctor explained everything clearly and made us feel confident”
          </p>
          <div className="testimonial-footer">
            <strong>Rajesh Kumar</strong>
            <span>Geriatric Eye Care</span>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="stars">★★★★★</div>
          <p className="testimonial-text">
            “Very clean clinic with modern equipment. Eye check-up was thorough,
            affordable, and professional. Highly recommended for families.”
          </p>
          <div className="testimonial-footer">
            <strong>Meena S</strong>
            <span>Comprehensive Eye Exam</span>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="stars">★★★★★</div>
          <p className="testimonial-text">
            “I had long-term vision discomfort. After visiting Eye & My Care, my
            vision improved significantly. The care felt personal, not rushed.”
          </p>
          <div className="testimonial-footer">
            <strong>Joseph K</strong>
            <span>Vision Correction</span>
          </div>
        </div>
      </div>
    </section>
  );
}
