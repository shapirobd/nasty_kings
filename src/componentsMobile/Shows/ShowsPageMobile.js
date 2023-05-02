import React, { useState, useEffect } from "react";
import { useStyles } from "./styles/ShowsPageStyles";
import ShowItemMobile from "./ShowItemMobile";
import { Typography } from "@mui/material";
import axios from "axios";

const days = [
	"SUNDAY",
	"MONDAY",
	"TUESDAY",
	"WEDNESDAY",
	"THURSDAY",
	"FRIDAY",
	"SATURDAY",
];

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

const pmTimes = [
	"12",
	"13",
	"14",
	"15",
	"16",
	"17",
	"18",
	"19",
	"20",
	"21",
	"22",
	"23",
];

function formatShows(showList, showsArr, createData, prevShows = false) {
	for (let show of showList) {
		let date = new Date(show.date.replace(/-/g, "/").replace(/T.+/, ""));
		let weekDay = days[date.getDay()];
		let day = date.getDate();
		let month = months[date.getMonth()];
		let year = date.getFullYear();
		let time = show.time ? show.time.slice(0, show.time.length - 3) : show.time;
		if (time) {
			if (pmTimes.includes(time.slice(0, 2))) {
				time += " PM";
				if (time.slice(0, 2) !== "12") {
					let originalHour = time.slice(0, 2);
					let newHour = parseInt(originalHour) - 12;
					time = newHour + time.substring(2);
				}
			} else {
				time += " AM";
				if (time.slice(0, 2) === "00") {
					time = "12" + time.substring(2);
				} else if (time.slice(0, 1) === "0") {
					time = time.substring(1);
				}
			}
		}
		const fullDate = {
			month,
			day,
			year,
			weekDay,
		};

		showsArr.push(
			createData(
				show.venue,
				show.address,
				show.city,
				show.state,
				fullDate,
				time,
				show.venueLink,
				show.ticketLink,
				show.solo,
				prevShows
			)
		);
		// console.log(showsArr);
	}
}

const ShowsPageMobile = ({ fromHome = false }) => {
	const classes = useStyles();

	function createData(
		venue,
		address,
		city,
		state,
		date,
		time,
		venueLink,
		ticketLink,
		solo,
		prevShow
	) {
		return {
			venue,
			address,
			city,
			state,
			date,
			time,
			venueLink,
			ticketLink,
			solo,
			prevShow
		};
	}

	const [shows, setShows] = useState([]);

	useEffect(async () => {
		const getShows = async () => {
			const resp = await axios.get(
				// "http://localhost:5000/shows?forSite=true"
				"https://ghnk-crm-server.herokuapp.com/shows?forSite=true"
			);
			console.log(resp.data);
			const showsArr = [];
			formatShows(resp.data.shows, showsArr, createData);
			formatShows(resp.data.shows_prev, showsArr, createData, true);
			return showsArr;
		};
		const foundShows = await getShows();
		setShows(foundShows);
	}, []);

	return (
		<div className={fromHome ? classes.homeMain : classes.main}>
			<div className={classes.innerDiv}>
				<h4
					// variant="h4"
					// sx={{ color: "white", fontWeight: "bold" }}
					className={fromHome ? classes.homeShowsHeader : classes.showsHeader}
				>
					Upcoming Shows
				</h4>
				{shows.filter(x => !x.prevShow).map(
					(show, idx, arr) =>
						// !show.prevShow && (
							<ShowItemMobile key={`${show.venue}__${show.date.month}_${show.date.day}_${show.date.year}`} show={show} final={idx == arr.length - 1} />
						// )
				)}
				<h4
					// variant="h4"
					// sx={{ color: "white", fontWeight: "bold" }}
					className={`${fromHome ? classes.homeShowsHeader : classes.showsHeader} ${classes.prevShowsHeader}`}
				>
					Previous Shows
				</h4>
				{shows.filter(x => x.prevShow).map(
					(show, idx, arr) =>
						// show.prevShow && (
							<ShowItemMobile key={`${show.venue}__${show.date.month}_${show.date.day}_${show.date.year}`} show={show} final={idx == arr.length - 1} />
						// )
				)}
			</div>
		</div>
	);
};

export default ShowsPageMobile;
