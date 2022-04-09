import "./Features.css";
import Features01 from '../../images/screen01.jpg';
import Features02 from '../../images/screen02.jpg';

export default function Features() {
  return (
    <div className="featuresDiv container">
      <div className="content">
        <div className="featuresPic image1">
          <img
            alt="plants app features"
            src={Features01}
          ></img>
        </div>
        <div className="featuresText text1">
          <h2>Tu ABC de plantas</h2>
          <span>
            Plantagotchi tiene toda la información que necesitas para cuidar tu
            colección de plantas. ¿Te cuesta mucho cultivar plantas? ¿Es una
            planta de interior? ¿Vive en el exterior? ¿Es apta para mascotas?
            ¡No te preocupes más, aquí nos tienes!
          </span>
        </div>
        <div className="featuresText text2">
          <h2>La mejor función de calendario</h2>
          <span>
            Y lo más importante, tus plantas no morirán (o al menos tendrán una
            vida larga y feliz). ¡Nunca más te olvides de regar tus plantas con
            la función de calendario de Plantagotchi, que te recuerda que debes
            mantener tus plantas regadas y sanas siempre que sea necesario!
          </span>
        </div>
        <div className="featuresPic image2">
          <img
            alt="plants app features"
            src={Features02}
          ></img>
        </div>
      </div>
    </div>
  );
}
