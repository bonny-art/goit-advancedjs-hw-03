import { refs } from './refs';

import { iziToast } from './config/iziToast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImages } from './pixabay-api';

const iziToastOptions = {
  message: 'Sorry, something went wrong.',

  // TODO: Change before deploy
  //   iconUrl: '/goit-advancedjs-hw-03/img/illegal.svg',
  iconUrl: './public/img/illegal.svg',

  progressBarColor: '#B51B1B',
  backgroundColor: '#EF4040',

  maxWidth: '432px',
};

export const handleImagesSearch = e => {
  const query = refs.input.value.trim();

  if (query === '') {
    iziToast.show({
      ...iziToastOptions,
      message: 'Please, print something for saerch',
    });
    refs.input.value = '';
    return;
  }

  getImages(query)
    .then(data => {
      console.log('🚀 ~ data:', data);
      if (data.hits.length === 0) {
        iziToast.show({
          ...iziToastOptions,
          message: `Sorry, there are no images matching your search query. Please try again!`,
        });
      }

      refs.input.value = '';
    })
    .catch(err =>
      iziToast.show({
        ...iziToastOptions,
        message: `Sorry, something went wrong.: ${err}`,
      })
    );
};
