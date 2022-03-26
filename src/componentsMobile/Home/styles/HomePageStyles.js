import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	main: {
		// height: "80%",
		width: "100%",
		// position: "absolute",
		backgroundColor: "black",
	},
	homeSection: {
		minHeight: "100%",
		// paddingTop: "20%",
		// marginBottom: "20%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
}));
