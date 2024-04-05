import { customAlphabet } from "nanoid";

const ShortUrl = () => {
	const characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	const getHash = customAlphabet(characters, 8);
	const domain = window.location.host;
	const hashId = getHash();
	let Url;
	if (domain.toString().indexOf("localhost") !== -1) {
		Url = "http://" + domain + "/s/" + hashId;
	} else {
		Url = "https://" + domain + "/s/" + hashId;
	}
	return { shortUrl: Url, urlId: hashId };
};

export default ShortUrl;
