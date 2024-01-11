import "./Busqueda.css";
import SearchTool from "../SearchTool/SearchTool";

export default function Busqueda() {
  return (
    <main className="search-container">
      <span>
        <h2 className="search-title">
          Encuentra tu película o serie favorita:
        </h2>
      </span>
      <SearchTool />
    </main>
  );
}
