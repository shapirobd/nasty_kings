import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	albumsHeader: {
		color: "white",
		fontWeight: "bold",
		// marginBottom: "30px",
	},
	albumsContainer: {
		margin: "30px 0 60px",
		display: "flex",
		justifyContent: "center",
	},
	loadingWheelContainer: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
	},
}));
