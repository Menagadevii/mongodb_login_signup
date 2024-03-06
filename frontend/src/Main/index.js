// import styles from "./styles.module.css";


// const Main = () => {
// 	const handleLogout = () => {
// 		localStorage.removeItem("token");
// 		window.location.reload();
// 	};

// 	return (
// 		<div className={styles.main_container}>
// 			<nav className={styles.navbar}>
// 				<h1>Instagram</h1>
// 				<img src="image/logo.jpg" alt="Instagram Logo" className={styles.logo} />
// 				 <button className={styles.white_btn} onClick={handleLogout}> 
// 					Logout
// 				</button> 
// 			</nav>

// 		</div>
// 	);
// };

// export default Main;
import React from "react";
import "./stylein.css";
import {motion} from 'framer-motion'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import LanguageIcon from '@mui/icons-material/Language';
// import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
// import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import TocRounded from '@mui/icons-material/TocRounded';
import { Avatar } from "@mui/material";
import { useState } from "react";
import {FaCommentAlt, FaRegChartBar, FaShoppingBag, FaTh, FaThList, FaUserAlt,} from 'react-icons/fa'
import { NavLink} from "react-router-dom";





// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";

const Main = () =>{
	const [showMenu,setShowMenu]=useState(false);
	const handleShowMenu =()=>{
		setShowMenu(preve =>!preve)
		};
		// const handleLogout = () => {
		// 	localStorage.removeItem("token");
		// window.location.reload();
		// }
		
const [open,setOpen]=useState(true);
		const handleToogle =() =>{
            setOpen(!open)
		}
const sideContainerVariants ={
	true:{
		width: '15rem',
	},
	false:{
		transition:{
			delay:0.2,
		},
	},
};
const sidebarVariants = {
	true: {},
	false:{
		width: '3rem',
		transition:{
			delay:0.1
		}
	}
}
const profileVariants ={
	true: {
		alignSelf: 'center',
		width:'4rem'
	},
	false:{
		alignSelf:'flex-start',
		marginTop:'2rem',
		width:'3rem',
		transition:{
			delay:0.1
		}
	}
}
const subheading ={
	true:{
		opacity:1
	},
	false:{
		opacity:0,
		display:"none"
	}
}
const menuItem =[
	{
			path:'/dash',
			name:"Dashboard",
			icon: <FaTh/>
	},
	{
		path:'/about',
		name:"About",
		icon: <FaUserAlt/>
},
{
	path:'/analytics',
	name:"Analytics",
	icon: <FaRegChartBar/>
},
{
	path:'/comment',
	name:"Comment",
	icon: <FaCommentAlt/>
},
{
	path:'/product',
	name:"Product",
	icon:<FaShoppingBag/>
},
{
	path:'/productList',
	name:"ProductList",
	icon:<FaThList/>
},
]
const Nav =[
	{
		path:'/details',
		name:"Account Setting"
	}
]

// const [username, setUsername] = useState('');
	// const [email, setEmail] = useState('');
  
	// const handleSubmit = (e) => {
	//   e.preventDefault();
	// }

    // const Navbar = () => {
	// 	const { dispatch } = useContext(DarkModeContext);
	return( 
		<>
		<div className="navbar">
			<Avatar className="p" onClick={handleShowMenu} >
			<img src="image/me.jpg" alt="Avatar" style={{width:"40px",height:"40px",cursor:"pointer"}}/>
			</Avatar>
			<img src="image/logo.jpg" alt="logo" style={{ width: '120px', height: '60px',margin:'10px' }}/>
			<div className="search">
			<input type="text" placeholder="Search..." style={{height:'40px',width:'200px'}}/>
			<SearchOutlinedIcon className="AA" style={{height:'35px',width:'55px',marginTop:'1px'}} />
		</div>
		<br/>
		
		<div className="item7">
            <img
            // src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
			// src="C:/Users/SightSpectrum/Desktop/reactjs/project/public/image/book.webp"
              alt=""
              className="avatar"
            />
		</div>
		<div className="item8">
		{/* <h2>Dashboard</h2> */}
		</div>
		{/* <div className="item6">
            <ListOutlinedIcon className="icon" />
        </div>  */}
		  <div className="item5">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            {/* <div className="counter">2</div>  */}
          </div>
		  <div className="item4">
            <NotificationsNoneOutlinedIcon className="icon" />
            {/* <div className="counter">1</div> */}
          </div>
		  {/* <div className="item3">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
		  <div className="item2">
            <DarkModeOutlinedIcon/>
          </div>
         <div className="item1">
		 <LanguageIcon />
		 English
			</div>  */}
			</div>
			{showMenu &&(
					<div className="BB">
						<Avatar className="p1" >
			<img src="image/me.jpg" alt="Avatar" style={{width:"40px",height:"40px"}}/>
			</Avatar>
			<p className="sty">Menagadevi<br></br>
			menagadevi.sightspectrum.com</p>
			{Nav.map((item, index) => (
    <NavLink key={index} to={item.path} className="nav-link">
        {item.name}
    </NavLink>
))}<br/>
{/* <button className="white_btn" onClick={handleLogout}> 
					Logout
			</button> */}
			</div>
				)}
<section>
			
	{/* <div className="sidebar">
		<div className="top">
			<div className="center">
				<ul>
					<li>
						<span>Dashboard</span>
					</li>
				</ul>
				<ul>
					<li>
						<span>Dashboard</span>
					</li>
				</ul>
				<ul>
					<li>
						<span>Dashboard</span>
					</li>
				</ul>
				<ul>
					<li>
						<span>Dashboard</span>
					</li>
				</ul>
			</div>
		</div>
	</div> */}

	<motion.div 
	data-Open ={open}
	variants={sideContainerVariants}
	initial={`${open}`}
	animate={`${open}`}
	className="sidebarcontainer">
	<motion.div className="sidebar"
	initial={`${open}`}
	animate={`${open}`}
	variants={sidebarVariants}>
		<motion.div
		whileHover={{
			scale:1.2,
			rotate:180,
			backgroundColor:'rgba(255,255,255,0.3)',
			backdropFilter:"blur(3.5px)",
			border:"1px soild rgba(255,255,255,0.18)",
			transition:{
			delay:0.2,
			duration:0.4
			}
}}
onClick={handleToogle}

		className="lines_icon">
			<TocRounded/>
		</ motion.div>
		<motion.div className="profile"  
		initial={`${open}`}
		animate={`${open}`}
		variants={profileVariants}
		>

		<img src="image/me.jpg" alt="profile_img"/>
		</motion.div>
		{
			menuItem.map((item,index)=>(
				<NavLink to={item.path} key={index} className="link" activeclassName="active">
					<motion.div className="icon">{item.icon}</motion.div>
					<motion.div className="link_text"
					variants={subheading}>{item.name}</motion.div>
				</NavLink>
			))
		}
		
	</motion.div>
	</motion.div>
</section>
		</>
	)
}




export default Main;