import "./App.css";
import "./index.css";
import React, { useState } from "react";
import NavBar from "./components/Navbar/NavBar";
import NavBarMobile from "./componentsMobile/Navbar/NavBarMobile";
import Router from "./Router";
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

	return (
		<ThemeProvider theme={theme}>
			<div
				className={width <= 599 ? classes.mobileApp : classes.app}
				style={{ fontFamily: "Mukta" }}
			>
				{width <= 599 ? (
					<NavBarMobile
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
					/>
				) : (
					<NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
				)}
				<Router mobile={width <= 599} />
			</div>
		</ThemeProvider>
	);
}

export default App;
