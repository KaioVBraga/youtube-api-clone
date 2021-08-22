import axios from "axios";

export const apiYoutube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: process.env.API_YOUTUBE_KEY,
  },
});

export default apiYoutube;
