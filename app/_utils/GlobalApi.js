const { default: axios } = require("axios");

let res, err;

const SendEmail = (data) =>
  axios
    .post("/api/email", data)
    .then((res) => (res = res))
    .catch((err) => (err = err));

export default {
  SendEmail,
  res,
  err,
};
