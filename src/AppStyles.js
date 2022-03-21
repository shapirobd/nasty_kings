import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	app: {
		textAlign: "center",
		backgroundColor: "#000",
		minHeight: "100vh",
		overflow: "auto",
		position: "relative",
	},
	mobileApp: {
		textAlign: "center",
		backgroundColor: "#000",
		height: "90.3vh",
		overflow: "auto",
		position: "relative",
	},
}));
