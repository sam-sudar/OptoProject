import EyeLogo from "../../assets/eye-logo2.png";
import GlassGirl from "../../assets/girl_slitlamp.jpeg";

export default function FirstContent() {
  return (
    <div className="homeContent-main">
      <div className="homeContent-text">
        <img
          className="logo eye-logo"
          src={EyeLogo}
          alt="Thuckalay, Eye Care Optometrist and Optics"
        />
        <h1>VISIONARY CARE FOR CLEAR TOMORROW</h1>
        <p>With Eye & My Care</p>
      </div>
      <div className="homeContent-image-div">
        <img
          className="homeContent-img"
          src={GlassGirl}
          alt="Thuckalay, Eye Care Optometrist and Optics"
        />
      </div>
    </div>
  );
}
