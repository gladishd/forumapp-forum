// import axios from "axios";
// const url = "http://localhost:1337/api/strapi-forums";
// export const readForum = () => axios.get(url);
// export const createQuestion = (newQuestion) => axios.post(url, newQuestion);
import axios from "axios";

const url = "http://localhost:1337/api/strapi-forums";
export const readForum = () => axios.get(url);
