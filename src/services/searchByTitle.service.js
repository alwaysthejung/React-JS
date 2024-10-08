import axios from 'axios';

export const details = (original_title, callback) => {
    const BASE_URL = 'https://streaming-availability.p.rapidapi.com/search/title';
    const TOKEN = 'c45dda546fmsh416b8d5db59841ap16203djsn232434213b96';

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