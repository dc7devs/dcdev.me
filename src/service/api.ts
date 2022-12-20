import axios from 'axios';

const gh_api = axios.create({
    baseURL: 'https://api.github.com',
});

export default gh_api;

// export const gh_lang_colors = axios.create({
//     baseURL: 'https://raw.githubusercontent.com',
// });