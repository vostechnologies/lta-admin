import './user.css'
import "../dashboard/dashboard.css";
import LTALogo from "../../assets/images/lta_logo.png";
import Add from "../../assets/svg/Frame 2.svg"
import dp from "../../assets/svg/Rectangle 2601.svg"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Uni_Item from '../../components/university/uni_item';

const User = () =>{

  const navigate = useNavigate();
  const [showOverlay, setOverlay] = useState(false);
  const [activeTab, setActiveTab] = useState("1");
  const [degree, setDegree] = useState("1");
  const [intake, setIntake] = useState("1");

  const handleActiveTab = (tab) => {
    setActiveTab(tab);
  };

    return <section
    className="main_wrapper"
    onClick={() => {
      setOverlay(false);
    }}
  >
    <nav className="nav_container">
      <img src={LTALogo} alt="Logo main" />
      <div className="right_nav">
        <input type="text" placeholder="Search" />
        <div className="profile">
          <div
            className="dp"
            onClick={(e) => {
              e.stopPropagation();
              setOverlay(!showOverlay);
            }}
          >
            D
          </div>
          Admin
          {showOverlay ? (
            <div className="profile_overlay">
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/");
                }}
              >
                Logout
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </nav>
    <div className="body_container">
          <div className="dash_sidebar" style={{width:"85px"}}>
      
          </div >
          <div className="dash_body">
                <div className="dash_header">
                    <div className="user-display">
                        <div className="profile_container">
                            <div className="user-dp">
                              <img src={dp} alt="" />
                            </div>
                            <div className="user-details">
                                <div className="app-name">Geen Geo</div>
                                <div className="app-email">example@gmail.com</div>
                            </div>
                        </div>
\                        <div className="add-member new-app">
                        <img src={Add} alt="" />Add New Application
                        </div>
                    </div>
                    <div className="profile-nav">
                      <span className={`nav_item ${activeTab ==="1"?`activetab`:``}`} onClick={()=>{handleActiveTab("1")}}>User Info</span>
                      <span className={`nav_item ${activeTab ==="2"?`activetab`:``}`} onClick={()=>{handleActiveTab("2")}}>Application Module</span>
                      <span className={`nav_item ${activeTab ==="3"?`activetab`:``}`} onClick={()=>{handleActiveTab("3")}}>Documents</span>
                      <span className={`nav_item ${activeTab ==="4"?`activetab`:``}`} onClick={()=>{handleActiveTab("4")}}>Preference</span>
                    </div>
          
                    <div className="applicants-container" style={{display : activeTab ==="2" ? "block" : "none"}} >
                      <section className="applicants">
                          <section className="app-header">
                              <div className="header-container">
                                  <div className="app-type">
                                    <span className={`type-item ${degree === "1" ? `selected`: ``}`} onClick={()=>{setDegree("1")}}>Masters</span>
                                    <span className={`type-item ${degree === "2" ? `selected`: ``}`} onClick={()=>{setDegree("2")}}>Ausbildung</span>
                                    <span className={`type-item ${degree === "3" ? `selected`: ``}`} onClick={()=>{setDegree("3")}}>Bachelors</span>
                                    <span className={`type-item ${degree === "4" ? `selected`: ``}`} onClick={()=>{setDegree("4")}}>FSJ</span>
                                  </div>
                                  <div className="app-intake">
                                    <p onClick={()=>{setIntake("1");console.log(intake)}}>Summer Intake</p>
                                    <div className="toggle">
                                      <div className="toggle-left"  style={{display: intake === "1" ? "flex":"none"}}></div>
                                      <div className="toggle-right"  style={{display: intake === "2" ? "flex":"none"}}></div>
                                    </div>
                                    <p onClick={()=>{setIntake("2");console.log(intake)}}>Winter Intake</p>
                                  </div>
                              </div>
                              <div className="app-search">
                                  <input type="text" placeholder="Search applicants" />
                              </div>
                          </section>
                          <section className="app-body">
                              <div className="app-body-header">
                                  <div className="app-titles" >University Name & Course</div>
                                  <div className="app-titles">Application Status</div>
                                  <div className="app-titles">Application Letter</div>
                                  <div className="app-titles">Admission Status</div>
                                  <div className="app-titles">Admission or Rejection Letter</div>
                              </div>
                              <Uni_Item />
                              <Uni_Item />
                              <Uni_Item />
                              <Uni_Item />
                              <Uni_Item />
                              <Uni_Item />
                              <Uni_Item />
                          </section>
                      </section>
                </div>           
          </div>
          <div className="profile-buttons">
            <button className="btn-sec">Cancel</button>
            <button className="btn-pri">Save</button>
          </div>
    </div>
  </div>
</section>

            

       
    
}

export default User;