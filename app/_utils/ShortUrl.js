import { customAlphabet } from "nanoid";

const ShortUrl = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const getHash = customAlphabet(characters, 8);
    return ( getHash() );
};

export default ShortUrl;
