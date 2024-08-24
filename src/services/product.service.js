import axios from "axios";

export const getProducts = (callback) => {
    // const axios = require('axios');
    const BASE_URL = 'https://api.themoviedb.org/3/movie/12/videos'; // ngaruh ga sih ini kalo ada tulisan 12 nya, soalnya itu kan cuman munculin 1 doang
    const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDMzZTM5MTg2ZWFjYjY0MzJiNjVkNWMwNjA5OGIxZiIsIm5iZiI6MTcyMzkwOTk3NS45MjQ2NDMsInN1YiI6IjY2OTBlN2Q2YjA5NjRkOGViNDJjZGM3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MqVUAuwOxXQGK7qxDtuF1Dhku18W5uDMcSQxkdV-X7s'; // Replace with your Bearer token
    // Set headers
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${TOKEN}`
    };
    // Make GET request
    axios.get(`${BASE_URL}`, { headers })
      .then(response => {
        callback(response.data)
        // console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
};
// yakin??? iyaaa bener

// maksudnya tul itu kan pas di postman yg muncul cuman 1 film ttrs yg lain nya gimana??
// iyaaa kan url nya itu fild category file by id, jadi yang kategorynya sama di satuin gitu
// nanti buat banyak film nya beda lagi api nya, ini nyoba duluuu ouhhh oke okee
// dah ngantu????? belummm
// 