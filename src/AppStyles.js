import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	app: {
		textAlign: "center",
		backgroundColor: "#000",
		minHeight: "100vh",
		overflow: "auto",
		position: "relative",
		display: "flex",
		flexDirectiion: "column",
		justifyContent: "space-between",
	},
	mobileApp: {
		textAlign: "center",
		backgroundColor: "#000",
		height: "100vh",
		overflow: "auto",
		position: "relative",
		margin: "0 10px",
		// maxWidth: "1080px",
		// marginTop: "20%",
		// display: "flex",
	},
}));
