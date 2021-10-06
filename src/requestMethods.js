import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const BASEURL = 'http://localhost:3000/api';
const Token = cookies.get('accessToken');

export const publicRequest = axios.create({
    baseUrl: BASEURL,
})

export const userRequest = axios.create({
    baseUrl: BASEURL,
    headers: { token: 'Bearer '+Token }
});