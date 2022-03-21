import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	footer: {
		width: "100%",
		backgroundColor: "black",
		// position: "absolute",
		// bottom: "0%",
		display: "flex",
		justifyContent: "center",
		margin: "30px 0 80px",
	},
	innerDiv: {
		width: "90%",
		paddingBottom: "3%",
	},
}));
