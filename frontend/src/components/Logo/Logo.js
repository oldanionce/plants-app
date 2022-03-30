
import { useLocation} from 'react-router-dom';
import "./Logo.css";

export default function Logo() {
	const location = useLocation();
  return (
    <div className={location.pathname === '/' ? 'logo-container hidden' : 'logo-container'}>
      <img
        className="logo"
        src="https://cdn-icons-png.flaticon.com/512/2532/2532588.png"
        alt="logo Plantagotchi"
      ></img>
    </div>
  );
}
