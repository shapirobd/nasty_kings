import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	main: {
		height: "100%",
		width: "100%",
		position: "absolute",
	},
	greysSection: {
		height: "100%",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "flex-end",
	},
	photoContainer: {
		height: "100%",
		display: "flex",
		justifyContent: "left",
		alignItems: "flex-end",
		paddingLeft: "0px !important",
		paddingRight: "0px !important",
	},
	photo: {
		height: "92%",
	},
	descriptionContainer: {
		height: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		paddingLeft: "0px !important",
		paddingRight: "150px !important",
	},
	description: {
		color: "white",
	},
}));
