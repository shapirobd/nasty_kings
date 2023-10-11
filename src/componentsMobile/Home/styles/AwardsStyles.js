import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	main: {
		width: "90%",
		height: "50vh",
		margin: "10% 0 40% 0",
		padding: "0 5%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
	},
	logo: {
		width: "300px",
		height: "300px",
		borderRadius: "50%",
	},
}));
