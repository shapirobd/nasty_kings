import React, { useState, useEffect } from "react";
import { useStyles } from "./styles/GalleryPageStyles";
import { ImageList } from "@mui/material";
import BBI_3976 from "../../images/Gallery/Shakori/BBI_3976.JPG";
import BBI_3978 from "../../images/Gallery/Shakori/BBI_3978.JPG";
import BBI_3985 from "../../images/Gallery/Shakori/BBI_3985.JPG";
import BBI_3987 from "../../images/Gallery/Shakori/BBI_3987.JPG";
import BBI_3993 from "../../images/Gallery/Shakori/BBI_3993.JPG";
import BBI_4023 from "../../images/Gallery/Shakori/BBI_4023.JPG";
import BBI_4077 from "../../images/Gallery/Shakori/BBI_4077.JPG";
import IMG_3397 from "../../images/Gallery/Shakori/IMG_3397.PNG";
import IMG_3432 from "../../images/Gallery/Shakori/IMG_3432.JPG";
import IMG_3433 from "../../images/Gallery/Shakori/IMG_3433.JPG";
import IMG_3434 from "../../images/Gallery/Shakori/IMG_3434.PNG";
import RL1_7795 from "../../images/Gallery/Shakori/RL1_7795.JPG";
import IMG_1216 from "../../images/Gallery/IMG_1216.PNG";
import IMG_1287 from "../../images/Gallery/IMG_1287.JPG";
import IMG_2142 from "../../images/Gallery/IMG_2142.PNG";
import GalleryItem from "./GalleryItem";
// import Albums from "./Albums";
// import axios from "axios";

const GalleryPage = ({ fromHome = false }) => {
	const classes = useStyles();

	return (
		<div className={fromHome ? classes.homeMain : classes.main}>
			<div className={classes.innerDiv}>
				<ImageList variant="masonry" cols={3} gap={8}>
					<GalleryItem image={BBI_3976} />
					<GalleryItem image={BBI_3978} />
					<GalleryItem image={BBI_3985} />
					<GalleryItem image={BBI_3987} />
					<GalleryItem image={BBI_3993} />
					<GalleryItem image={BBI_4023} />
					<GalleryItem image={BBI_4077} />
					<GalleryItem image={IMG_3397} />
					<GalleryItem image={IMG_3432} />
					<GalleryItem image={IMG_3433} />
					<GalleryItem image={IMG_3434} />
					<GalleryItem image={RL1_7795} />
					<GalleryItem image={IMG_1216} />
					<GalleryItem image={IMG_1287} />
					<GalleryItem image={IMG_2142} />
				</ImageList>
			</div>
		</div>
	);
};

export default GalleryPage;
