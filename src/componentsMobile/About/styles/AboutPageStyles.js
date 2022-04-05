import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	main: {
		// overflow: "auto",
		paddingTop: "5%",
		width: "100%",
		// position: "absolute",
		// top: "3%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
	},
	greysSection: {
		// height: "100%",
		width: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: "10%",
	},
	photoContainer: {
		height: "100%",
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "flex-end",
		paddingLeft: "0px !important",
		paddingRight: "0px !important",
		marginTop: "23%",
	},
	jacobPhotoContainer: {
		backgroundImage: "",
	},
	photo: {
		height: "auto",
		width: "100%",
	},
	descriptionContainer: {
		height: "100%",
		width: "98%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		paddingLeft: "0px !important",
		textAlign: "justify",
		marginTop: "5%",
		padding: "5% 0 10%",
		// paddingRight: "150px !important",
	},
	description: {
		color: "white",
	},
}));
