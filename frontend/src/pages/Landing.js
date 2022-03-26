import Navigation from "../components/Navigation/Navigation.js";
import Intro from "../components/Intro/Intro.js";
import Features from "../components/Features/Features.js";
import RegisterForm from "../components/RegisterForm/RegisterForm.js";
import Footer from "../components/Footer/Footer";
import Event from "../components/Event/Event.js";

export default function Landing() {
  //search component

  return (
    <div>
      <Intro></Intro>
      <Navigation></Navigation>
      <Features></Features>
      {/* <RegisterForm></RegisterForm> */}
      {/* <Event></Event> */}
      <Footer></Footer>
    </div>
  );
}
