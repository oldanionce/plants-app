import './SaveToMyPlantsForm.css';

export default function SaveToMyPlantsForm({}) {
	
	return (
        <div class="modalForm">
            <form>
                <div>
                    <input type="text" id="saveToMyPlants" name="saveToMyPlants" placeholder="Pick a nickname" />
                    <button>Save to My Plants</button>
                </div>
            </form>
        </div>
	);
}