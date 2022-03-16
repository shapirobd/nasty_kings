import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	main: {
		display: "flex",
		justifyContent: "center",
	},
	card: {
		maxWidth: "100% !important",
		width: "100%",
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
}));
