import DocLogo from "../../assets/stscp-img.png";
import AbiImg from "../../assets/abi_pic1.jpg";

export default function DoctorContent() {
  return (
    <div className="docContent-main">
      <div className="docContent-image">
        <img src={AbiImg} />
      </div>
      <div className="docContent-text">
        <img className="logo" src={DocLogo}></img>
        <h2>Dr. Abisha S, Your Trusted Optometrist</h2>
        <p>
          Dr. Abisha brings over seven years of specialized experience to Eye &
          My Care, with a deep commitment to providing exceptional geriatric eye
          care. Trained at prestigious institutions and equipped with a
          fellowship in Clinical Optometry from Aravind Eye Hospital, Chennai,
          she excels in comprehensive eye examinations and personalized patient
          care. Dr. Abisha uses approach that combines cutting-edge diagnostics
          with a passion for enhancing the quality of life through better
          vision.
        </p>
        <div className="exp-div">
          <div className="exp-box">
            <span style={{ fontWeight: "bold" }}>Exceptional Expertise: </span>
            Offers advanced care in managing age-related ocular conditions.
          </div>
          <div className="exp-box">
            <span style={{ fontWeight: "bold" }}>Patient-Centric Care: </span>
            Customized treatment plans to address individual vision care needs.
          </div>
          <div className="exp-box">
            <span style={{ fontWeight: "bold" }}>Proven Track Record: </span>
            Prestigious award winner from the Vision Science Academy and many
            published works.
          </div>
        </div>
      </div>
    </div>
  );
}
