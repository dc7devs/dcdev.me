import axios from 'axios';

export const gh_api = axios.create({
    baseURL: 'https://api.github.com',
});

export const gh_lang_colors = axios.create({
    baseURL: 'https://raw.githubusercontent.com',
});