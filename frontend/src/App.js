import Navigation from './components/Navigation/Navigation';
import Collection from './pages/Collection';
import Landing from './pages/Landing';
import MyPlants from './pages/MyPlants';
import Footer from './components/Footer/Footer';
import RegisterForm from './components/RegisterForm/RegisterForm';
import LoginForm from './components/LoginForm/LoginForm';
import AuthenticationProvider from './AuthenticationContext';
import RequiredAuth from './RequiredAuth';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './components/RegisterForm/RegisterForm';

function App() {
	return (
		<AuthenticationProvider>
			<div className='App'>
				<Router>
					<Routes>
						<Route path='/' element={<Landing />} />
						<Route path='/myplants' element={<MyPlants />} />
						<Route path='/collection' element={<Collection />} />
						<Route path='/login' element={<LoginForm />} />
						<Route path='/register' element={<RegisterForm />} />
					</Routes>
				</Router>
			</div>
		</AuthenticationProvider>
	);
}

export default App;
