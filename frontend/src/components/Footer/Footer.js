import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const linkIcon = <FontAwesomeIcon icon={faExternalLink} />;

export default function Footer() {
  let today = new Date();
  let year = today.getFullYear();
  return (
    <footer className="footerDiv container">
      <div className="content">
        <div className="column footer_title">
          <h5>Plantagotchi</h5>
          <a className="button" href="https://github.com/anionce/plants-app" target="_blank">ver el proyecto en Github {linkIcon}</a>
        </div>
        <div className="column footer_copy">
          <p>&copy; {year}</p>
        </div>
        <div className="column footer_credits">
          <ol>
            <li><a href="https://www.linkedin.com/in/ana-gracia-20081930/" target="_blank"><span>{linkIcon}</span> Ana Gracia</a></li>
            <li><a href="https://www.linkedin.com/in/anna-lisbona/" target="_blank"><span>{linkIcon}</span> Anna Lisbona</a></li>
            <li><a href="https://www.linkedin.com/in/margaritaobrador/" target="_blank"><span>{linkIcon}</span> Marga Obrador</a></li>
            <li><a href="https://www.linkedin.com/in/martavilaseca/" target="_blank"><span>{linkIcon}</span> Marta Vilaseca</a></li>
          </ol>
        </div>
        
	    </div>
    </footer>
  );
}