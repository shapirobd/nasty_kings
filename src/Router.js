import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage.js";
import ShowsPage from "./components/Shows/ShowsPage.js";
import MusicPage from "./components/Music/MusicPage.js";
import MerchPage from "./components/Merch/MerchPage.js";
import AboutPage from "./components/About/AboutPage.js";
import ContactPage from "./components/Contact/ContactPage.js";
import GalleryPage from "./components/Gallery/GalleryPage.js";
import LandingScreen from "./components/Home/LandingScreen.js";
import BlockQuote from "./components/Home/BlockQuote.js";
import HomePageMobile from "./componentsMobile/Home/HomePageMobile.js";
import ShowsPageMobile from "./componentsMobile/Shows/ShowsPageMobile.js";
import MusicPageMobile from "./componentsMobile/Music/MusicPageMobile.js";
import MerchPageMobile from "./componentsMobile/Merch/MerchPageMobile.js";
import AboutPageMobile from "./componentsMobile/About/AboutPageMobile.js";
import ContactPageMobile from "./componentsMobile/Contact/ContactPageMobile.js";
import GalleryPageMobile from "./componentsMobile/Gallery/GalleryPageMobile.js";
import LandingScreenMobile from "./componentsMobile/Home/LandingScreenMobile.js";
import BlockQuoteMobile from "./componentsMobile/Home/BlockQuoteMobile.js";
import ScrollToTop from "./ScrollToTop";

const Router = ({ mobile }) => {
	return (
		<Routes>
			<Route
				exact
				path="/"
				element={
					<>
						{mobile ? <LandingScreenMobile /> : <LandingScreen />}
						{mobile ? <BlockQuoteMobile /> : <BlockQuote />}
						{mobile ? <HomePageMobile /> : <HomePage />}
					</>
				}
			/>
			<Route
				exact
				path="/shows"
				element={mobile ? <ShowsPageMobile /> : <ShowsPage />}
			/>
			<Route
				exact
				path="/music"
				element={mobile ? <MusicPageMobile /> : <MusicPage />}
			/>
			<Route
				exact
				path="/merch"
				element={mobile ? <MerchPageMobile /> : <MerchPage />}
			/>
			<Route
				exact
				path="/about"
				element={mobile ? <AboutPageMobile /> : <AboutPage />}
			/>
			<Route
				exact
				path="/contact"
				element={mobile ? <ContactPageMobile /> : <ContactPage />}
			/>
			<Route
				exact
				path="/gallery"
				element={mobile ? <GalleryPageMobile /> : <GalleryPage />}
			/>
		</Routes>
	);
};

export default Router;
