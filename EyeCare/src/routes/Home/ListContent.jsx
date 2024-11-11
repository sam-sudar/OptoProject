import heartLogo from "../../assets/heart_logo1.png";

export default function ListContent() {
  return (
    <div className="listContent-main">
      <img src={heartLogo} />
      <div className="listContent-div">
        <div className="listDiv-left">1</div>
        <div className="listDiv-right">
          <h1>Comprehensive Vision Testing</h1>
          <p>
            We offer detailed vision tests to assess your eyesight, ensuring
            that your prescription is perfect for your needs.
          </p>
        </div>
      </div>
      <div className="listContent-div">
        <div className="listDiv-left">2</div>
        <div className="listDiv-right">
          <h1>Personalized Eyewear Solutions</h1>
          <p>
            Choose from a wide range of frames and lenses, customized to fit
            your style and vision requirements.
          </p>
        </div>
      </div>
      <div className="listContent-div">
        <div className="listDiv-left">3</div>
        <div className="listDiv-right">
          <h1>Home Visits for Elderly Care</h1>
          <p>
            Convenient home visits for our elderly patients, ensuring they
            receive the care they need in the comfort of their own homes.
          </p>
        </div>
      </div>
      <div className="listContent-div">
        <div className="listDiv-left">4</div>
        <div className="listDiv-right">
          <h1>Follow-up and Aftercare Support</h1>
          <p>
            Our service does not stop after your visit. We offer follow-up
            consultations to ensure your eyes are healthy and your eyewear is
            perfectly adjusted.
          </p>
        </div>
      </div>
      <div className="listContent-div">
        <div className="listDiv-left">5</div>
        <div className="listDiv-right">
          <h1>Patient Education</h1>
          <p>
            We take the time to educate our patients about eye health,
            empowering them to take better care of their vision.
          </p>
        </div>
      </div>
    </div>
  );
}
