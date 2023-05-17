import React, { useState, useEffect } from "react";
import { useStyles } from "./styles/GalleryItemStyles";
import { ImageListItem, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

// const Item = styled(Paper)(({ theme }) => ({
// 	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
// 	...theme.typography.body2,
// 	padding: theme.spacing(1),
// 	textAlign: "center",
// 	color: theme.palette.text.secondary,
// }));

const GalleryItem = ({ image }) => {
	const classes = useStyles();

	return (
		<ImageListItem>
			<img src={image} loading="lazy"/>
		</ImageListItem>
	);
};

export default GalleryItem;
