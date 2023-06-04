import "./uni_item.css"
import dp from "../../assets/svg/Rectangle 2601.svg"
import Delete from "../../assets/svg/Delete_icon.svg"
import { useRef } from "react";



const Uni_Item = ({application}) => {
	const {_id} = application;
	const file1Ref = useRef(null);
	const file2Ref = useRef(null);

	const handleClick1 = () => {
        file1Ref.current.click();
    };

	const handleClick2 = () => {
		file2Ref.current.click();
	};

	return (
			<tr className="row-styling" id="row-item">
				<td className="first">
					<div className="item-img-div">
						<img src={dp} alt="" />
					</div>
					<div className="item-details">
						<p className="item-name">TU BERGAKADEMIE FREIBERG</p>
						<p className="item-email">Sustainable Mining and Remediation Technology</p>
					</div>
				</td>
				<td className="second"> 
					<select name="application_status" id="" >
						<option value="" disabled selected hidden>Status</option>
						<option value="Approved">Approved</option>
						<option value="Rejected">Rejected</option>
					</select>
				</td>
				<td className="third" onClick={()=>handleClick1()}>
					<a href="">Upload Here</a>
		            <input type="file" style={{display:"none"}} ref={file1Ref}/>
				</td>
				<td className="fourth">
					<select name="" id="">
 						<option value="">Approved</option>
 						<option value="">Rejected</option>
 					</select>
				</td>
				<td className="fifth" onClick={()=>handleClick2()}>
					<a href="">Upload Here</a>
						<input type="file" style={{display:"none"}} ref={file2Ref}/>
				</td>
				<td>
					<img src= {Delete} alt=""  />
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

	)
}

export default Uni_Item