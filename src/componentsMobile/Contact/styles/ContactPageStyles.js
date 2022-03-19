import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	main: {
		height: "90%",
		width: "100%",
		position: "absolute",
		color: "white",
		// marginTop: "10%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
	email: {
		marginTop: "2%",
	},
	link: {
		textDecoration: "none",
		color: "#ffa900",
		textUnderlinePosition: "none",
	},
	linkContainer: {
		paddingTop: "3%",
	},
	button: {
		color: "#ffa900",
	},
}));
