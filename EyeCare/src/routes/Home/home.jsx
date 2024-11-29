import Navbar from "./navbar";
import FirstContent from "./FirstContent";
import "./home.css";
import DoctorContent from "./DoctorContent";
import ScopeContent from "./ScopeContent";
import ListContent from "./ListContent";
import Footer from "./Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <FirstContent />
      <DoctorContent />
      <ScopeContent />
      <ListContent />
      <Footer />
    </main>
  );
}
