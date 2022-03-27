import Logo from "../components/Logo/Logo.js";
import Intro from "../components/Intro/Intro.js";
import Navigation from "../components/Navigation/Navigation.js";
import Footer from "../components/Footer/Footer.js";
import Event from "../components/Event/Event.js";

export default function Collection() {
  return (
    <div>
      <Intro></Intro>
      <Navigation></Navigation>
      <Footer></Footer>
    </div>
  );
}
