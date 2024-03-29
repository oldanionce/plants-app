import Navigation from '../components/Navigation/Navigation.js';
import Intro from '../components/Intro/Intro.js';
import Features from '../components/Features/Features.js';
import Footer from '../components/Footer/Footer';
// import Event from '../components/Event/Event.js';
import RegisterForm from '../components/RegisterForm/RegisterForm.js';
import { useAuthentication } from '../AuthenticationContext';

export default function Landing() {
	const { authData } = useAuthentication();

	return (
		<>
			<Navigation></Navigation>
			<Intro></Intro>
			<Features></Features>
			{!authData && <RegisterForm></RegisterForm>}
			<Footer></Footer>
		</>
	);
}
