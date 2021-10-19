import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const BASEURL = 'https://jtk-store-api.herokuapp.com/api';
// const BASEURL = 'http://localhost:5000/api';
const Token = cookies.get('accessToken');

export const publicRequest = axios.create({
    baseURL: BASEURL,
})

export const userRequest = axios.create({
    baseURL: BASEURL,
    headers: { token: 'Bearer '+Token }
});