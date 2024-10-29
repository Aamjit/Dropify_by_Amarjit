import axios from "axios";

const checkServer = () => {
	axios
		.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/hello`)
		.then((res) => {
			console.log(res);
		})
		.catch((err) => {
			console.log(err);
		});
};

const uploadFile = () => {};

export default { checkServer };
