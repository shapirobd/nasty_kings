import * as React from "react";
import { useStyles } from "./styles/ShowsTableStyles";
import { Typography } from "@mui/material";

const ShowItemMobile = ({ show }) => {
	const classes = useStyles();

	return (
		<div className={classes.show}>
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

export default ShowItemMobile;
