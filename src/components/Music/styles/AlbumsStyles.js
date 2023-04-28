import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	albumsHeader: {
		color: "white",
		fontWeight: "bold",
		marginBottom: "30px",
	},
	albumsContainer: {
		margin: "30px 0 40px",
		display: "flex",
		justifyContent: "center",
	},
}));
