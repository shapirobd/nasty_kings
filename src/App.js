import "./App.css";
import "./index.css";
import React, { useState } from "react";
import NavBar from "./components/Navbar/NavBar";
import Router from "./Router";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

const theme = createTheme({
	typography: {
		fontFamily: ["Mukta"].join(","),
	},
});

function App() {
	const [currentPage, setCurrentPage] = useState("");

	return (
		<ThemeProvider theme={theme}>
			<div className="App" style={{ fontFamily: "Mukta" }}>
				<NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
				<Router />
			</div>
		</ThemeProvider>
	);
}

export default App;
