import "./applicants.css"
import { useNavigate } from "react-router-dom"
import dp from "../../assets/svg/Rectangle 2601.svg"

const App_Item = () =>{
    const Navigate = useNavigate();
    return(
        <div className="app-body-content">
                    <div className="app-body-item">
                        <div className="item-left" onClick={()=>{Navigate('/user')}}>
                            <div className="item-img-div">
                                <img src={dp} alt="" />
                            </div>
                            <div className="item-details" >
                                <p className="item-name">Name</p>
                                <p className="item-email">Email ID</p>
                            </div>
                        </div>

                        <div className="item-center">
                            <p className="item-contact">Contact</p>
                        </div>

                        <div className="item-right">
                            <p className="item-status">Status</p>   
                        </div>
                    </div>
        </div>
    )
}

export default App_Item;