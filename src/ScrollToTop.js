import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import jQuery from "jquery";

export default function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		jQuery("#main-container").animate({ scrollTop: "0px" }, 1);
	}, [pathname]);

	return null;
}
