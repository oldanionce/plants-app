import './SaveToMyPlantsForm.css';

export default function SaveToMyPlantsForm({ addToMyPlants, id, handleNicknameChange, nickname }) {
	return (
		<div class='modalForm'>
			<form>
				<div>
					<input
						type='text'
						value={nickname}
						onChange={handleNicknameChange}
						name='saveToMyPlants'
						placeholder='Escoge un nombre para tu planta'
					/>
					<button type='button' onClick={() => addToMyPlants(id)}>
						Guardar
					</button>
				</div>
			</form>
		</div>
	);
}
