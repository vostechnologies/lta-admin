import "./applicants.css"
import App_Item from "./app-item";

const Applicants = () => {

    return (
        <section className="applicants">
            <section className="app-header">
                <p>Applicants</p>
                <div className="app-search">
                    <input type="text" placeholder="Search applicants" />
                </div>
            </section>
            <section className="app-body">
                <div className="app-body-header">
                    <div className="app-titles" style={{width : "30%"}}>Name and Email ID</div>
                    <div className="app-titles" style={{width : "10%"}}>Contact</div>
                    <div className="app-titles">Application Status</div>
                </div>
                <App_Item />
                <App_Item />
                <App_Item />
                <App_Item />
                <App_Item />
                <App_Item />
                <App_Item />
                <App_Item />
                <App_Item />             
            </section>
        </section>
    )
}   

export default Applicants;