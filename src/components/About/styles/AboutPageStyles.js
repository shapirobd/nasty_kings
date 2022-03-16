import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	main: {
		height: "100%",
		width: "100%",
		position: "absolute",
	},
	container: {
		height: "100%",
		display: "flex",
		justifyContent: "space-evenly",
		alignItems: "center",
	},
	item: {
		height: "100%",
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		paddingLeft: "0px !important",
		paddingRight: "0px !important",
	},
	photo: {
		height: "60%",
	},
	description: {
		color: "white",
	},
}));
