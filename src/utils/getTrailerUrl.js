const getTrailerUrl = (data) => {
  if (!data.trailer) {
    return `https://www.youtube.com`;
  };
  return data.trailer;
};

export default getTrailerUrl;
