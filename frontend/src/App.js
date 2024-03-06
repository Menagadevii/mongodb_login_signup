import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Main from "./Main";
import SignUp from "./SignUp";
import Login from "./Login";
import Dashboard from "./Main/Dashboard";
import About from "./Main/About";
import Comment from "./Main/Comment";
import Analytics from "./Main/Analytics";
import Product from "./Main/Product";
import ProductList from "./Main/ProductList";
import Userdetails from "./Main/Userdetails";
import Create from "./Main/Create";
import Update from "./Main/Update";
import Read from "./Main/Read";
import Navbar from "./Main/Navbar";




function App() {
	const user = localStorage.getItem("token");
	
return (

	<BrowserRouter>
		<Routes>
			{/* {user && <Route path="/" exact element={<Main/>} />} */}
			<Route path="/signup" exact element={<SignUp/>} />
			<Route path="/login" exact element={<Login/>} /> 
			{user && <Route path="/main" exact element={<Main/>} />}
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/dash" element={<Dashboard />} />
			<Route path="/about" element={<About/>} />
			<Route path="/comment" element={<Comment />} />
			<Route path="/analytics" element={<Analytics />} />
			<Route path="/product" element={<Product/>} />
			<Route path="/productlist" element={<ProductList />} />
			<Route path="/details" element={<Userdetails/>}/>
			<Route path="/create" element={<Create/>}/>
			<Route path="/update/:id" element={<Update/>}/>
			<Route path="/read/:id" element={<Read/>}/>
			<Route path="/navbar" element={<Navbar/>}/>

			</Routes>
		</BrowserRouter>
	);
}

export default App;