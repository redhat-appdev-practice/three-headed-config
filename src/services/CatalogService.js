import axios from "axios";
import config from "../config";

export const getAlbums = async () => {
  const albums = await axios.get(`${config.apiUrl}/catalog`);
  return albums.data;
};

export const addAlbum = albumData => {
  return axios.post(`${config.apiUrl}/catalog`, albumData);
};

export const editAlbum = albumData => {
  return axios.put(`${config.apiUrl}/catalog/${albumData.id}`, albumData);
};

export const getAlbum = async id => {
  const album = await axios.get(`${config.apiUrl}/catalog/${id}`);
  return album.data;
};
