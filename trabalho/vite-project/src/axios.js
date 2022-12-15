import axios from "axios";

const blogFetch = axios.create({
  baseURL: "https://rato-buguer99999.onrender.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default blogFetch;