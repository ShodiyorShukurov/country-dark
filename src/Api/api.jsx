import axios from 'axios';

const api = axios.create({
    baseURL: 'https://restcountries.com/v3.1/'
})


api.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default api;