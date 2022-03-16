import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage.js";
import ShowsPage from "./components/Shows/ShowsPage.js";
import MusicPage from "./components/Music/MusicPage.js";
import MerchPage from "./components/Merch/MerchPage.js";
import AboutPage from "./components/About/AboutPage.js";
import ContactPage from "./components/Contact/ContactPage.js";
import LandingScreen from "./components/Home/LandingScreen.js";

const Router = () => {
	return (
		<Routes>
			<Route
				exact
				path="/"
				element={
					<>
						<LandingScreen />
						<HomePage />
					</>
				}
			/>
			<Route exact path="/shows" element={<ShowsPage />} />
			<Route exact path="/music" element={<MusicPage />} />
			<Route exact path="/merch" element={<MerchPage />} />
			<Route exact path="/about" element={<AboutPage />} />
			<Route exact path="/contact" element={<ContactPage />} />
		</Routes>
	);
};

export default Router;
