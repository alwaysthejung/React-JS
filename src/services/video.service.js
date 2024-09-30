import axios from "axios";

export const Video = (callback) => {

    const BASE_URL = `https://api.themoviedb.org/3/trending/movie/day?language=en-US`;
    const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDMzZTM5MTg2ZWFjYjY0MzJiNjVkNWMwNjA5OGIxZiIsIm5iZiI6MTcyNDQ4MzEyOS4wMzI1MTIsInN1YiI6IjY2OTBlN2Q2YjA5NjRkOGViNDJjZGM3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fKCeFCilZTpNBb7vugDrEH2AykSPrylE6aSWIf-KHCI'; // Replace with your Bearer token
  

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${TOKEN}`
    };


    axios.get(`${BASE_URL}`, { headers })
      .then(response => {
        callback(response.data.results)
      })
      .catch(error => {
        console.error(error)
      });
};