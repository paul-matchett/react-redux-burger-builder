import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://p-matchett-react.firebaseio.com/'
});

export default instance;