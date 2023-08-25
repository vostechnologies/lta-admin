import "./dashboard.css";
import LTALogo from "../../assets/images/lta_logo.png";
import Add from "../../assets/svg/Frame 2.svg"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Applicants from "../../components/applicants/applicants";
import { useContext } from "react";
import { AppContext } from "../../context/app_context";
// import "./profile.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [showOverlay, setOverlay] = useState(false);
  const {user}
 = useContext(AppContext)  
 const [activeTab, setActiveTab] = useState("1"); // ["dashboard", "profile", "documents", "settings"

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
                  style={{ cursor: "pointer",color: "white",backgroundColor: "red", borderRadius: "6px",padding: "4px" }}
                  onClick={() => {
                    localStorage.clear();
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
                    <div className="add-member">
                        <img src={Add} alt="" />Add Member
                    </div>
                    <p>Welcome Joel</p>
                </div>
                <div className="profile-nav">
                             <span className={`nav_item ${activeTab ==="1"?`activetab`:``}`} onClick={()=>{handleActiveTab("1")}}>Applicants</span>
                             <span className={`nav_item ${activeTab ==="2"?`activetab`:``}`} onClick={()=>{handleActiveTab("2")}}>Add Events</span>
                             <span className={`nav_item ${activeTab ==="3"?`activetab`:``}`} onClick={()=>{handleActiveTab("3")}}>Add Reels</span>
                             <span className={`nav_item ${activeTab ==="4"?`activetab`:``}`} onClick={()=>{handleActiveTab("4")}}>Add Blogs</span>
                </div>
                <div className="applicants-container" style={{display : activeTab ==="1" ? "block" : "none"}} >
                    <Applicants />
                </div>

                
            </div>
        </div>
    </section>  
}

export default Dashboard;