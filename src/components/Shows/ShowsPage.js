import React from "react";
import { useStyles } from "./styles/ShowsPageStyles";
import ShowItem from "./ShowItem";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";

const ShowsPage = ({ fromHome = false }) => {
	const classes = useStyles();

	function createData(venue, address, date, time, venueLink, ticketLink, solo) {
		return { venue, address, date, time, venueLink, ticketLink, solo };
	}

	const shows = [
		createData(
			"Nash Street Tavern",
			"250 S. Nash Sreet Hillsborough, NC",
			{ month: "May", day: "26", year: "2022", weekDay: "THURSDAY" },
			"6:00 PM",
			"https://www.facebook.com/NashStreetTavern/",
			"Free",
			true
		),
		createData(
			"Highland Brewing",
			"12 Old Charlotte Highway, Suite 200 Asheville, NC",
			{ month: "June", day: "11", year: "2022", weekDay: "SATURDAY" },
			"6:00 PM",
			"https://highlandbrewing.com/",
			"Free"
		),
		createData(
			"Bullhorn Fest",
			"Shadowbox Studio, 2200-D Dominion St. Durham, NC",
			{ month: "September", day: "24", year: "2022", weekDay: "SATURDAY" },
			"",
			"https://bullhornarts.org/",
			"Free"
		),
		createData(
			"Local 506",
			"506 West Franklin Street Chapel Hill, NC 27516",
			{ month: "June", day: "17", year: "2022", weekDay: "FRIDAY" },
			"7:00 PM",
			"https://local506.com/",
			"Free"
		),
	];

	return (
		<div className={fromHome ? classes.homeMain : classes.main}>
			<Grid
				container
				direction="column"
				alignItems="center"
				justifyContent="center"
				className={classes.innerDiv}
				// xs={12}
				// sm={10}
				// lg={8}
			>
				<Grid
					item
					style={{
						width: "100%",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<h2
						// variant="h2"
						// sx={{ color: "white", fontWeight: "bold" }}s
						className={fromHome ? classes.homeShowsHeader : classes.showsHeader}
					>
						Upcoming Shows
					</h2>
					{shows.map((show) => (
						<ShowItem key={`${show.venue}__${show.date}`} show={show} />
					))}
				</Grid>
			</Grid>
		</div>
	);
};

export default ShowsPage;
