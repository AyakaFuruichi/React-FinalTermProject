import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Create from "./components/Create";
import Update from "./components/Update";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/create" element={<Create />}></Route>
				<Route path="/edit/:id" element={<Update />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
