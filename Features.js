// Per fer AL FINAL, quan el disseny estigui decidit perquè hi posarem screenshots etc

import "./Features.css";

export default function Features() {
  return (
    <div className="featuresDiv container">
      <div className="content">
        <img
          alt="plants app features"
          src="https://uning.es/wp-content/uploads/2016/08/ef3-placeholder-image.jpg"
        ></img>
        <div className="featuresText">
          <h2>Tu ABC de plantas</h2>
          <span>
            Plantagotchi tiene toda la información que necesitas para cuidar tu
            colección de plantas. ¿Te cuesta mucho cultivar plantas? ¿Es una
            planta de interior? ¿Vive en el exterior? ¿Es apta para mascotas?
            ¡No te preocupes más, aquí nos tienes!
          </span>
        </div>
        <div className="featuresText">
          <h2>La mejor función de calendario</h2>
          <span>
            Y lo más importante, tus plantas no morirán (o al menos tendrán una
            vida larga y feliz). ¡Nunca más te olvides de regar tus plantas con
            la función de calendario de Plantagotchi, que te recuerda que debes
            mantener tus plantas regadas y sanas siempre que sea necesario!
          </span>
        </div>
        <img
          alt="plants app features"
          src="https://uning.es/wp-content/uploads/2016/08/ef3-placeholder-image.jpg"
        ></img>
      </div>
    </div>
  );
}
