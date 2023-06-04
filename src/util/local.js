const TOKEN = "TOKEN";

export const saveToken = (value)=>localStorage.setItem(TOKEN,value);
export const getToken = ()=>localStorage.getItem(TOKEN);