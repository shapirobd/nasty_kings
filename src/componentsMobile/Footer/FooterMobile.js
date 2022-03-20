import React from "react";
import { useStyles } from "./styles/FooterStyles";
import { Typography } from "@mui/material";
import { SocialIcon } from "react-social-icons";

const FooterMobile = () => {
	const classes = useStyles();

	return (
		<div className={classes.footer}>
			<div className={classes.innerDiv}>
				<div className={classes.socials}>
					<SocialIcon
						url="https://www.instagram.com/greylanhallandthenastykings/"
						bgColor="black"
						fgColor="white"
						target="_blank"
					/>
					<SocialIcon
						url="https://open.spotify.com/artist/3cyyYuJombwLHQ8TjGPm8M"
						bgColor="black"
						fgColor="white"
						target="_blank"
					/>
					<SocialIcon
						url="https://www.youtube.com/channel/UCiY5ngsVEEVbGyGuUfliEFQ/featured"
						bgColor="black"
						fgColor="white"
						target="_blank"
					/>
				</div>
				<Typography sx={{ color: "white" }} variant="caption">
					© 2022, Greylan Hall and The Nasty Kings
				</Typography>
			</div>
		</div>
	);
};

export default FooterMobile;
