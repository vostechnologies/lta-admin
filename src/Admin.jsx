import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./screens/dashboard";
import User from "./screens/user/user"
import SignIn from "./screens/signin";
import PrivateRoute from "./components/private_route/private_route";

const Admin = () => {
    return <BrowserRouter>
        <Routes>
        <Route exact element={<PrivateRoute />}>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/user" element={<User />} />
        </Route>
            <Route exact path="/" element={<SignIn/>}/>
        </Routes>
    </BrowserRouter>;
};

export default Admin;