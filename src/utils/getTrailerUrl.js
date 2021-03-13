const isValidUrl = (url) => {
  try {
    new URL(url);
  } catch (e) {
    return false;
  }
  return true;
};

const getTrailerUrl = (data) => {
  if (isValidUrl(data.trailerLink)) {
    return data.trailerLink;
  } else {
    return `https://www.youtube.com`;
  }
};

export default getTrailerUrl;
