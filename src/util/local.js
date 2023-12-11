const TOKEN = "TOKEN";
const USER = "USER";

export const saveToken = (value)=>localStorage.setItem(TOKEN,value);
export const getToken = ()=>localStorage.getItem(TOKEN);
export const getUser = ()=>localStorage.getItem(USER);
export const saveUser = (user)=>localStorage.setItem(USER,user)
