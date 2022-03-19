import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	main: {
		height: "100%",
		width: "100%",
		position: "absolute",
		color: "white",
		marginTop: "0%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
	email: {
		marginTop: "15px",
	},
	link: {
		textDecoration: "none",
		color: "#ffa900",
		textUnderlinePosition: "none",
	},
	linkContainer: {
		paddingTop: "25px",
	},
	button: {
		color: "#ffa900",
	},
}));
