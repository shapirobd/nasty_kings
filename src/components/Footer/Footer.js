import React, { useState } from "react";
import { useStyles } from "./styles/FooterStyles";
import { Typography } from "@mui/material";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
	const classes = useStyles();

	const [isHoveredIG, setIsHoveredIG] = useState(false);
	const [isHoveredSP, setIsHoveredSP] = useState(false);
	const [isHoveredYT, setIsHoveredYT] = useState(false);

	return (
		<div className={classes.footer}>
			<div className={classes.innerDiv}>
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
				</div>
				<Typography sx={{ color: "white" }} variant="caption">
					© 2023 Greylan Hall and The Nasty Kings
				</Typography>
			</div>
		</div>
	);
};

export default Footer;
