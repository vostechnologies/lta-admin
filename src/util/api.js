import { adminLATClient } from "./api_socket";

export const login = (cred) =>
adminLATClient({
    method: "POST",
    url: `/auth/adminLogin`,
    data: cred,
  }).then((res) => res.data);

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
export const getApplicationsOfUser = (id)=>adminLATClient({
    url:`/application/getApplications/${id}`,
    method: "GET"
}).then(res=>res.data);
export const validateToken = ()=>adminLATClient({
    method: "GET",
    url : `/auth/validateAdminToken`
  }).then(res=>res.data);
  export const updateApplication = (id,body)=>adminLATClient({
    url: `/application/updateApplication/${id}`,
    method: "PATCH",
    headers:{
        "Content-Type": "multipart/form-data"
    },
    data:body
}).then(res=>res.data);

export const deleteApplicationApi = (id)=>adminLATClient({
    url:`/application/deleteApplication/${id}`,
    method:"DELETE"
}).then(res=>res.data)
export const getDocumentApi = (id)=>adminLATClient({
    url:`/document/${id}`,
    method:"GET"
}).then(res=>res.data)
export const getUserInfo = (userId)=>adminLATClient({
    url: `/auth/userInfo/${userId}`,
    method: "GET"
}).then(res=>res.data);
  