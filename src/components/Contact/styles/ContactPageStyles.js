import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	main: {
		height: "77%",
		width: "100%",
		// position: "absolute",
		color: "white",
		margin: "21% 0 14%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		overflow: "hidden",
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
