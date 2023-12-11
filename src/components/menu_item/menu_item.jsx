import { useEffect } from 'react';
import './menu_item.css';
import { useNavigate } from "react-router-dom";


const MenuItem = ({itemName,active,path})=>{
    const navigate = useNavigate();

    useEffect(()=>{
        console.log(`/src/assets/svg/${itemName}_active.svg`);
    },[]);
    return <section className='menu_item_main_wrapper' onClick={()=>{navigate('/profile')}}>
        <div className={`menu_item ${active?`active`:``}`}>
        <img src={active?`/svg/${itemName}_active.svg`:`/svg/${itemName}.svg`}/>
    </div>
    </section>
};

export default MenuItem;