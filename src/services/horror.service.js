// apiService.js
import axios from 'axios';

const apiService = {
  fetchData: async () => {
    const options = {
      method: 'GET',
      url: 'https://streaming-availability.p.rapidapi.com/search/filters',
      params: {
        services: 'netflix',
        output_language: 'en',
        order_by: 'original_title',
        genres: '27',
        genres_relation: 'or',
        desc: 'false',
        country: 'us',
        show_type: 'all'
      },
      headers: {
        'x-rapidapi-key': '27a376a6cfmsh827fbf4720d9680p141f62jsn410128ad6f10',
        'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
};

export default apiService;
