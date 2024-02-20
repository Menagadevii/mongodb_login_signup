import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Main from "./Main";
import SignUp from "./SignUp";
import Login from "./Login";


function App() {
	const user = localStorage.getItem("token");

	return (
		<BrowserRouter>
		<Routes>
			{user && <Route path="/" exact element={<Main/>} />}
			<Route path="/signup" exact element={<SignUp/>} />
			<Route path="/login" exact element={<Login/>} /> 
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
		</BrowserRouter>
	);
}

export default App;