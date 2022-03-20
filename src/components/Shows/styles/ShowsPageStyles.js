import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	main: {
		height: "77%",
		marginTop: "150px",
		width: "100%",
		// position: "absolute",
		// backgroundColor: "#EBDFCE",
	},
	homeMain: {
		// height: "77%",
		marginTop: "30px",
		marginBottom: "140px",
		width: "100%",
		// position: "absolute",
		// backgroundColor: "#EBDFCE",
	},
	innerDiv: {
		height: "100%",
		// paddingTop: "13%",
		display: "flex",
		flexDirection: "column",
		// justifyContent: "space-evenly",
		alignItems: "center",
	},
	showsHeader: {
		paddingBottom: "40px",
		fontWeight: "bold",
	},
}));
