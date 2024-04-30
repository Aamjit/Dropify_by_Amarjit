import { useAuth, currentUser } from "@clerk/nextjs";

const { default: axios } = require("axios");
let res, err;

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

const SendEmail = (data) =>
	axios
		.post("/api/email", data)
		.then((res) => (res = res))
		.catch((err) => (err = err));

export default {
	useFetch,
	SendEmail,
	res,
	err,
};
