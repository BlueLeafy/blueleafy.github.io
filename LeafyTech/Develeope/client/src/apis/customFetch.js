// apis/customFetch.js
import axios from "axios";

const customFecth = axios.create({
    baseURL: "/api"
});

export default customFecth;