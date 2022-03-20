import React, { useState } from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { useStyles } from "./styles/NavBarStyles";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart, fa2 } from "@fortawesome/free-solid-svg-icons";
import NavDrawer from "./NavDrawer";

const NavBarMobile = ({ currentPage, setCurrentPage }) => {
	const classes = useStyles();
	// const navigate = useNavigate();
	// const location = useLocation();

	const options = [
		{ route: "/", text: "HOME" },
		{ route: "/music", text: "MUSIC" },
		// { route: "/merch", text: "MERCH" },
		{ route: "/shows", text: "SHOWS" },
		{ route: "/about", text: "ABOUT" },
		{ route: "/contact", text: "CONTACT" },
	];

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	library.add(faShoppingCart, fa2);

	return (
		<AppBar position="fixed" className={classes.appBar}>
			<Toolbar classes={{ root: classes.root }}>
				<NavDrawer
					options={options}
					currentPage={currentPage}
					handlePageChange={handlePageChange}
				/>
			</Toolbar>
		</AppBar>
	);
};

export default NavBarMobile;
