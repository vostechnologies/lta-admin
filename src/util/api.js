import { adminLATClient } from "./api_socket";

export const getAllUsers = ()=>adminLATClient({
    url:`/auth/listAll`,
    method: "GET"
}).then(res=>res.data);
export const createApplication = (body)=>adminLATClient({
    url: `/application/createApplication`,
    method: "POST",
    headers:{
        "Content-Type": "multipart/form-data"
    },
    data:body
}).then(res=>res.data);