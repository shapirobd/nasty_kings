import React, { useState } from "react";
import {
	Grid,
	Card,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Button,
} from "@mui/material";
import { useStyles } from "./styles/MerchItemStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';
import venmo_logo from '../../images/venmo_logo_50.png'

const MerchItem = ({ title, description, imgPath, altText, price }) => {
	const classes = useStyles();
	const [isHovered, setIsHovered] = useState(false);

	library.add(faCartPlus);

	return (
		<Grid item xs={12} lg={6} xl={4} className={classes.main}>
			<Card variant="outlined" sx={{ maxWidth: 345 }} className={classes.card}>
				<CardMedia
					component="img"
					height="400"
					image={imgPath}
					alt={altText == undefined ? "" : altText}
				/>
				<CardContent className={classes.content}>
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<Typography gutterBottom variant="h5" component="div">
							{title}
						</Typography>
						<Typography gutterBottom variant="h5" component="div">
							{price}
						</Typography>
					</div>
					<Typography variant="body2">{description}</Typography>
				</CardContent>
				<CardActions className={classes.actions}>
					<a
						href="https://account.venmo.com/u/Greylanhallandthenastykings"
						className={classes.addToCartButton}
					>
						{/* <FontAwesomeIcon
							icon="fa-solid fa-cart-plus"
							size="xl"
							color={isHovered ? "#1BD760" : "white"}
							onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}
						/> */}
						{/* <SocialIcon
							url="https://account.venmo.com/u/Greylanhallandthenastykings"
							bgColor="black"
							fgColor="white"
							target="_blank"
						/> */}
						<img src={venmo_logo} className={classes.venmo_logo} />
					</a>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default MerchItem;
