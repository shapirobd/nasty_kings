import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	footer: {
		width: "100%",
		backgroundColor: "black",
		// position: "absolute",
		// bottom: "0%",
		height: "10%",
		display: "flex",
		justifyContent: "center",
		margin: "8% 0",
	},
	innerDiv: {
		width: "90%",
		paddingBottom: "3%",
	},
}));
