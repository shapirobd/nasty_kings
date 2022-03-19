import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	navLink: {
		display: "inline-block",
		color: "#fff",
		textDecoration: "none",
		width: "13%",
		height: "90%",
		justifyContent: "center",
		"& button": {
			"&:hover": {
				color: "rgb(255,169,0)",
				transition: "color 1s",
				transitionDuration: "0.3s",
			},
			"&:not(:hover)": {
				color: "white",
				transition: "color 1s",
				transitionDuration: "0.3s",
			},
		},
	},
	activeNavLink: {
		display: "inline-block",
		color: "#fff",
		textDecoration: "none",
		width: "13%",
		height: "90%",
		justifyContent: "center",
		"& button": {
			color: "rgb(255,169,0)",
		},
	},
	button: {
		fontSize: "16pt",
		fontWeight: "bold",
		transition: "font-size 1s",
		transitionDuration: "0.3s",
	},
}));
