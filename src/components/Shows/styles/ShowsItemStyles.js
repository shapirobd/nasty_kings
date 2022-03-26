import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	show: {
		backgroundColor: "white",
		padding: "20px",
		marginBottom: "50px",
		height: "200px",
		width: "55%",
		boxShadow: "0 0 20px 1px rgb(0 0 0 / 10%)",
		borderRadius: "10px",
		display: "flex",
		justifyContent: "left",
		textAlign: "left",
		position: "relative",
	},
	soloShow: {
		position: "absolute",
		top: "20px",
		right: "20px",
		textAlign: "center",
	},
	soloShowLogo: {
		width: "70px",
		height: "70px",
		backgroundColor: "#044692",
		borderRadius: "50%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		color: "white",
	},
	date: {
		height: "200px",
		width: "200px",
		backgroundColor: "black",
		borderRadius: "10px",
		display: "relative",
	},
	weekDay: {
		height: "30%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		color: "white",
		fontSize: "33px",
	},
	day: {
		height: "60%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		color: "white",
		fontSize: "100px",
	},
	details: {
		padding: "0 20px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
	},
	fullDate: {
		fontSize: "18pt",
	},
	venue: {
		fontSize: "30pt",
		fontWeight: "bold",
	},
	address: {
		fontSize: "18pt",
	},
	venueLink: {
		textDecoration: "none",
		color: "blue",
		fontSize: "14pt",
		display: "flex",
		alignItems: "center",
	},
	newTabIcon: {
		marginLeft: "8px",
		height: "13px",
	},
}));
