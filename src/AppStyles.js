import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	app: {
		textAlign: "center",
		backgroundColor: "#000",
		minHeight: "100vh",
		overflow: "auto",
		position: "relative",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
	},
	mobileApp: {
		textAlign: "center",
		backgroundColor: "#000",
		// height: "100vh",
		overflow: "hidden",
		position: "relative",
		// margin: "0 10px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
		// maxWidth: "1080px",
		// marginTop: "20%",
		// display: "flex",
	},
	mainContainer: {
		height: "90%",
		width: "100%",
		position: "absolute",
		bottom: "0",
		overflow: "auto",
		margin: "0 2%",
		display: "flex",
		justifyContent: "center",
	},
	innerMainContainer: {
		height: "fit-content",
		width: "96%",
		// margin: "0 2%",
	},
}));
