import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	main: {
		width: "90%",
		height: "90vh",
		margin: "0 0 20% 0",
		padding: "0 5%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		backgroundPositionX: "70%"
	},
	logo: {
		width: "100%",
		borderRadius: "50%",
	},
}));
