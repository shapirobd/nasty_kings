import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	main: {
		// height: "77%",
		// maxHeight: "100%",
		display: "flex",
		flexDirection: "column",
		// marginTop: "21%",
		padding: "0 5%",
		width: "90%",
		// position: "absolute",
		// backgroundColor: "#EBDFCE",
	},
	homeMain: {
		// height: "77%",
		padding: "0 2%",
		width: "96%",
		// position: "absolute",
		// backgroundColor: "#EBDFCE",
	},
	innerDiv: {
		height: "100%",
		padding: "13% 1%",
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
	prevShowsHeader: {
		marginTop: "80px"
	}
}));
