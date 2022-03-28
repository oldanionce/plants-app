import "./SearchFilter.css";

export default function SearchFilter({
  handleInputChange,
  handleSubmitSearch,
  handleSortAZ,
}) {
  return (
    <div className="search-container">
      <input
        type="text"
        onChange={handleInputChange}
        onKeyUp={handleSubmitSearch}
        name="searchInput"
        placeholder="Buscar..."
        className="search-input"
      ></input>
      <button className="order-button" onClick={handleSortAZ}>
        Order
      </button>
    </div>
  );
}
