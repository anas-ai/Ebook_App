import axios from "axios";
import { BASE_URL } from "../config/ApiConfig";

// const BASE_URL = 'https://fakestoreapi.com';
// const BASE_URL = 'http://10.0.2.2:8000/api';




export const Token = '1057|zvwTqt9sM9rUYeoDgeoITXQgJYXAGpxKVksTARgq';

 export const axiosInstance  = axios.create({
    baseURL:BASE_URL,
    headers:{
        'Content-Type': 'application/json',
        Authorization:`Bearer ${Token}`,
    }
})