import "./Search.css";

export default function Search({ handleInputChange, handleSubmitSearch }) {
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
    </div>
  );
}
