import { useState } from "react";

const MenuList = () => {
    const [menu, setMemu] = useState(0);

    const menuClick = n => {
        setMemu(prev => n);
    };
    return (
        <ul>
        <li className={menu === 0 ? 'sel' : ''}
            onClick={()=>menuClick(0)}
        >
            <i className="fa-solid fa-tree"></i>
            <span>자연</span>
        </li>
        <li className={menu === 1 ? 'sel' : ''}
            onClick={()=>menuClick(1)}
        >
            <i className="fa-solid fa-tree"></i>
            <span>활동</span>
        </li>
        <li className={menu === 2 ? 'sel' : ''}
            onClick={()=>menuClick(2)}
        >
            <i className="fa-solid fa-tree"></i>
            <span>쇼핑</span>
        </li>
        <li className={menu === 3 ? 'sel' : ''}
            onClick={()=>menuClick(3)}
        >
            <i className="fa-solid fa-tree"></i>
            <span>몰루</span>
        </li>
        <li className={menu === 4 ? 'sel' : ''}
            onClick={()=>menuClick(4)}
        >
            <i className="fa-solid fa-tree"></i>
            <span>몰루2</span>
        </li>
        <li className={menu === 5 ? 'sel' : ''}
            onClick={()=>menuClick(5)}
        >
            <i className="fa-solid fa-tree"></i>
            <span>몰루3</span>
        </li>
    </ul>
    )
};

export default MenuList;