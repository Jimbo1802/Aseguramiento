import React, { useState } from "react";
import { clientDropdown } from "./NavItems";
import { sellerDropdown } from "./NavItems";
import { vendorDropdown } from "./NavItems";
import { Link } from "react-router-dom";
import "./css/Dropdown.css";



function Dropdown(props) {
  const [dropdown, setDropdown] = useState(false);
  
  const dropList={
      'Client':clientDropdown,
      'Seller':sellerDropdown,
      'Vendor':vendorDropdown,
  }
  return (
    <React.Fragment>
      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {dropList[props.title].map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}

export default Dropdown;