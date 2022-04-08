import Navigation from "../components/Navigation/Navigation.js";
import Footer from "../components/Footer/Footer";
import Loader from "../components/Loader/Loader";
import Modal from 'react-modal';
import HelpModal from '../components/HelpModal/HelpModal.js';
// import Event from "../components/Event/Event.js";
import MyPlantsGrid from "../components/MyPlantsGrid/MyPlantsGrid.js";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

const closeIcon = <FontAwesomeIcon icon={faXmark} />;
const questionIcon = <FontAwesomeIcon icon={faCircleQuestion} />;

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		padding: 0,
		borderRadius: '10px',
		border: '1px solid var(--medium)',
		backgroundColor: 'var(--lightest)',
		zIndex: 4,
	},
	overlay: {
		zIndex: 3,
		opacity: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.3)'
	},
};

export default function MyPlants() {
  const [myPlants, setMyPlants] = useState([]);
  const [isLoading, setLoading] = useState(true);

  async function getUserMyPlants() {
    const response = await fetch("/api/myplants", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
	
    const dataplants = data.myplants;
    setMyPlants(dataplants);
	setLoading(false);
  }

  function deleteFromMyPlants(nickname) {
    fetch(`/api/myplants/${nickname}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setLoading(false);
    getUserMyPlants();
  }

  useEffect(() => {
	getUserMyPlants();
  }, []);

  // help Modal
  const [modalIsOpen, setIsOpen] = useState(false);
  let root = document.getElementById('root');

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	function afterOpenModal() {	
		root.style.filter = 'blur(5px)';
	}

	function afterCloseModal() {	
		root.style.filter = '';
	}

  return (
	<>
		<Navigation></Navigation>
		<header className="container myPlantsHeader">
			<div className="content">
			<h1>Mis Plantas</h1>
			</div>
		</header>

		<main className="container myPlantsDiv">
		<div className={isLoading ? 'content isLoading' : 'content'}>
			<Loader></Loader>
			<div className='gridHeader'>
				<button className="helpButton" onClick={openModal}><span>{questionIcon}</span> ¿Cómo funciona?</button>		
			</div>
			<MyPlantsGrid
				deleteFromMyPlants={deleteFromMyPlants}
				plants={myPlants}
			></MyPlantsGrid>
			</div>
		</main>
		<Footer></Footer>
		<Modal
			isOpen={modalIsOpen}
			onAfterOpen={afterOpenModal}
			onAfterClose={afterCloseModal}
			onRequestClose={closeModal}
			style={customStyles}
			contentLabel='Log In'
			ariaHideApp={false}>
				<button className='modalCloseModal' onClick={closeModal}>
					{closeIcon}
				</button>
			<HelpModal></HelpModal>
		</Modal>
	</>
  );
}
