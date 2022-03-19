import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	main: {
		width: "100vw",
		height: "max-content",
		// minHeight: "100vh",
		position: "absolute",
		paddingTop: "10%",
		display: "flex",
		alignItems: "center",
	},
	grid: {
		paddingLeft: "2%",
		paddingRight: "2%",
	},
}));
