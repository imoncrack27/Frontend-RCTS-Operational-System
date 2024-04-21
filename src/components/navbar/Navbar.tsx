import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="left-section">
        <img src="logo.svg" className="logo-icon" alt="" />
        <span className="appointment-span">
          Appointment <br />
          Scheduling
        </span>
        <div className="dashboard-dropdown">
          <img src="dashboard.svg" className="dashboard-icon" alt="" />
          <Link to="/" className="dashboard-span" onClick={handleClick}>
            Dashboard
            <FontAwesomeIcon
              className="faAngleDown"
              icon={faAngleDown as IconProp}
            />
          </Link>
        </div>
      </div>

      <div className="middle-section">
        <div className="appointment-navbar">
          <img src="appointment.svg" className="middle-icons" alt="" />
          <span>Appointments</span>
        </div>
        <div className="resource-management-navbar">
          <img src="resource-management.svg" className="middle-icons" alt="" />
          <span>Resource Management</span>
        </div>
        <div className="user-management-navbar">
          <img src="user-management.svg" className="middle-icons" alt="" />
          <span>User Management</span>
        </div>
        <div className="general-settings-navbar">
          <img src="general-settings.svg" className="middle-icons" alt="" />
          <span>General Settings</span>
        </div>
      </div>

      <div className="right-section">
        <button className="notifications" title="notifications">
          <img src="bell-icon.svg" alt="" className="bell-icon" />{" "}
          <span>1</span>
        </button>
        <div className="user">
          <img src="user.jpg" className="user-image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
