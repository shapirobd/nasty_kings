import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	drawer: {
		marginTop: "70px",
		backgroundColor: "black",
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	socials: {
		// position: "absolute",
		// right: "5%",
		top: "24%",
		float: "right",
		paddingRight: "26px !important",
		// right: "2%",
		// top: "15%",
		display: "flex",
		justifyContent: "right",
		paddingBottom: "18px !important",
		paddingRight: "22px !important",
	},
	mobileNavOptions: {
		width: "50%",
		paddingLeft: "26px !important",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-end",
		alignItems: "start",
	},
}));
