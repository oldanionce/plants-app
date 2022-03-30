import "./Filter.css";

export default function Filter({ handleSort }) {
  return (
    <div>
      <button className="order-button" onClick={handleSort}>
        Order
      </button>
    </div>
  );
}
