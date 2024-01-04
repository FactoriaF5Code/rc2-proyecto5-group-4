import Row from '../Row/Row';

const API_KEY = '39c647794cf71361afde189b2eddfd76';

function Catalogo() {
  return (
    <div>
      <Row title="NETFLIX ORIGINALS" fetchUrl={`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`} isLargeRow/>
      <Row title="Trending Now" fetchUrl={`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`}/>
      <Row title="Top Rated" fetchUrl={`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`}/>
      <Row title="Action Movies" fetchUrl={`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`}/>
      <Row title="Comedy Movies" fetchUrl={`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`}/>
      <Row title="Horror Movies" fetchUrl={`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`}/>
      <Row title="Romance Movies" fetchUrl={`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`}/>
      <Row title="Documentaries" fetchUrl={`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`}/>
    </div>
  );
}

export default Catalogo;