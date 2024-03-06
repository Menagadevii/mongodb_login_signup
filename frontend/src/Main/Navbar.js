

import React, { useState } from "react";
import "./stylein.css";
import Avatar from '@mui/material/Avatar'; 
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
// import { NavLink } from "react-router-dom"; 

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => {
        setShowMenu(prev => !prev);
    };

    return (
        <>
            <div className="navbar">
                <Avatar className="p" onClick={handleShowMenu}>
                    <img src="image/me.jpg" alt="Avatar" style={{ width: "40px", height: "40px", cursor: "pointer" }} />
                </Avatar>
                <img src="image/logo.jpg" alt="logo" style={{ width: '120px', height: '60px', margin: '10px' }} />
                <div className="search">
                    <input type="text" placeholder="Search..." style={{ height: '40px', width: '200px' }} />
                    <SearchOutlinedIcon className="AA" style={{ height: '35px', width: '55px', marginTop: '1px' }} />
                </div>
                <br />
                <div className="item7">
                    <img
                        alt=""
                        className="avatar"
                    />
                </div>
                <div className="item8"></div>
                <div className="item5">
                    <ChatBubbleOutlineOutlinedIcon className="icon" />
                </div>
                <div className="item4">
                    <NotificationsNoneOutlinedIcon className="icon" />
                </div>
            </div>
            {showMenu && (
                <div className="BB">
                    <Avatar className="p1" >
                        <img src="image/me.jpg" alt="Avatar" style={{ width: "40px", height: "40px" }} />
                    </Avatar>
                    <p className="sty">Menagadevi<br></br>
                        menagadevi.sightspectrum.com</p>
                
                    {/* <NavLink to="/path1" className="nav-link">Path 1</NavLink>
                    <NavLink to="/path2" className="nav-link">Path 2</NavLink> */}
                </div>
            )}
        </>
    )
}

export default Navbar;
