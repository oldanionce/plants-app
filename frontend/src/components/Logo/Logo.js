
import { useLocation} from 'react-router-dom';
import PlantagotchiLogo from '../../logo.svg';
import "./Logo.css";

export default function Logo() {
	const location = useLocation();
  return (
    <div className={location.pathname === '/' ? 'logo-container hidden' : 'logo-container'}>
      <a href="/">
        <img
          className="logo"
          src={PlantagotchiLogo}
          alt="logo Plantagotchi"
        ></img>
      </a> 
      <a href="/">
        <h1>Plantagotchi</h1>
      </a>
    </div>
  );
}
