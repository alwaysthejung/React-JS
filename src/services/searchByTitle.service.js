import axios from 'axios';

export const details = (original_title, callback) => {
    const BASE_URL = 'https://streaming-availability.p.rapidapi.com/search/title';
    const TOKEN = '27a376a6cfmsh827fbf4720d9680p141f62jsn410128ad6f10';

    const params = {
        title: original_title,
        country: 'us',
        show_type: 'all',
        output_language: 'en'
    };

    // Set headers
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-rapidapi-ua': 'RapidAPI-Playground',
        'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
        'x-rapidapi-key': TOKEN
    };

    // Make GET request
    axios.get(BASE_URL, { headers, params })
        .then(response => {
            console.log(response.data.result);
            callback(response.data);
        })
        .catch(error => {
            console.error(error);
        });
};