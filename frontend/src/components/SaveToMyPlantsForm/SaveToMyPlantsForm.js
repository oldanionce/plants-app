import "./SaveToMyPlantsForm.css";

export default function SaveToMyPlantsForm({ addToMyPlants }) {
  return (
    <div class="modalForm">
      <form>
        <div>
          <input
            type="text"
            id="saveToMyPlants"
            name="saveToMyPlants"
            placeholder="Pick a nickname"
          />
          <button onclick={addToMyPlants}>Save to My Plants</button>
        </div>
      </form>
    </div>
  );
}
