import commentsPopUp from './Modules/commentsPopUp.js';
import reservationPopUp from './Modules/reservationPopUp.js';
import renderCards from './Modules/renderCards.js';
import { url, options } from './Modules/apiConsts.js';
import checkTimestemp from './helpers/checkExpierSongs.js';

const getShazamTracks = async () => {
  if (localStorage.getItem('songs') && checkTimestemp(localStorage.getItem('songDate'))) {
    const localStorageItem = localStorage.getItem('songs');
    const songs = JSON.parse(localStorageItem);

    renderCards(songs);
    commentsPopUp();
    reservationPopUp();
  } else {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      if (result && result.tracks) {
        const songs = result.tracks;
        const newDate = Date.now()
        localStorage.setItem('songs', JSON.stringify(songs));
        localStorage.setItem('songDate', JSON.stringify(newDate))

        renderCards(songs);
        commentsPopUp();
        reservationPopUp();
      } else {
        throw new Error('Failed to get Shazam tracks');
      }
    } catch (error) {
      throw new Error(error);
    }
  }
};
export default getShazamTracks;
