import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const linkIcon = <FontAwesomeIcon icon={faExternalLink} />;

export default function Footer() {
  let today = new Date();
  let year = today.getFullYear();
  return (
    <footer className="footerDiv container">
      <div class="content">
        <div class="column footer_title">
          <h5>Plantagotchi</h5>
          <a class="button" href="https://github.com/anionce/plants-app" target="_blank">ver el proyecto en Github {linkIcon}</a>
        </div>
        <div class="column footer_copy">
          <p>&copy; {year}</p>
        </div>
        <div class="column footer_credits">
          <ol>
            <li><a href="#">Ana Gracia</a></li>
            <li><a href="#">Anna Lisbona</a></li>
            <li><a href="#">Marga Obrador</a></li>
            <li><a href="#">Marta Vilaseca</a></li>
          </ol>
        </div>
        
	    </div>
    </footer>
  );
}