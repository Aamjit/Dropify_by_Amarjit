import { customAlphabet } from "nanoid";

const ShortUrl = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const getHash = customAlphabet(characters, 8);
  const domain = window.location.host;
  console.log(domain)
  let Url;
  if (domain.toString().indexOf("localhost") !== -1) {
    Url = "http://" + domain + "/s/" + getHash();
  } else {
    Url = "https://" + domain + "/s/" + getHash();
  }
  return Url;
};

export default ShortUrl;
