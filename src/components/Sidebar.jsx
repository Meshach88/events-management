// Sidebar.js
import { useState } from "react";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { CiHome } from "react-icons/ci";
import { RiUserVoiceLine } from "react-icons/ri";
import { TiDocumentText } from "react-icons/ti";
import { GoBell } from "react-icons/go";
import { PiChatsCircle } from "react-icons/pi";
import { TbSettings } from "react-icons/tb";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import { assets } from "../assets";

function Sidebar({ toggleDarkMode, isDarkMode, setIsDarkMode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("Home"); // Default active item is 'Home'
  const [notificationCount, setNotificationCount] = useState(3);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName); // Set the active item when clicked
  };

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <ul>
        <div className="logo-container">
          <div className="logo-box">
            {!isCollapsed && <p className="logo">Full Logo</p>}
          </div>
        </div>
        <li
          className={activeItem === "Home" ? "active" : ""}
          onClick={() => handleItemClick("Home")}
        >
          <div>
            <CiHome />
          </div>
          <p>{!isCollapsed && <span>Home</span>}</p>
        </li>
        <li
          className={activeItem === "Events" ? "active" : ""}
          onClick={() => handleItemClick("Events")}
        >
          <div>
            <MdOutlineCalendarMonth />
          </div>
          <p>{!isCollapsed && <span>Events</span>}</p>
        </li>
        <li
          className={activeItem === "Speakers" ? "active" : ""}
          onClick={() => handleItemClick("Speakers")}
        >
          <div>
            <RiUserVoiceLine />
          </div>
          <p>{!isCollapsed && <span>Speakers</span>}</p>
        </li>
        <li
          className={activeItem === "Reports" ? "active" : ""}
          onClick={() => handleItemClick("Reports")}
        >
          <div>
            <TiDocumentText />
          </div>
          <p>{!isCollapsed && <span>Reports</span>}</p>
        </li>
        <li
          className={activeItem === "Notifications" ? "active" : ""}
          onClick={() => handleItemClick("Notifications")}
        >
          <div>
            <GoBell />
          </div>
          <p>{!isCollapsed && <span>Notifications</span>}</p>
          {notificationCount > 0 && (
            <p className="notification-count">
              {!isCollapsed && (
                <span>{notificationCount}</span>
              )}
            </p>
          )}
        </li>
        <li
          className={activeItem === "Messages" ? "active" : ""}
          onClick={() => handleItemClick("Messages")}
        >
          <div>
            <PiChatsCircle />
          </div>
          <p>{!isCollapsed && <span>Messages</span>}</p>
        </li>
        <li
          className={activeItem === "Settings" ? "active" : ""}
          onClick={() => handleItemClick("Settings")}
        >
          <div>
            <TbSettings />
          </div>
          <p>{!isCollapsed && <span>Settings</span>}</p>
        </li>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="collapse-toggle-btn"
        >
          {isCollapsed ? (
            <div>
              <FiChevronsRight />{" "}
            </div>
          ) : (
            <div>
              <FiChevronsLeft /> <p>Collapse</p>{" "}
            </div>
          )}
        </button>
        <div className="dark-mode-toggle">
          <label className="switch">
            <input
              type="checkbox"
              onChange={toggleDarkMode}
              checked={isDarkMode}
            />
            <span className="slider round"></span>
          </label>
          {!isCollapsed && (
            <span>{isDarkMode ? "Dark Mode" : "Light Mode"}</span>
          )}
        </div>
        <li className="profile">
          <img src={assets.profile} alt="profile photo" />
          {!isCollapsed && (
            <div className="profile-info">
              <p>Rudra Devi</p>
              <p className="profile-info-email">ruda.devi@gmail.com</p>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
