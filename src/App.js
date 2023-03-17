import "./App.css";
import Home from "./pages/home";
import { Routes, Route, HashRouter } from "react-router-dom";
import Root from "./routes/root";
import AboutIndex from "./pages/about";
import ErrorPage from "./pages/errorPage";
import Menu from "./pages/menu";

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Root />}>
					<Route index element={<Home />} />
					<Route path="about" element={<AboutIndex />} />
					<Route path="menu" element={<Menu />} />
					<Route path="*" element={<ErrorPage />} />
				</Route>
			</Routes>
		</HashRouter>
	);
}

export default App;
