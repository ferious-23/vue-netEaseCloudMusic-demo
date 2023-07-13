import axios from "axios";

let service = axios.create({
    baseURL: "http://192.168.3.26:3000/",
    timeout: 3200,
});
export default service;
