const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOWM2NDc3OTRjZjcxMzYxYWZkZTE4OWIyZWRkZmQ3NiIsInN1YiI6IjY1OTNmMWMzMWRjYjc3NmMyYzQ1OGU4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QhSuuB2q5WdeDbez-nJZqcuBARq7M2I1mrKelLXkQEc'
    }
  };
  
  fetch('https://api.themoviedb.org/3/authentication', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));