import "./Intro.css";
import Logo from "../Logo/Logo.js";

export default function Intro() {
  return (
    <div className="intro">
      <Logo></Logo>
      <h1 className="claim"> Larga vida a las plantas</h1>
      <button className="register-button"> Register</button>
    </div>
  );
}
