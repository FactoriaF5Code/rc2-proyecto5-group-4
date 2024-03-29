import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./Components/Header/header";
import Catalogo from "./Components/Catalogo/catalogo";
import Footer from "./Components/Footer/footer";
import Series from "./Components/Series/Series";
import Home from "./Components/Home/Home";
import Busqueda from "./Components/Busqueda/Busqueda";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Peliculas" element={<Catalogo />} />
          <Route exact path="/Series" element={<Series />} />
          <Route exact path="/Busqueda" element={<Busqueda />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
