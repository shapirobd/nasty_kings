import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	main: {
		width: "100vw",
		height: "100vh",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
	},
	logo: {
		height: "75vh",
		borderRadius: "50%",
	},
}));
