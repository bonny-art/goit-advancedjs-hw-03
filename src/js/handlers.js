import { refs } from './refs';

import { iziToast } from './config/iziToast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImages } from './pixabay-api';
import { renderGallery } from './render-functions';

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
  e.preventDefault();
  const input = refs.form.elements.search;

  const query = input.value.trim();

  if (query === '') {
    iziToast.show({
      ...iziToastOptions,
      message: 'Oops! Looks like you forgot to enter something.',
    });
    input.value = '';
    return;
  }

  refs.loader.classList.remove('visually-hidden');

  getImages(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.show({
          ...iziToastOptions,
          message: `Sorry, there are no images matching your search query. Please try again!`,
        });
      }

      renderGallery(data.hits);

      input.value = '';
    })
    .catch(err =>
      iziToast.show({
        ...iziToastOptions,
        message: `Sorry, something went wrong.: ${err}`,
      })
    )
    .finally(() => {
      refs.loader.classList.add('visually-hidden');
    });
};
