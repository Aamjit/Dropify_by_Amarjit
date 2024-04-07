const { default: axios } = require("axios");
import { useAuth, currentUser } from "@clerk/nextjs";

function useFetch() {
	const { getToken } = useAuth();

	const authenticatedFetch = async (...args) => {
		return fetch(...args, {
			headers: { Authorization: `Bearer ${await getToken()}` },
		}).then((res) => {
			console.log("Response: ", res);
			res.json();
		});
	};

	return authenticatedFetch;
}

let res, err;

const SendEmail = (data) =>
	axios
		.post("/api/email", data)
		.then((res) => (res = res))
		.catch((err) => (err = err));

export default {
	// getDomain,
	useFetch,
	SendEmail,
	res,
	err,
};
