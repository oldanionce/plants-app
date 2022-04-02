// Per fer AL FINAL, quan el disseny estigui decidit perquè hi posarem screenshots etc

import './Features.css';

export default function Features() {
	return (
		<div className='featuresDiv container'>
			<div className='content'>
				<img
					alt='plants app features'
					src='https://uning.es/wp-content/uploads/2016/08/ef3-placeholder-image.jpg'></img>
				<div className='featuresText'>
					<h2>Your ABC of plants</h2>
					<span>
						Plantagotchi has all the information you need to take care of your plant
						collection. Do you constantly struggle when growing plants? Is it an
						interior plant? Does it live outside? Is it pet friendly? Don't worry
						anymore, we've got you.
					</span>
				</div>
				<div className='featuresText'>
					<h2>The best calendar feature</h2>
					<span>
						And most importantly, your plants won't die (or at least they will live a
						long happy life). Never forget to water your plants ever again with
						Plantagotchi's calendar feature, which reminds you to keep your plants
						watered and healthy whenever necessary!
					</span>
				</div>
				<img
					alt='plants app features'
					src='https://uning.es/wp-content/uploads/2016/08/ef3-placeholder-image.jpg'></img>
			</div>
		</div>
	);
}
