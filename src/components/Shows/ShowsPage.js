import React from "react";
import { useStyles } from "./styles/ShowsPageStyles";
import ShowItem from "./ShowItem";

const ShowsPage = () => {
	const classes = useStyles();

	function createData(venue, address, date, time, venueLink, ticketLink) {
		return { venue, address, date, time, venueLink, ticketLink };
	}

	const shows = [
		createData(
			"Nash Street Tavern (Solo Show)",
			"250 S. Nash Sreet Hillsborough, NC",
			{ month: "May", day: "26", year: "2022", weekDay: "THURSDAY" },
			"6:00 PM",
			"https://www.facebook.com/NashStreetTavern/",
			"Free"
		),
		createData(
			"Highland Brewing",
			"12 Old Charlotte Highway, Suite 200 Asheville, NC",
			{ month: "June", day: "11", year: "2022", weekDay: "SATURDAY" },
			"6:00 PM",
			"https://highlandbrewing.com/",
			"Free"
		),
	];

	return (
		<div className={classes.main}>
			<div className={classes.innerDiv}>
				{shows.map((show) => (
					<ShowItem show={show} />
				))}
			</div>
		</div>
	);
};

export default ShowsPage;
