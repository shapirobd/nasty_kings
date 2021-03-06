import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	show: {
		backgroundColor: "white",
		// paddingRight: "20px",
		marginBottom: "50px",
		height: "fit-content",
		width: "100%",
		boxShadow: "0 0 20px 1px rgb(0 0 0 / 10%)",
		// borderRadius: "10px",
		display: "flex",
		justifyContent: "left",
		textAlign: "left",
		position: "relative",
	},
	left: {
		display: "flex",
		flexDirection: "column",
		justfyContent: "start",
	},
	soloShow: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		height: "80px",
	},
	soloShowLogo: {
		width: "70px",
		height: "70px",
		backgroundColor: "#044692",
		borderRadius: "50%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		color: "white",
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
		padding: "8px 20px 20px 20px",
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
		lineHeight: "110%",
		marginTop: "5px",
	},
	address: {
		fontSize: "14pt",
		lineHeight: "125%",
		marginTop: "5px",
		marginBottom: "10px",
	},
	venueLink: {
		textDecoration: "none",
		color: "blue",
		fontSize: "14pt",
		// lineHeight: "225%",
		display: "flex",
		alignItems: "center",
	},
	newTabIcon: {
		marginLeft: "8px",
		height: "13px",
	},
	showLinks: {
		display: "flex",
		justifyContent: "space-between",
		width: "100%",
		marginTop: "5px"
	},
	ticketBtn: {
		position: "absolute",
		right: "18px",
		bottom: "10%",
		backgroundColor: "#DD0000",
		textDecoration: "none",
		padding: "6px 12px",
		borderRadius: "5px",
		color: "white",
		fontWeight: "bold",
	},
}));
