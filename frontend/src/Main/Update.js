// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import{Link, useParams} from 'react-router-dom'

// function Update() {
//   const {id} =useParams();

//   const[values,setValues]=useState({
//     firstname:'',
//     lastname:'',
//     email:'',
//     password:''
//   })


//   useEffect(() =>{
//     axios.get('https://6594e34f04335332df819ddb.mockapi.io/employee' +id)
//     axios.get(`https://6594e34f04335332df819ddb.mockapi.io/employee/${id}`)

//     .then(res => {
//       setValues(res.data);
//     })
//     .catch(err => console.log(err));
//   },[])

//   const handleUpdate =(event) =>{
//     event.preventDefalut();
//     axios.put('https://6594e34f04335332df819ddb.mockapi.io/employee' +id,values)
//     axios.put(`https://6594e34f04335332df819ddb.mockapi.io/employee/${id}`, values)

//     .then(res => {
//       console.log(res);
//       // Navigate('/')
//     })
//     .catch(err => console.log(err));
//   return (
//     <div className='update'>
//       <div className='update1'>
//         <h2 Update User></h2>
//         <form onSubmit={handleUpdate}>
//           <div className='update3'>
//             <label htmlFor='firstname'>First Name</label>
//             <input type="text" name='firstname' className='update4' placeholder='Enter First Name'
//             value={values.firstname} onChange={e=> setValues({...values,firstname:e.target.value})}/>
//           </div>
//           <div className='update3'>
//             <label htmlFor='lastname'>Last Name</label>
//             <input type="text" name='lastname' className='update4' placeholder='Enter Last Name'
//             value={values.lastname} onChange={e=> setValues({...values,lastname:e.target.value})}/>
//           </div>
//           <div className='update4'>
//             <label htmlFor='email'>Email</label>
//             <input type="text" name='email' className='update4' placeholder='Enter Email'
//             value={values.email} onChange={e=> setValues({...values,email:e.target.value})}/>
//           </div>
//           <div className='update5'>
//             <label htmlFor='password'>Password</label>
//             <input type="password" name='password' className='update4' placeholder='Enter password'
//             value={values.password} onChange={e=> setValues({...values,password:e.target.value})}/>
//           </div>
//           <button className='update6'>Update</button>
//           <Link to='/details' className='update7'>Back</Link>
//         </form>
//       </div>
    
//     </div>
//   )
// }}

// export default Update;
import axios from 'axios';
import './Update.css';
import React, { useEffect, useState } from 'react'
import { Link,useNavigate,useParams } from 'react-router-dom'

const Update = () => {
  const { id } = useParams();

  const navigate =useNavigate();
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  
  useEffect(() => {
    if(id){
    axios.get(`http://localhost:8080/api/users/updateuser/${id}`)
      .then(res => {
        setValues(res.data);
        })
      .catch(err => console.log(err));
    }
  }, [id]);
  
  const handleUpdate = (event) => {
    event.preventDefault();
    try {
        axios.put(`http://localhost:8080/api/users/updateuser/${id}`, values)
        .then(res =>{
        console.log(res);
        navigate(`/details`)
        })
       } catch (err) {
        console.error(err);
    }
};

return (
  <div className='update'>
      <div className='update1'>
        <h2>Update User</h2>
        <form onSubmit={handleUpdate}>
          <div className='update2'>
            <label htmlFor='firstName'>First Name</label>
            <input
              type="text"
              name='firstName'
              className='update2'
              placeholder='Enter First Name'
              value={values.firstName}
              onChange={e => setValues({ ...values, firstName: e.target.value})}
            />
          </div>
          <div className='update3'>
            <label htmlFor='lastName'>Last Name</label>
            <input
              type="text"
              name='lastName'
              className='update3'
              placeholder='Enter Last Name'
              value={values.lastName}
              onChange={e => setValues({ ...values, lastName: e.target.value })}
            />
          </div>
          <div className='update4'>
            <label htmlFor='email'>Email</label>
            <input
              type="text"
              name='email'
              className='update4'
              placeholder='Enter Email'
              value={values.email}
              onChange={e => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className='update5'>
            <label htmlFor='password'>Password</label>
            <input
              type="password"
              name='password'
              className='update5'
              placeholder='Enter password'
              value={values.password}
              onChange={e => setValues({ ...values, password: e.target.value })}
            />
          </div>
          <button className='update6'>Update</button>
          <Link to='/details' className='update7'>Back</Link>
        </form>
      </div>
    </div>
  );
}

export default Update;
