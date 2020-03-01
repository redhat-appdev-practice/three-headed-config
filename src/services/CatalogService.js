import axios from 'axios';
import config from '../config';

export const getAlbums = async() => {
    const albums = await axios.get(`${config.apiUrl}/catalog`);
    return albums.data;
}