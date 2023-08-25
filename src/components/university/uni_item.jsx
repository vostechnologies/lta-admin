import "./uni_item.css";
import dp from "../../assets/svg/Rectangle 2601.svg";
import Delete from "../../assets/svg/Delete_icon.svg";
import { useRef } from "react";
import { useState } from "react";
import { Select } from "@chakra-ui/react";
import { deleteApplicationApi, updateApplication } from "../../util/api";

const Uni_Item = ({ application,onRefresh }) => {
  const { _id, universityName, course, applicationStage, admissionStatus } =
    application;
  const [form, setForm] = useState({});
  const file1Ref = useRef(null);
  const file2Ref = useRef(null);

  const handleClick1 = () => {
    file1Ref.current.click();
  };

  const handleClick2 = () => {
    file2Ref.current.click();
  };
  const deleteApplication = async()=>{
    try {
      let response = await deleteApplicationApi(_id);
      onRefresh();
    } catch (error) {
      console.log(error);
    }
  }
  const updateApplicationStatus = async({target})=>{
	const {value} = target;
	try {
		let form = new FormData();
		form.append("applicationStage",value);
		let response = await updateApplication(_id,form);
		console.log(response);
		onRefresh();
	} catch (error) {
		
	}
  }
  const updateAdmissionStatus = async({target})=>{
	const {value} = target;
	try {
		let form = new FormData();
		form.append("admissionStatus",value);
		let response = await updateApplication(_id,form);
		console.log(response);
		onRefresh();
	} catch (error) {
		
	}
  }
  const updateApplicationFile = async({target})=>{
	const {files} = target;
	try {
		let form = new FormData();
		form.append("application",files[0]);
		let response = await updateApplication(_id,form);
		console.log(response);
		onRefresh();
	} catch (error) {
		
	}
  }
  const updateAdmissionFile = async({target})=>{
	const {files} = target;
	try {
		let form = new FormData();
		form.append("response",files[0]);
		let response = await updateApplication(_id,form);
		console.log(response);
		onRefresh();
	} catch (error) {
		
	}
  }
  return (
    <tr className="row-styling" id="row-item">
      <td className="first">
        <div className="item-img-div">
          <img src={dp} alt="" />
        </div>
        <div className="item-details">
          <p className="item-name">{universityName}</p>
          <p className="item-email">{course}</p>
        </div>
      </td>
      <td className="second">
        <Select placeholder="Status" value={applicationStage} onChange={updateApplicationStatus}>
          <option value="Submitted">Submitted</option>
          <option value="Pending">Pending</option>
        </Select>
      </td>
      <td className="third">
        <label htmlFor={`application${_id}`}>Upload Here</label>
        <input type="file" style={{display: "none" }} id={`application${_id}`} onChange={updateApplicationFile}/>
      </td>
      <td className="fourth">
        <Select placeholder="Status" value={admissionStatus} onChange={updateAdmissionStatus}>
          <option value="Confirmed">Confirmed</option>
          <option value="Rejected">Rejected</option>
		  <option value="Pending">Pending</option>
        </Select>
      </td>
      <td className="fifth">
        <label htmlFor={`admission${_id}`}>Upload Here</label>
        <input type="file" style={{ display: "none" }} id={`admission${_id}`}  onChange={updateAdmissionFile}/>
      </td>
      <td>
        <img src={Delete} alt="" style={{cursor: "pointer"}} onClick={()=>{
          deleteApplication();
        }}/>
      </td>
    </tr>
    // <div className="app-body-content">
    //             <div className="app-body-item">
    //                 <div className="item-left" >
    //                     <div className="item-img-div">
    //                         <img src={dp} alt="" />
    //                     </div>
    //                     <div className="item-details" >
    //                         <p className="item-name">TU BERGAKADEMIE FREIBERG</p>
    //                         <p className="item-email">Sustainable Mining and Remediation Technology</p>
    //                     </div>
    //                 </div>

    // 				<div className="item-container">
    //
    // 				</div>

    // 				<div className="item-container">
    // 					<a href="">Upload Here</a>
    // 					<input type="file" />
    // 				</div>

    // 				<div className="item-container">
    // 				<select name="" id="">
    // 						<option value="">Approved</option>
    // 						<option value="">Rejected</option>
    // 					</select>
    // 				</div>

    // 				<div className="item-container">
    // 					<a href="">Upload Here</a>
    // 					<input type="file" />
    // 				</div>

    // 				<div className="item-container" >
    // 					<img src= {Delete} alt=""  />
    // 				</div>
    //             </div>
    // </div>
  );
};

export default Uni_Item;
