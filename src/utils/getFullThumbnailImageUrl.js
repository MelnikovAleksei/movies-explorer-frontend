import getFullImageUrl from '../utils/getFullImageUrl';

const BASE_URL = 'https://api.nomoreparties.co';

const getFullThumbnailImageUrl = (data) => {
  if (!data.image.formats.thumbnail) {
    return getFullImageUrl(data);
  };
  return `${BASE_URL}${data.image.formats.thumbnail.url}`;
};

export default getFullThumbnailImageUrl;
