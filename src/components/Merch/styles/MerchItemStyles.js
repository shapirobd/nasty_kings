import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	main: {
		display: "flex",
		justifyContent: "center",
	},
	card: {
		maxWidth: "100% !important",
		width: "75%",
		marginBottom: "8%"
	},
	content: {
		backgroundColor: "#1e1e1e",
		color: "white",
		textAlign: "left",
	},
	actions: {
		backgroundColor: "#1e1e1e",
		color: "white",
		display: "flex",
		justifyContent: "right",
		padding: "16px !important",
	},
	venmo_logo: {
		width: "50px",
		height: "50px"
	}
}));
