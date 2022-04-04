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
						placeholder='Pick a nickname'
					/>
					<button type='button' onClick={() => addToMyPlants(id)}>
						Save to My Plants
					</button>
				</div>
			</form>
		</div>
	);
}
