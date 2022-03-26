import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	main: {
		// height: "100%",
		width: "100%",
		// position: "absolute",
		marginBottom: "20px",
	},
	homeMain: {
		width: "100%",
		// position: "absolute",
		// marginBottom: "90px",
	},
	innerDiv: {
		padding: "0 4%",
		marginTop: "150px",
	},
	homeInnerDiv: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
}));
