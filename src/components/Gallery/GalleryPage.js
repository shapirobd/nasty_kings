import React, { useState, useEffect } from "react";
import { useStyles } from "./styles/GalleryPageStyles";
import { ImageList } from "@mui/material";
import BBI_3976 from "../../images/Gallery/Shakori/BBI_3976.JPEG";
import BBI_3978 from "../../images/Gallery/Shakori/BBI_3978.JPEG";
import BBI_3985 from "../../images/Gallery/Shakori/BBI_3985.JPEG";
import BBI_3987 from "../../images/Gallery/Shakori/BBI_3987.JPEG";
import BBI_3993 from "../../images/Gallery/Shakori/BBI_3993.JPEG";
import BBI_4023 from "../../images/Gallery/Shakori/BBI_4023.JPEG";
import BBI_4077 from "../../images/Gallery/Shakori/BBI_4077.JPEG";
import IMG_3397 from "../../images/Gallery/Shakori/IMG_3397.JPEG";
import IMG_3432 from "../../images/Gallery/Shakori/IMG_3432.JPG";
import IMG_3433 from "../../images/Gallery/Shakori/IMG_3433.JPG";
import IMG_3434 from "../../images/Gallery/Shakori/IMG_3434.JPEG";
import RL1_7795 from "../../images/Gallery/Shakori/RL1_7795.JPEG";
import IMG_1216 from "../../images/Gallery/IMG_1216.JPEG";
import IMG_1287 from "../../images/Gallery/IMG_1287.JPG";
import IMG_2142 from "../../images/Gallery/IMG_2142.JPEG";
import POUR_HOUSE_1 from "../../images/Gallery/POUR_HOUSE_1.JPEG";
import POUR_HOUSE_2 from "../../images/Gallery/POUR_HOUSE_2.JPEG";
import POUR_HOUSE_3 from "../../images/Gallery/POUR_HOUSE_3.JPEG";
import POUR_HOUSE_4 from "../../images/Gallery/POUR_HOUSE_4.JPEG";
import POUR_HOUSE_5 from "../../images/Gallery/POUR_HOUSE_5.JPEG";
import POUR_HOUSE_6 from "../../images/Gallery/POUR_HOUSE_6.JPEG";
import POUR_HOUSE_7 from "../../images/Gallery/POUR_HOUSE_7.JPEG";
import POUR_HOUSE_8 from "../../images/Gallery/POUR_HOUSE_8.JPEG";
import POUR_HOUSE_9 from "../../images/Gallery/POUR_HOUSE_9.JPEG";
import POUR_HOUSE_10 from "../../images/Gallery/POUR_HOUSE_10.JPEG";
import POUR_HOUSE_11 from "../../images/Gallery/POUR_HOUSE_11.JPEG";
import GalleryItem from "./GalleryItem";
// import Albums from "./Albums";
// import axios from "axios";

const GalleryPage = ({ fromHome = false }) => {
	const classes = useStyles();

	return (
		<div className={fromHome ? classes.homeMain : classes.main}>
			<div className={classes.innerDiv}>
				<ImageList variant="masonry" cols={3} gap={8}>
					{/* Beginning of 1st column */}
					<GalleryItem image={POUR_HOUSE_1} />
					<GalleryItem image={POUR_HOUSE_2} />
					<GalleryItem image={POUR_HOUSE_4} />
					<GalleryItem image={POUR_HOUSE_3} />
					<GalleryItem image={BBI_3976} />
					<GalleryItem image={BBI_3978} />
					<GalleryItem image={BBI_3985} />
					<GalleryItem image={IMG_3432} />
					<GalleryItem image={IMG_3434} />

					{/* Beginning of 2nd column */}
					<GalleryItem image={POUR_HOUSE_7} />
					<GalleryItem image={POUR_HOUSE_8} />
					<GalleryItem image={POUR_HOUSE_10} />
					<GalleryItem image={POUR_HOUSE_9} />
					<GalleryItem image={BBI_3987} />
					<GalleryItem image={BBI_3993} />
					<GalleryItem image={BBI_4023} />
					<GalleryItem image={BBI_4077} />
					<GalleryItem image={IMG_3397} />

					{/* Beginning of 3rd column */}
					<GalleryItem image={POUR_HOUSE_5} />
					<GalleryItem image={POUR_HOUSE_6} />
					<GalleryItem image={POUR_HOUSE_11} />
					<GalleryItem image={IMG_3433} />
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
