import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	main: {
		width: "100%",
		height: "25vh",
		marginTop: "165px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		overflowY: "hidden",
	},
	logo: {
		height: "75vh",
		borderRadius: "50%",
	},
}));
