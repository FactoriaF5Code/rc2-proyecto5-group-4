import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Header from "./Components/Header/header";
import Catalogo from "./Components/Catalogo/catalogo";
import Footer from "./Components/Footer/footer";
import Series from "./Components/Series/Series";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Catalogo />} />
          <Route exact path="/Series" element={<Series />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
