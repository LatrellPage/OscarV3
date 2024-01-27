import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import BuildPCPage from "./views/BuildPC/BuildPCPage";
import SearchPage from "./views/SearchFlow/SearchPage";
import BrowseTutorialsPage from "./views/TutorialFLow/BrowseTutorialPage.";
import EnlargedVidTutorialPage from "./views/TutorialFLow/EnlargedVidTutorialPage.";

const MyRoutes = () => {
	return (
			<Routes>
				<Route exact path="/" element={<LandingPage />} />
				<Route path="/build-pc" element={<BuildPCPage />} />
				<Route path="/search" element={<SearchPage />} />
				<Route path="/tutorials" element={<BrowseTutorialsPage />} />
				<Route
					path="/tutorial/watch"
					element={<EnlargedVidTutorialPage />}
				/>
			</Routes>
	);
};

export default MyRoutes;
