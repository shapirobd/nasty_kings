import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		display: "flex",
		flexDirection: "row",
		justifyContent: "left",
		// padding: "12px 34px",
		padding: "3% 8%",
	},
	appBar: {
		backgroundColor: "black",
		zIndex: theme.zIndex.drawer + 1,
		boxShadow: "none",
		position: "fixed",
		height: "10%",
	},
	homeLink: {
		top: "15%",
		left: "4%",
		position: "absolute",
	},
	logo: {
		height: "50px",
		margin: "4px 0 0 0",
		padding: "4px",
		borderRadius: "50%",
		filter:
			"invert(1%) sepia(1%) saturate(1%) hue-rotate(1deg) brightness(1000%) contrast(80%)",
		"&:hover": {
			filter: "none",
		},
	},
}));
