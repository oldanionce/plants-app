import "./HelpModal.css";

import Step01 from '../../images/steps_01.jpg';
import Step02 from '../../images/steps_02.jpg';
import Step03 from '../../images/steps_03.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const arrowRightIcon = <FontAwesomeIcon icon={faArrowRight} />
const importantIcon = <FontAwesomeIcon icon={faExclamationCircle} />

export default function HelpModal() {
  

	return (
		<>
			<div className='helpModal'>
				<h3>¿Cómo configurar los recordatorios de riego?</h3>
				<ol className="helpSteps">
					<li className="help_step01">
						<img src={Step01} alt="Paso 1" />
						<h4>Lorem ipsum</h4>
						<span class="next">{arrowRightIcon}</span>
					</li>
					<li className="help_step02">
					<img src={Step02} alt="Paso 2" />
						<h4>Lorem ipsum</h4>
						<span class="next">{arrowRightIcon}</span>
					</li>
					<li className="help_step03">
					<img src={Step03} alt="Paso 3" />
						<h4>Lorem ipsum</h4>
					</li>
					<li className="help_step04">
						<h4><span>{importantIcon}</span> <strong>Bonbon macaroon lemon drops cotton candy liquorice tiramisu dessert.</strong> 
							Topping cupcake muffin soufflé lollipop tootsie roll jujubes chupa 
							chups caramels. Apple pie halvah tootsie roll cookie pudding. </h4>
					</li>
				</ol>				
			</div>
		</>
	);

}
