import * as React from "react";
import { useStyles } from "./styles/ShowsItemStyles";
import { Typography } from "@mui/material";
import solo_show from "../../images/solo_show_sm.png";

const ShowItem = ({ show }) => {
	const classes = useStyles();

	return (
		<div className={classes.show}>
			{show.solo && (
				<div className={classes.soloShow}>
					<div className={classes.soloShowLogo}>
						<b style={{ fontSize: "20px", margin: "0", lineHeight: "100%" }}>
							SOLO
						</b>
						<b style={{ fontSize: "20px", margin: "0", lineHeight: "100%" }}>
							SHOW
						</b>
					</div>
				</div>
			)}
			<div className={classes.date}>
				<div className={classes.weekDay}>{show.date.weekDay}</div>
				<div className={classes.day}>{show.date.day}</div>
			</div>
			<div className={classes.details}>
				<div>
					<div className={classes.fullDate}>
						{show.date.month} {show.date.day}, {show.date.year} - {show.time}
					</div>
					<div className={classes.venue}>{show.venue}</div>
					<div className={classes.address}>
						<i>{show.address}</i>
					</div>
				</div>
				<div>
					<a
						href={show.venueLink}
						target="_blank"
						className={classes.venueLink}
					>
						Visit Site
					</a>
				</div>
			</div>
		</div>
	);
};

export default ShowItem;
