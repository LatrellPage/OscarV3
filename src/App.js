import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { NavProvider } from "./context/NavContext";
import MyRoutes from "./Routes";

const App = () => {
	return (
		<Router>
			<NavProvider>
				<MyRoutes />
			</NavProvider>
		</Router>
	);
};

export default App;
