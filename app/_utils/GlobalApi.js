const { default: axios } = require("axios");

const SendEmail = (data) => axios.post("/api/email", data);

export default {
  SendEmail,
};
