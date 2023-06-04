import "./user.css";
import "../dashboard/dashboard.css";
import LTALogo from "../../assets/images/lta_logo.png";
import Add from "../../assets/svg/Frame 2.svg";
import dp from "../../assets/svg/Rectangle 2601.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Uni_Item from "../../components/university/uni_item";
import Delete from "../../assets/svg/Delete_icon.svg"

import {
  Button,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Switch,
  TagLabel,
  useDisclosure,
} from "@chakra-ui/react";
import { ArrowForwardIcon, AttachmentIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { AppContext } from "../../context/app_context";
import { createApplication, getApplicationsOfUser } from "../../util/api";
import { useMemo } from "react";

const User = () => {
  const navigate = useNavigate();
  const [showOverlay, setOverlay] = useState(false);
  const [activeTab, setActiveTab] = useState("1");
  const [degree, setDegree] = useState("1");
  const [intake, setIntake] = useState("1");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { applicant } = useContext(AppContext);
  const [applicationFile, setApplicationFile] = useState();
  const [admissionFile, setAdmissionFile] = useState();
  const [logoFile, setLogoFile] = useState();
  const [form, setForm] = useState({});
  const [inTakeCheck,setInTakeCheck] = useState(false);
  const [applicationCheck,setApplicationCheck] = useState(false);
  const [userApplications,setUserApplications] = useState([]);

  const handleActiveTab = (tab) => {
    setActiveTab(tab);
  };
  const downloadApplications = async()=>{
    try {
      let applications = await getApplicationsOfUser(applicant._id);
     // applications = applications.revesre();
      setUserApplications(applications);
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    console.log(userApplications);
  },[userApplications]);
  useEffect(()=>{
    downloadApplications();
  },[]);

  const onChangeForm = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };
 
  const onChangeCheck = ({ target }) => {
    const { name, checked } = target;
    switch (name) {
      case 'intake':
          setForm({...form,[name]:checked?"Winter":"Summer"})
        break;
        case 'applicationStage':
          setForm({...form,[name]:checked?"Pending":"Submitted"})
        break;
    }
    console.log(name,checked)
  };
  const onChangeFileAdmission = ({ target }) => {
    const { files } = target;
    setAdmissionFile(files[0]);
  };
  const onChangeFileApplication = ({ target }) => {
    const { files } = target;
    setApplicationFile(files[0]);
  };
  const onChangeFileLogo = ({ target }) => {
    const { files } = target;
    setLogoFile(files[0]);
  };
  const onSubmit = async()=>{
    let formData = new FormData();
    formData.append("admissionStatus","Pending");
    formData.append("applicationStage",form.applicationStage);
    formData.append("course",form.course);
    formData.append("universityName",form.universityName);
    formData.append("logo",logoFile);
    formData.append("userId",applicant._id);
    formData.append("application",applicationFile);
    formData.append("response",admissionFile);
    try {
      let _applicationCreateResponse = await createApplication(formData);
      console.log(_applicationCreateResponse);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <section
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
      <div className="body_container user">
        <div className="dash_sidebar" style={{ width: "85px" }}></div>
        <div className="dash_body">
          <div className="dash_header">
            <div className="user-display">
              <div className="profile_container">
                <div className="user-dp">
                  <img src={applicant.profile_image || dp} alt="" />
                </div>
                <div className="user-details">
                  <div className="app-name">{`${applicant.name_first} ${applicant.name_last}`}</div>
                  <div className="app-email">{applicant.username}</div>
                </div>
              </div>
              <div className="add-member new-app" onClick={onOpen}>
                <img src={Add} alt="" />
                Add New Application
              </div>
            </div>
            <div className="profile-nav">
              <span
                className={`nav_item ${activeTab === "1" ? `activetab` : ``}`}
                onClick={() => {
                  handleActiveTab("1");
                }}
              >
                User Info
              </span>
              <span
                className={`nav_item ${activeTab === "2" ? `activetab` : ``}`}
                onClick={() => {
                  handleActiveTab("2");
                }}
              >
                Application Module
              </span>
              <span
                className={`nav_item ${activeTab === "3" ? `activetab` : ``}`}
                onClick={() => {
                  handleActiveTab("3");
                }}
              >
                Documents
              </span>
              <span
                className={`nav_item ${activeTab === "4" ? `activetab` : ``}`}
                onClick={() => {
                  handleActiveTab("4");
                }}
              >
                Preference
              </span>
            </div>

            <div
              className="applicants-container"
              style={{ display: activeTab === "2" ? "flex" : "none" }}
            >
              <section className="applicants">
                <section className="app-header">
                  <div className="header-container">
                    <div className="app-type">
                      <span
                        className={`type-item ${
                          degree === "1" ? `selected` : ``
                        }`}
                        onClick={() => {
                          setDegree("1");
                        }}
                      >
                        Masters
                      </span>
                      <span
                        className={`type-item ${
                          degree === "2" ? `selected` : ``
                        }`}
                        onClick={() => {
                          setDegree("2");
                        }}
                      >
                        Ausbildung
                      </span>
                      <span
                        className={`type-item ${
                          degree === "3" ? `selected` : ``
                        }`}
                        onClick={() => {
                          setDegree("3");
                        }}
                      >
                        Bachelors
                      </span>
                      <span
                        className={`type-item ${
                          degree === "4" ? `selected` : ``
                        }`}
                        onClick={() => {
                          setDegree("4");
                        }}
                      >
                        FSJ
                      </span>
                    </div>
                    <div className="app-intake">
                      <p
                        onClick={() => {
                          setIntake("1");
                          console.log(intake);
                        }}
                      >
                        Summer Intake
                      </p>
                      <div className="toggle">
                        <div
                          className="toggle-left"
                          style={{ display: intake === "1" ? "flex" : "none" }}
                        ></div>
                        <div
                          className="toggle-right"
                          style={{ display: intake === "2" ? "flex" : "none" }}
                        ></div>
                      </div>
                      <p
                        onClick={() => {
                          setIntake("2");
                          console.log(intake);
                        }}
                      >
                        Winter Intake
                      </p>
                    </div>
                  </div>
                  <div className="app-search">
                    <input type="text" placeholder="Search applicants" />
                  </div>
                </section>
                <section className="app-body">
                  <table className="applications-container">
                        <tr className="table-headers">
                            <th className="first">University Name & Course</th>
                            <th className="second">Application Status</th>
                            <th className="third">Application Letter</th>
                            <th className="fourth">Admission Status</th>
                            <th className="fifth">Admission or Rejection Letter</th>
                            <th>
                              <img src= {Delete} alt="" style={{opacity:"0"}} />
                            </th>
                        </tr>
                        <Uni_Item />

                  </table>
                  {/* <div className="app-body-header">
                    <div className="app-titles">University Name & Course</div>
                    <div className="app-titles">Application Status</div>
                    <div className="app-titles">Application Letter</div>
                    <div className="app-titles">Admission Status</div>
                    <div className="app-titles">
                      Admission or Rejection Letter
                    </div>
                  </div> */}
                  {/* <Uni_Item />
                  <Uni_Item />
                  <Uni_Item />
                  <Uni_Item />
                  <Uni_Item />
                  <Uni_Item />
                  <Uni_Item /> */}
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
      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Application</ModalHeader>
          {/* {
	"applicationStage": "Submitted",
	"admissionStatus": "Pending",
	"applicationDownload": "https://ltamain.s3.eu-central-1.amazonaws.com/sample%20request.pdf",
	"offerOrRejectionUrl": "https://ltamain.s3.eu-central-1.amazonaws.com/sample%20request.pdf",
	"course": "MS Automobile",
	"universityName": "Colarado University",
	"universityLogo": "https://ltamain.s3.eu-central-1.amazonaws.com/WhatsApp%20Image%202023-06-03%20at%2011.54.48%20PM.jpeg",
	"userId": "647b8e1f0dc09420afd2b099",
	"_id": "647b912977d2966670385876",
	"__v": 0
} */}
          <ModalBody>
            <section className="modal_add_application">
              <div className="input_wrap">
                <label>University name</label>
                <Input
                  placeholder="University name"
                  onChange={onChangeForm}
                  name="universityName"
                  size="lg"
                />
              </div>
              <div className="input_wrap">
                <label>Course name</label>
                <Input placeholder="Course name"  onChange={onChangeForm} name="course" size="lg" />
              </div>
              <div className="input_wrap">
                <label>Upload application document</label>
                <input
                  type="file"
                  name="application"
                  id="application"
                  onChange={onChangeFileApplication}
                  style={{ display: "none" }}
                />
                <label htmlFor="application">
                  <AttachmentIcon color="purple"/>
                  <span className="label_upload">Upload document.</span>
                </label>
              </div>
              <div className="input_wrap">
                <label>Upload admission/rejection document</label>
                <input
                  type="file"
                  onChange={onChangeFileAdmission}
                  name="response"
                  id="response"
                  style={{ display: "none" }}
                />
                <label htmlFor="response">
                <AttachmentIcon color="purple"/>
                  <span className="label_upload">Upload document.</span>
                </label>
              </div>
              <div className="input_wrap">
                <label>University logo</label>
                <input
                  type="file"
                  name="logo"
                  id="logo"
                  onChange={onChangeFileLogo}
                  style={{ display: "none" }}
                />
                <label htmlFor="logo">
                <AttachmentIcon color="purple"/>
                  <span className="label_upload">Upload image.</span>
                </label>
              </div>
              <div className="input_wrap">
                <label>Intake</label>
                <div>
                  <label>Summer</label>
                  <span className="space">&nbsp;</span>
                  <Switch colorScheme="purple" onChange={onChangeCheck} name="intake" id="intake_one" />
                  <span className="space">&nbsp;</span>
                  <label className="space">Winter</label>
                </div>
              </div>
              <div className="input_wrap">
                <label>Application type</label>
                <Select
                  placeholder="Select application type"
                  size="lg"
                  colorScheme="purple"
                  onChange={onChangeForm}
                >
                  <option value="Masters">Masters</option>
                  <option value="Ausbulding">Ausbulding</option>
                  <option value="Bachelors">Bachelors</option>
                  <option value="FSJ">FSJ</option>
                </Select>
              </div>
              <div className="input_wrap">
                <label>Application status</label>

                <div>
                  <label>Pending</label>
                  <span className="space">&nbsp;</span>
                  <Switch colorScheme="purple" name="applicationStage" onChange={onChangeCheck} id="intake_one" />
                  <span className="space">&nbsp;</span>
                  <label className="space">Applied</label>
                </div>
              </div>
            </section>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
            <span className="space">&nbsp;</span>
            <Button colorScheme="purple" mr={3} onClick={onSubmit}>
              Save Application +
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </section>
  );
};

export default User;
