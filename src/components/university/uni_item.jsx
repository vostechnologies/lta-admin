import "./uni_item.css"
import dp from "../../assets/svg/Rectangle 2601.svg"
import Delete from "../../assets/svg/Delete_icon.svg"


const Uni_Item = () => {
	return (
		<div className="app-body-content">
                    <div className="app-body-item">
                        <div className="item-left" >
                            <div className="item-img-div">
                                <img src={dp} alt="" />
                            </div>
                            <div className="item-details" >
                                <p className="item-name">TU BERGAKADEMIE FREIBERG</p>
                                <p className="item-email">Sustainable Mining and Remediation Technology</p>
                            </div>
                        </div>

						<div className="item-container">
							<select name="application_status" id="">
								<option value="Approved">Approved</option>
								<option value="Rejected">Rejected</option>
							</select>
						</div>

						
						<div className="item-container">
							<a href="">Upload Here</a>
							<input type="file" />
						</div>

						<div className="item-container">
						<select name="" id="">
								<option value="">Approved</option>
								<option value="">Rejected</option>
							</select>
						</div>

						<div className="item-container">
							<a href="">Upload Here</a>
							<input type="file" />
						</div>

						<div className="item-container" >
							<img src= {Delete} alt=""  />
						</div>
                    </div>
        </div>

	)
}

export default Uni_Item