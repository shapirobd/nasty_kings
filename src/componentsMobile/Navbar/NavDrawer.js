import React, { useState } from "react";
import NavOptionMobile from "./NavOptionMobile";
import { SocialIcon } from "react-social-icons";
import MenuIcon from "@material-ui/icons/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Box, Drawer, Divider, IconButton, List } from "@mui/material";
import { useStyles } from "./styles/NavDrawerStyles";

const NavDrawer = ({ options, currentPage, handlePageChange }) => {
	const classes = useStyles();

	const [isHoveredIG, setIsHoveredIG] = useState(false);
	const [isHoveredSP, setIsHoveredSP] = useState(false);
	const [isHoveredYT, setIsHoveredYT] = useState(false);
	const [isHoveredCRT, setIsHoveredCRT] = useState(false);

	const [state, setState] = React.useState({
		top: false,
	});

	const toggleDrawer = (anchor) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({ ...state, [anchor]: !state[anchor] });
	};

	const list = (anchor) => (
		<Box
			sx={{ auto: 250 }}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
			className={classes.drawer}
		>
			<List className={classes.mobileNavOptions}>
				{/* <div className={classes.mobileNavOptions}> */}
				{options.map((option) => (
					<NavOptionMobile
						option={option}
						key={option.text}
						handlePageChange={handlePageChange}
						currentPage={currentPage}
					/>
				))}
				{/* </div> */}
			</List>
			<Divider />
			<List className={classes.socials}>
				<SocialIcon
					url="https://www.instagram.com/greylanhallandthenastykings/"
					bgColor="black"
					fgColor={isHoveredIG ? "#C02E97" : "white"}
					// onMouseEnter={() => setIsHoveredIG(true)}
					// onMouseLeave={() => setIsHoveredIG(false)}
					target="_blank"
				/>
				<SocialIcon
					url="https://open.spotify.com/artist/3cyyYuJombwLHQ8TjGPm8M"
					bgColor="black"
					fgColor={isHoveredSP ? "#1BD760" : "white"}
					// onMouseEnter={() => setIsHoveredSP(true)}
					// onMouseLeave={() => setIsHoveredSP(false)}
					target="_blank"
				/>
				<SocialIcon
					url="https://www.youtube.com/channel/UCiY5ngsVEEVbGyGuUfliEFQ/featured"
					bgColor="black"
					fgColor={isHoveredYT ? "#ff0200" : "white"}
					// onMouseEnter={() => setIsHoveredYT(true)}
					// onMouseLeave={() => setIsHoveredYT(false)}
					target="_blank"
				/>
				{/* <Link
					to="#"
					style={{
						display: "flex",
						alignItems: "center",
						marginLeft: "9px",
					}}
				>
					<FontAwesomeIcon
						icon="fa-solid fa-cart-shopping"
						size="lg"
						color={isHoveredCRT ? "#ffa900" : "white"}
						// onMouseEnter={() => setIsHoveredCRT(true)}
						// onMouseLeave={() => setIsHoveredCRT(false)}
					/>
				</Link> */}
			</List>
		</Box>
	);

	return (
		<div>
			<React.Fragment>
				<IconButton
					edge="start"
					className={classes.menuButton}
					color="inherit"
					aria-label="open drawer"
					onClick={toggleDrawer("top")}
				>
					<MenuIcon />
				</IconButton>
				<Drawer
					anchor={"top"}
					open={state["top"]}
					onClose={toggleDrawer("top", false)}
				>
					{list("top")}
				</Drawer>
			</React.Fragment>
		</div>
	);
};

export default NavDrawer;
