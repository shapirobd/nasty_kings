import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useStyles } from "./styles/NavOptionStyles";

// Contains buttons for the top nav bar that allow the user to login/logout/register
const NavOption = ({ mobile, option, handlePageChange, currentPage }) => {
	const classes = useStyles();

	return (
		<Link
			to={option.route}
			className={
				currentPage === option.text ? classes.activeNavLink : classes.navLink
			}
		>
			<Button
				disableRipple
				className={classes.button}
				color="inherit"
				onClick={() => handlePageChange(option.text)}
			>
				{option.text}
			</Button>
		</Link>
	);
};

export default NavOption;
