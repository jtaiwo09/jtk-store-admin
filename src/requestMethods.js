import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const BASEURL = 'https://jtk-store-api.herokuapp.com/';
const Token = cookies.get('accessToken');

export const publicRequest = axios.create({
    baseUrl: BASEURL,
})

export const userRequest = axios.create({
    baseUrl: BASEURL,
    headers: { token: 'Bearer '+Token }
});