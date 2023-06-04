import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./screens/dashboard";
import User from "./screens/user/user"
import SignIn from "./screens/signin";

const Admin = () => {
    return <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Dashboard/>}/>
            <Route exact path="/user" element={<User/>}/>
            <Route exact path="/signin" element={<SignIn/>}/>
        </Routes>
    </BrowserRouter>;
};

export default Admin;