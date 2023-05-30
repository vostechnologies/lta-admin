import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./screens/dashboard";
import User from "./screens/user/user"

const Admin = () => {
    return <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Dashboard/>}/>
            <Route exact path="/user" element={<User/>}/>
        </Routes>
    </BrowserRouter>;
};

export default Admin;