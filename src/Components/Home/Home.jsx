import "./Home.css";
import Row from "../Row/Row";

const Home = () => {
  return (
    <main>
      <Row genreId="Acción" />
      <Row genreId="Horror" />
      <Row genreId="Drama" />
      <Row genreId="Western" />
      <Row genreId="Histórica" />
      
    </main>
  );
};

export default Home;
