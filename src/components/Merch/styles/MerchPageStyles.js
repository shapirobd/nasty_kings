import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	main: {
		width: "100%",
		// height: "max-content",
		// minHeight: "100vh",
		// position: "absolute",
		paddingTop: "8%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		marginBottom: "5%"
	},
	venmo_qr: {
		width: "277px",
		height: "280px",
		borderRadius: "5%",
		marginBottom: "4%"
	},
	grid: {
		minHeight: "100%",
		paddingLeft: "2%",
		paddingRight: "2%",
	},
}));
