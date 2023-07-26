import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	singlesHeader: {
		color: "white",
		fontWeight: "bold",
		marginBottom: "30px",
	},
	albumsContainer: {
		margin: "30px 0",
	},
	loadingWheelContainer: {
		width: "100%",
		display: "flex",
		justifyContent: "center"
	}
}));
