import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	main: {
		// overflow: "auto",
		paddingTop: "6%",
		width: "100%",
		// height: "80vh",
		// position: "absolute",
		// top: "3%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: "6%",
	},
	greysSection: {
		height: "84vh",
		width: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
	},
	photoContainer: {
		height: "100%",
		width: "90%",
		display: "flex",
		justifyContent: "center",
		alignItems: "flex-end",
		paddingLeft: "0px !important",
		paddingRight: "0px !important",
		marginTop: "23%",
	},
	photo: {
		height: "100%",
		width: "auto",
	},
	descriptionContainer: {
		// height: "100%",
		width: "90%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		// paddingLeft: "0px !important",
		textAlign: "justify",
		marginTop: "5%",
		padding: "5% 7% 10% 0",
		// paddingRight: "150px !important",
	},
	description: {
		color: "white",
	},
}));
