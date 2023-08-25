import axios from "axios";
import { getToken } from "./local";

const baseUrl = `https://api.letterstoabroad.com`
;export const adminLATClient = axios.create({
    baseURL: baseUrl
})

adminLATClient.interceptors.request.use((config)=>{
    const token = getToken();
    if(token){
        config.headers["auth-token"] = `Bearer ${token}`;
    }
    return config;
})

