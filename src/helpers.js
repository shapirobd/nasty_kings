import axios from 'axios'

export const getAlbumImages = async (albumList, setAlbumList, setAlbumArtLoaded) => {
	let spotify_access_token = await getSpotifyAccessToken();
	const albumListCopy = [...albumList];

	for (let album of albumListCopy) {
		const resp = await axios.get(
			"https://api.spotify.com/v1/albums/" +
				album.code.replace("?", "?").replace("&", "&"),
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + spotify_access_token,
				},
			}
		);
		if (resp.data) {
			if (resp.data.images) {
				if (resp.data.images.length) {
					album.coverArt = resp.data.images[0].url;
				}
			}
		}
	}
	setAlbumList(albumListCopy);
	setAlbumArtLoaded(true);
};

export const getSingleImages = async (singleList, setSingleList, setSingleArtLoaded) => {
	let spotify_access_token = await getSpotifyAccessToken();
	const singleListCopy = [...singleList];

	for (let single of singleListCopy) {
		const resp = await axios.get(
			"https://api.spotify.com/v1/tracks/" +
				single.code.replace("?", "?").replace("&", "&"),
			{
				headers: {
					"Content-Type": "application/json",
					"Authorization": "Bearer " + spotify_access_token,
				},
			}
		);
		if (resp.data) {
			if (resp.data.album.images) {
				if (resp.data.album.images.length) {
					single.coverArt = resp.data.album.images[0].url;
				}
			}
		}
	}
  console.log("singleListCopy = ", singleListCopy);
	setSingleList(singleListCopy);
	setSingleArtLoaded(true);
};

async function getSpotifyAccessToken() {
  const token_resp = await axios.post(
		"https://accounts.spotify.com/api/token",
		"grant_type=client_credentials&client_id=353683482dae4cb5b5a45f8145e0a0ec&client_secret=8539cea0e9c14f689bd79fb83502e79c",
		{
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
		}
	);
	return token_resp.data.access_token;
}


export const waitForElm = (selector) => {
	return new Promise((resolve) => {
		if (document.querySelector(selector)) {
			return resolve(document.querySelector(selector));
		}

		const observer = new MutationObserver((mutations) => {
			if (document.querySelector(selector)) {
				resolve(document.querySelector(selector));
				observer.disconnect();
			}
		});

		observer.observe(document.body, {
			childList: true,
			subtree: true,
		});
	});
}