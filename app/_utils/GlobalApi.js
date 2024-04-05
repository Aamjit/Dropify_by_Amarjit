const { default: axios } = require("axios");

let res, err;

const getDomain = () => {
	return window?.location.host;
};

const SendEmail = (data) =>
	axios
		.post("/api/email", data)
		.then((res) => (res = res))
		.catch((err) => (err = err));

export default {
	getDomain,
	SendEmail,
	res,
	err,
};
