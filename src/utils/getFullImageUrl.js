import NOT_ALLOWED_IMAGE from '../images/MoviesCard/not-allowed-image.png';

const BASE_URL = 'https://api.nomoreparties.co';
const BASE_FRONT_SERVER_URL = 'https://cinema-explorer.students.nomoredomains.icu';

const getFullImageUrl = (data) => {
  if (!data.image) {
    return `${BASE_FRONT_SERVER_URL}${NOT_ALLOWED_IMAGE}`;
  };
  return `${BASE_URL}${data.image.url}`;
};

export default getFullImageUrl;
