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
		marginBottom: "10%",
	},
	jacobsSection: {
		height: "84vh",
		width: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: "10%",
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
	jacobPhotoContainer: {
		height: "100%",
		width: "90%",
		display: "flex",
		justifyContent: "center",
		alignItems: "flex-end",
	},
	photo: {
		height: "100%",
		width: "auto",
	},
	descriptionContainer: {
		width: "90%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "justify",
		marginTop: "5%",
		padding: "5% 7% 10% 0",
	},
	jacobsDescriptionContainer: {
		width: "90%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "justify",
		marginTop: "5%",
		padding: "5% 0% 10% 7",
	},
	description: {
		color: "white",
	},
}));
