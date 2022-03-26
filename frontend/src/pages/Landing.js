import Navigation from "../components/Navigation/Navigation.js";
import Intro from "../components/Intro/Intro.js";
import Features from "../components/Features/Features.js";
import Register from "../components/RegisterForm/RegisterForm.js";
import Footer from "../components/Footer/Footer";

export default function Landing() {
  //search component

  return (
    <div>
      <Intro></Intro>
      <Navigation></Navigation>
      <Features></Features>
      {/* <RegisterForm></RegisterForm> */}
      <Footer></Footer>
    </div>
  );
}
