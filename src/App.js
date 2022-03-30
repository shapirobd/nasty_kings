import "./App.css";
import "./index.css";
import React, { useState } from "react";
import NavBar from "./components/Navbar/NavBar";
import NavBarMobile from "./componentsMobile/Navbar/NavBarMobile";
import Router from "./Router";
import FooterMobile from "./componentsMobile/Footer/FooterMobile";
import Footer from "./components/Footer/Footer";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import useWindowDimensions from "./customHooks/getWindowDimensions";
import { useStyles } from "./AppStyles";

const theme = createTheme({
	typography: {
		fontFamily: ["Mukta"].join(","),
	},
});

function App() {
	const { width } = useWindowDimensions();
	const [currentPage, setCurrentPage] = useState("");
	const classes = useStyles();

	const height = window.innerHeight;

	return (
		<ThemeProvider theme={theme}>
			<div
				className={width <= 760 ? classes.mobileApp : classes.app}
				style={
					width <= 760
						? { fontFamily: "Mukta", height: height }
						: { fontFamily: "Mukta" }
				}
			>
				{width <= 760 ? (
					<NavBarMobile
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
					/>
				) : (
					<NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
				)}
				{width <= 760 ? (
					<div id="main-container" className={classes.mainContainer}>
						<div className={classes.innerMainContainer}>
							<Router mobile={width <= 760} />
							{width <= 760 ? <FooterMobile /> : <Footer />}
						</div>
					</div>
				) : (
					<>
						<Router mobile={width <= 760} />
						{width <= 760 ? <FooterMobile /> : <Footer />}
					</>
				)}
			</div>
		</ThemeProvider>
	);
}

export default App;
