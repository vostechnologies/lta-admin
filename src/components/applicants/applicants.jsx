import "./applicants.css"
import App_Item from "./app-item";
import { useEffect, useState } from "react";
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
    return (
        <section className="applicants">
            <section className="app-header">
                <p>Applicants</p>
                <div className="app-search">
                    <input type="text" placeholder="Search applicants" />
                </div>
            </section>
            <section className="app-body">
                <table>
                    <tr className="app-body-header">
                        <th>&nbsp;</th>
                        <th>Name and Email ID</th>
                        <th>Contact</th>
                    </tr>
                    {users.map(user=><App_Item user={user}/>)}
                </table>
                
                
                
            </section>
        </section>
    )
}   

export default Applicants;