import React, { useEffect } from "react";
import { Typography, Grid } from "@material-ui/core";
import { useStyles } from "./styles/SinglesStyles";
import Single from "./Single";
import { getSingleImages } from "../../helpers";

const Singles = ({ singleList, setSingleList, singleArtLoaded, setSingleArtLoaded, fromHome }) => {
	const classes = useStyles();
	const colWidth = singleList.length === 3 ? 4 : 6;

	useEffect(async () => {
		if (!singleArtLoaded) {
			// getSingleImages(singleList, setSingleList, setSingleArtLoaded);
		}
	}, [singleArtLoaded]);

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
