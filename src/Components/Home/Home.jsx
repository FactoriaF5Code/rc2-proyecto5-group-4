import "./Home.css";
import Row from "../Row/Row";
import Trending from "../Trending/Trending";

const Home = () => {
  return (
    <main>
      <Trending />
      <Row genreId="Acción" />
      <Row genreId="Horror" />
      <Row genreId="Drama" />
      <Row genreId="Western" />
      <Row genreId="Histórica" />
      
    </main>
  );
};

export default Home;
