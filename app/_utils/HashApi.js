import bycrypt from "bcryptjs";

const hashPassword = async (password) => {
	// Generate a salt at the server side
	try {
		const hashedPassword = await bycrypt.hashSync(password, 10);
		return hashedPassword;
	} catch (error) {
		return error;
	}
};

const comparePassword = (password, hashedPassword) => {
	return bycrypt.compare(password, hashedPassword);
};

export default {
	hashPassword,
	comparePassword,
};
