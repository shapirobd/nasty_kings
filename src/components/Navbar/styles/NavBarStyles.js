import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
	},
	appBar: {
		backgroundColor: "black",
		zIndex: theme.zIndex.drawer + 1,
		boxShadow: "none",
		position: "fixed",
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	homeLink: {
		position: "absolute",
		left: "2%",
		top: "-2%",
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
	navOptions: {
		width: "60%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	mobileNavOptions: {
		width: "50%",
		float: "right",
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
	},
	socials: {
		position: "absolute",
		right: "2%",
		top: "15%",
		display: "flex",
	},
}));
