import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	show: {
		backgroundColor: "white",
		paddingRight: "20px",
		marginBottom: "50px",
		height: "fit-content",
		boxShadow: "0 0 20px 1px rgb(0 0 0 / 10%)",
		// borderRadius: "10px",
		display: "flex",
		justifyContent: "left",
		textAlign: "left",
	},
	left: {
		display: "flex",
		flexDirection: "column",
		justfyContent: "start",
	},
	soloShow: {
		textAlign: "center",
	},
	date: {
		height: "80px",
		width: "80px",
		backgroundColor: "black",
		// borderRadius: "10px",
		padding: "10px",
		display: "relative",
	},
	weekDay: {
		height: "30%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		color: "white",
		fontSize: "20px",
	},
	day: {
		height: "60%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		color: "white",
		fontSize: "50px",
	},
	details: {
		padding: "8px 20px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
	},
	fullDate: {
		fontSize: "14pt",
	},
	venue: {
		fontSize: "20pt",
		fontWeight: "bold",
	},
	address: {
		fontSize: "14pt",
		lineHeight: "125%",
	},
	venueLink: {
		textDecoration: "none",
		color: "blue",
		fontSize: "14pt",
		lineHeight: "225%",
	},
}));
