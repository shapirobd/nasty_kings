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
import GalleryItemMobile from "./GalleryItemMobile";
// import Albums from "./Albums";
// import axios from "axios";

const GalleryPageMobile = ({ fromHome = false }) => {
	const classes = useStyles();

	return (
		<div className={fromHome ? classes.homeMain : classes.main}>
			<div className={classes.innerDiv}>
				<ImageList variant="masonry" cols={1} gap={8}>
					<GalleryItemMobile image={POUR_HOUSE_1} />
					<GalleryItemMobile image={POUR_HOUSE_2} />
					<GalleryItemMobile image={POUR_HOUSE_3} />
					<GalleryItemMobile image={POUR_HOUSE_4} />
					<GalleryItemMobile image={BBI_3976} />
					<GalleryItemMobile image={BBI_3978} />
					<GalleryItemMobile image={BBI_3985} />
					<GalleryItemMobile image={BBI_3987} />
					<GalleryItemMobile image={BBI_3993} />
					<GalleryItemMobile image={BBI_4023} />
					<GalleryItemMobile image={BBI_4077} />
					<GalleryItemMobile image={IMG_3397} />
					<GalleryItemMobile image={IMG_3432} />
					<GalleryItemMobile image={IMG_3433} />
					<GalleryItemMobile image={IMG_3434} />
					<GalleryItemMobile image={RL1_7795} />
					<GalleryItemMobile image={IMG_1216} />
					<GalleryItemMobile image={IMG_1287} />
					<GalleryItemMobile image={IMG_2142} />
				</ImageList>
			</div>
		</div>
	);
};

export default GalleryPageMobile;
