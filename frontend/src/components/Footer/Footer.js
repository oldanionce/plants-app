import "./Footer.css";

export default function Footer() {
  const name = "Ana Gracia, Marta Vilaseca, Anna Lisbona, Marga Obrador";
  let today = new Date();
  let year = today.getFullYear();
  return (
    <footer className="app-footer">
      <p>Created by {name}</p>
      <p>&copy; {year}</p>
    </footer>
  );
}
