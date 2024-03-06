import React, { useEffect, useState } from 'react'
import './Userdetails.css';
import axios from 'axios';
import {Link} from "react-router-dom"
// import Navbar from './Navbar';


function Userdetails() {
  const [data,setData] = useState([])
  const [searchQuery, setSearchQuery] = useState('');
    
  useEffect(()=>{
          axios.get("http://localhost:8080/api/users/getuser")
          .then(res => setData(res.data))
          .catch(err => console.log(err))
    },[])
    const handleSearch = (e) => {
      setSearchQuery(e.target.value);
    };
    const filteredData = data.filter(user =>
      user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleLogout = () => {
      window.location.href = '/login';
  };
  return (
    <div>
      <Link onClick={handleLogout} style={{float:"right",padding:"10px"}}>Logout</Link>
      <input
        type="text"
        placeholder="Search..."
        style={{ height: '40px', width: '150px', float: "right",top:"30px" }}
        onChange={handleSearch}
      />
    
    {/* <div>
      <input type="text" placeholder="Search..." style={{height:'40px',width:'150px',float:"right"}}/> */}
    
    <div className='details'>
      {/* <Navbar/> */}
      <h1>Login Details</h1>
      {/* <div className='details1'>
        <div className='details2'>
          <Link to="/create" className="details3">Add +</Link>
        </div> */}
<table className='details4'>
  <thead>
  <tr>
    <th>Id</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Email</th>
    <th>Password</th>
    <th>Action</th>
  </tr>
  </thead>
  <tbody>
    {
      filteredData.map((d, i) =>(
        <tr key={i}>
          <td>{d._id}</td>
          <td>{d.firstName}</td>
          <td>{d.lastName}</td>
          <td>{d.email}</td>
          <td>{d.password}</td>
          <td>
            <Link to={`/update/${d._id}`}className='details5'>Update</Link>
          </td>
        </tr>
      ))
    }
  </tbody>
</table>
      </div>
     </div>
  

  )}

export default Userdetails
