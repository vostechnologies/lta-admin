import "./applicants.css"
import "../university/uni_item.css"
import App_Item from "./app-item";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../../util/api";

const Applicants = () => {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        downloadUsers();
    },[]);

    const downloadUsers = async()=>{
        try {
            let res = await getAllUsers();
            console.log(res);
            setUsers(res);
        } catch (error) {
            console.log(e);
        }
    };

    const Navigate = useNavigate();

    return (
        <section className="applicants">
            <section className="app-header">
                <p>Applicants</p>
                <div className="app-search">
                    <input type="text" placeholder="Search Applicants" />
                </div>
            </section>
            <section className="app-body">
                <table className="applications-container">
                    <tr className="table-headers">
                        <th className="first">Name and Email Id</th>
                        <th className="second">Contact</th>
                        <th className="third">Actions</th>
                    </tr>
                    {users.map((user,i)=><App_Item key={i} user={user}/>)}
                </table>
            </section>
        </section>
    )
}   

export default Applicants;