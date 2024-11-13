import DocLogo from "../../assets/stscp-img.png";
import AbiImg from "../../assets/abi_pic1.jpg";

export default function DoctorContent() {
  return (
    <div className="docContent-main">
      <div className="docContent-image">
        <img
          src={AbiImg}
          alt="Dr. Abisha S, Optometrist in Thuckalay providing geriatric eye care"
        />
      </div>
      <div className="docContent-text">
        <img className="logo" src={DocLogo} alt="Eye & My Care Optics Logo" />
        <h2>Dr. Abisha S, Your Trusted Optometrist</h2>
        <p>
          Dr. Abisha brings over seven years of specialized experience to Eye &
          My Care, with a deep commitment to providing exceptional geriatric eye
          care. Trained at renowned institutions and equipped with a fellowship
          in Clinical Optometry from Aravind Eye Hospital, Chennai, she excels
          in comprehensive eye examinations and personalized patient care. Dr.
          Abisha uses an approach that combines state-of-the-art diagnostics
          with a passion for enhancing the quality of life through improved
          vision.
        </p>
        <div className="exp-div">
          <div className="exp-box">
            <span style={{ fontWeight: "bold" }}>Exceptional Expertise: </span>
            Offers advanced care in managing age-related ocular conditions and
            enhancing overall eye health.
          </div>
          <div className="exp-box">
            <span style={{ fontWeight: "bold" }}>Patient-Centric Care: </span>
            Provides customized treatment plans to meet unique vision care
            needs, ensuring optimal patient comfort and satisfaction.
          </div>
          <div className="exp-box">
            <span style={{ fontWeight: "bold" }}>Proven Track Record: </span>
            Recipient of prestigious awards from the Vision Science Academy and
            author of multiple published works in optometry.
          </div>
        </div>
      </div>
    </div>
  );
}
