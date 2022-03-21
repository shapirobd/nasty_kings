import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	main: {
		height: "77%",
		marginTop: "21%",
		width: "100%",
		// position: "absolute",
		// backgroundColor: "#EBDFCE",
	},
	homeMain: {
		// height: "77%",
		// marginTop: "21%",
		width: "100%",
		// position: "absolute",
		// backgroundColor: "#EBDFCE",
	},
	innerDiv: {
		height: "100%",
		paddingTop: "13%",
		display: "flex",
		flexDirection: "column",
		// justifyContent: "space-evenly",
		alignItems: "center",
	},
	showsHeader: {
		paddingBottom: "10%",
		fontWeight: "bold",
		color: "white",
		fontSize: "2.125rem",
		margin: "0",
		// marginBottom: "30px",
	},
	homeShowsHeader: {
		// paddingBottom: "10%",
		fontWeight: "bold",
		color: "white",
		fontSize: "2.125rem",
		marginBottom: "30px",
	},
}));
