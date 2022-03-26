import Navigation from "./components/Navigation/Navigation";
import Collection from "./pages/Collection";
import Landing from "./pages/Landing";
import MyPlants from "./pages/MyPlants";
import Footer from "./components/Footer/Footer";

import LoginForm from "./components/LoginForm/LoginForm";
// import AuthenticationProvider from './AuthenticationContext';
// import RequiredAuth from './RequiredAuth';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    //  <AuthenticationProvider>
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/collection" element={<Collection />} />

          <Route
            path="/myplants"
            element={
              //	<RequiredAuth>
              <MyPlants />
              // 	</RequiredAuth>
            }
          />
        </Routes>
      </Router>
    </div>
    // </AuthenticationProvider>
  );
}

export default App;
