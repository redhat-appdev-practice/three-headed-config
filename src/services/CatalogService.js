import axios from "axios";
import config from "../config";

export const getAlbums = async () => {
  const albums = await axios.get(`${config.apiUrl}/catalog`);
  return albums.data;
};

export const addAlbum = albumData => {
  return axios.post(`${config.apiUrl}/catalog`, albumData);
};
