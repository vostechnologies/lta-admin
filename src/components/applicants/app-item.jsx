import "./applicants.css";
import { useNavigate } from "react-router-dom";
import dp from "../../assets/svg/Rectangle 2601.svg";
import { useContext } from "react";
import { AppContext } from "../../context/app_context";
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';


const App_Item = ({ user }) => {
    const {setApplicant} = useContext(AppContext);
  const {
    courses_preffered,
    universities_preffered,
    _id,
    username,
    password,
    name_first,
    name_last,
    profile_image,
    address,
    gender,
    phone,
  } = user;
  const Navigate = useNavigate();
  return (
    <tr className="row-styling" id="row-item" onClick={() => {
          setApplicant(user);
          Navigate("/user");
        }}>
    <td className="first">
      <div className="item-img-div">
        <img src={profile_image || dp} alt="" />
      </div>
      <div className="item-details">
        <p className="item-name">{name_first && name_last ? `${name_first} ${name_last}`: "--"}</p>
        <p className="item-email">{username ? username : "-"}</p>
      </div>
    </td>
    <td className="second">
        <p className="item-contact">{phone ? phone : "-"}</p>
    </td>
    <td className="third">
    <div className="icon-details">
        <p className="item-name"><EditIcon boxSize={5} color={"grey"}/></p>
        <p className="item-email"><DeleteIcon boxSize={5} color={"grey"}/></p>
      </div>
    </td>
  </tr>



    // <div className="app-body-content">
    //   <div className="app-body-item">
    //     <div
    //       className="item-left"
    //       onClick={() => {
    //         Navigate("/user");
    //       }}
    //     >
    //       <div className="item_img_div">
    //         <img src={dp} alt="" />
    //       </div>
    //       <div className="item-details">
    //         <p className="item-name">{`${name_first} ${name_last}`}</p>
    //         <p className="item-email">{username}</p>
    //       </div>
    //     </div>

    //     <div className="item-center">
    //       <p className="item-contact">{phone}</p>
    //     </div>

    //     <div className="item-right">
    //       <p className="item-status">Status</p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default App_Item;
