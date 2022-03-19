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

const MerchItemMobile = ({ title, description, imgPath, altText, price }) => {
	const classes = useStyles();
	const [isHovered, setIsHovered] = useState(false);

	library.add(faCartPlus);

	return (
		<Grid item xs={4} className={classes.main}>
			<Card variant="outlined" sx={{ maxWidth: 345 }} className={classes.card}>
				<CardMedia
					component="img"
					height="280"
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
					<Link to="#" className={classes.addToCartButton}>
						<FontAwesomeIcon
							icon="fa-solid fa-cart-plus"
							size="xl"
							color={isHovered ? "#1BD760" : "white"}
							onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}
						/>
					</Link>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default MerchItemMobile;
