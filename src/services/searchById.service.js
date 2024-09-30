import axios from "axios";

const searchById = (callback, imdbId) => {
    const BASE_URL = `https://api.themoviedb.org/3/find/${imdbId}?external_source=imdb_id`
    const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDMzZTM5MTg2ZWFjYjY0MzJiNjVkNWMwNjA5OGIxZiIsIm5iZiI6MTcyNDQ4MzEyOS4wMzI1MTIsInN1YiI6IjY2OTBlN2Q2YjA5NjRkOGViNDJjZGM3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fKCeFCilZTpNBb7vugDrEH2AykSPrylE6aSWIf-KHCI'; // Replace with your Bearer token
  
    // Set headers
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${TOKEN}`
    };

    // Make GET request
    axios.get(`${BASE_URL}`, { headers })
      .then(response => {
        console.log(response.data.movie_results)
        callback(response.data.movie_results)
      })
      .catch(error => {
        console.error(error)
      });
};

export default searchById