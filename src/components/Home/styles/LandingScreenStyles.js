import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	main: {
		width: "100%",
		height: "100vh",
		display: "flex",
		justifyContent: "center",
		alignItems: "end",
		backgroundSize: "contain",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		overflowY: "hidden",
	},
	image: {
		width: "100%",
		height: "92%",
		display: "flex",
		justifyContent: "center",
		alignItems: "end",
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
