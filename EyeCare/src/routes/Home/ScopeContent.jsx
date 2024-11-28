import oldEye from "../../assets/scp-oldman2.png";
import glasses from "../../assets/scp-glasses2.png";
import eyeChart from "../../assets/scp-eyechart.png";
import lens from "../../assets/scp-lens.png";

export default function ScopeContent() {
  return (
    <div className="scpContent-main">
      <h1 id="scpContent-h1">Scope of Services Provided</h1>
      <div className="scpContent-box">
        <div>
          <img
            className="scpContent-img"
            src={oldEye}
            alt="Thuckalay, Eye Care Optometrist and Optics"
          />
          <p>
            Tailored vision care for our senior patients, addressing age-related
            conditions like cataracts and glaucoma, ensuring optimal vision and
            comfort in later years.
          </p>
        </div>
        <div>
          <img
            className="scpContent-img"
            src={glasses}
            alt="Thuckalay, Eye Care Optometrist and Optics"
          />
          <p>
            Discover our wide range of stylish, high-quality glasses and frames.
            Whether you need prescription lenses or simply want a fashionable
            accessory, we got you covered.
          </p>
        </div>
        <div>
          <img
            className="scpContent-img"
            src={eyeChart}
            alt="Thuckalay, Eye Care Optometrist and Optics"
          />
          <p>
            Regular eye exams to ensure your vision stays sharp and your eyes
            healthy. Our thorough checkups help in early detection of any
            potential issues, safeguarding your sight.
          </p>
        </div>
        <div>
          <img
            className="scpContent-img"
            src={lens}
            alt="Thuckalay, Eye Care Optometrist and Optics"
          />
          <p>
            Perfectly fitted contact lenses for clear and comfortable vision,
            including options for those with astigmatism or presbyopia, ensuring
            the best fit and vision correction.
          </p>
        </div>
      </div>
      <div className="gerContent-div">
        <div>
          <p>
            {" "}
            <span
              style={{
                fontSize: "1.7rem",
                fontWeight: "bold",
                color: "#333333",
              }}
            >
              Geriatric eye care
            </span>{" "}
            focuses on treating and managing common vision issues that affect
            older adults, like cataracts, glaucoma, and macular degeneration. We
            are here to help ensure that your vision stays as clear and healthy
            as possible. Our services are designed to cater specifically to the
            needs of older adults, ensuring that any changes in vision are
            caught early and treated effectively.
          </p>
        </div>
        <div>
          <p>
            Getting started is easy. Just give us a call at the number provided,
            and we will arrange a visit at your convenience. Our team will come
            to you, providing professional eye care in the comfort of your own
            home.
          </p>
          <button>Contact</button>
        </div>
      </div>
    </div>
  );
}
