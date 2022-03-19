import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";
import logo from "../../images/logo_svg_2.png";
import { useStyles } from "./styles/NavBarStyles";
import NavOption from "./NavOption";
// import { Facebook, Instagram, YouTube } from "@mui/icons-material";
import { SocialIcon } from "react-social-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart, fa2 } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ currentPage, setCurrentPage }) => {
	const classes = useStyles();
	// const navigate = useNavigate();
	// const location = useLocation();
	const [isHoveredIG, setIsHoveredIG] = useState(false);
	const [isHoveredSP, setIsHoveredSP] = useState(false);
	const [isHoveredYT, setIsHoveredYT] = useState(false);
	// const [isHoveredCRT, setIsHoveredCRT] = useState(false);

	const options = [
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
		<div>
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar classes={{ root: classes.root }}>
					<Link
						to="/"
						className={`${classes.homeLink}`}
						onClick={() => setCurrentPage("")}
					>
						<img className={classes.logo} src={logo} alt={logo} />
					</Link>

					<div className={classes.navOptions}>
						{options.map((option) => (
							<NavOption
								option={option}
								key={option.text}
								handlePageChange={handlePageChange}
								currentPage={currentPage}
							/>
						))}
					</div>
					<div className={classes.socials}>
						<SocialIcon
							url="https://www.instagram.com/greylanhallandthenastykings/"
							bgColor="black"
							fgColor={isHoveredIG ? "#C02E97" : "white"}
							onMouseEnter={() => setIsHoveredIG(true)}
							onMouseLeave={() => setIsHoveredIG(false)}
							target="_blank"
						/>
						<SocialIcon
							url="https://open.spotify.com/artist/3cyyYuJombwLHQ8TjGPm8M"
							bgColor="black"
							fgColor={isHoveredSP ? "#1BD760" : "white"}
							onMouseEnter={() => setIsHoveredSP(true)}
							onMouseLeave={() => setIsHoveredSP(false)}
							target="_blank"
						/>
						<SocialIcon
							url="https://www.youtube.com/channel/UCiY5ngsVEEVbGyGuUfliEFQ/featured"
							bgColor="black"
							fgColor={isHoveredYT ? "#ff0200" : "white"}
							onMouseEnter={() => setIsHoveredYT(true)}
							onMouseLeave={() => setIsHoveredYT(false)}
							target="_blank"
						/>
						{/* <div style={{ height: "50px", display: "inline-block" }}> */}
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
								onMouseEnter={() => setIsHoveredCRT(true)}
								onMouseLeave={() => setIsHoveredCRT(false)}
							/>
						</Link> */}
						{/* </div> */}
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default NavBar;
