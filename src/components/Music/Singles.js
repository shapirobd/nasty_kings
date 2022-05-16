import React from "react";
import { Typography, Grid } from "@material-ui/core";
import logo_bw from "../../images/logo_bw.png";
import { useStyles } from "./styles/SinglesStyles";
import Single from "./Single";

const Singles = ({ singleList, fromHome }) => {
	const classes = useStyles();
	const colWidth = singleList.length === 3 ? 4 : 6;

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Typography
				variant="h2"
				className={classes.singlesHeader}
				// sx={{ fontWeight: "bold" }}
			>
				Latest Singles
			</Typography>
			<Grid container spacing={5} className={classes.albumsContainer}>
				{singleList.map((s) => (
					<Single
						key={s.name}
						coverArt={s.coverArt}
						name={s.name}
						url={s.url}
						fromHome={fromHome}
						code={s.code}
						colWidth={colWidth}
					/>
				))}
			</Grid>
		</div>
	);
};

export default Singles;
