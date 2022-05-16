import React from "react";
import { useStyles } from "./styles/MerchPageStyles";
import { Grid, Paper, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import MerchItem from "./MerchItem";
import venmo_qr from '../../images/venmo_qr.png';

const MerchPage = () => {
	const classes = useStyles();

	return (
		<Box xs={{ flexGrow: 1 }} className={classes.main}>
			<img className={classes.venmo_qr} src={venmo_qr} alt={venmo_qr} />
			<Grid container spacing={2} className={classes.grid}>
				<MerchItem
					title="Test title 1"
					description="Test description 1"
					price="$24.99"
				/>
				<MerchItem
					title="Test title 2"
					description="Test description 2"
					price="$24.99"
				/>
				<MerchItem
					title="Test title 3"
					description="Test description 3"
					price="$24.99"
				/>
				<MerchItem
					title="Test title 4"
					description="Test description 4"
					price="$24.99"
				/>
				<MerchItem
					title="Test title 5"
					description="Test description 5"
					price="$24.99"
				/>
				<MerchItem
					title="Test title 6"
					description="Test description 6"
					price="$24.99"
				/>
			</Grid>
		</Box>
	);
};

export default MerchPage;
