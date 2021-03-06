import * as React from "react";
import { useStyles } from "./styles/ShowsItemStyles";
import { Typography } from "@mui/material";
import solo_show from "../../images/solo_show_sm.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const ShowItem = ({ show, width }) => {
	const classes = useStyles();

	library.add(faArrowUpRightFromSquare);

	return (
		<div className={width === "lg" ? classes.showLg : classes.showMd}>
			{show.solo ? (
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
			) : null}
			<div className={classes.date}>
				<div className={classes.weekDay}>{show.date.weekDay}</div>
				<div className={classes.day}>{show.date.day}</div>
			</div>
			<div className={classes.details}>
				<div>
					<div className={classes.fullDate}>
						{show.date.month} {show.date.day}, {show.date.year}{" "}
						{show.time ? `- ${show.time}` : ""}
					</div>
					<div className={classes.venue}>{show.venue}</div>
					<div className={classes.address}>
						<i>{show.address + " " + show.city + ", " + show.state }</i>
					</div>
				</div>
				<div className={classes.showLinks}>
					<a
						href={show.venueLink}
						target="_blank"
						className={classes.venueLink}
					>
						Visit Site
						<FontAwesomeIcon
							className={classes.newTabIcon}
							icon="fa-solid fa-arrow-up-right-from-square"
						/>
					</a>
					{show.ticketLink &&
						<a href={show.ticketLink}
						target="_blank"
						className={classes.ticketBtn}
						>
							Buy Tickets
						</a>
					}
				</div>
			</div>
		</div>
	);
};

export default ShowItem;
