import getFullImageUrl from '../utils/getFullImageUrl';
import getTrailerUrl from '../utils/getTrailerUrl';
import checkDuration from '../utils/checkDuration';

const EXTRA_SEARCH_QUERY_MAX_SHORMFILM_DURATION = 40;

const SEARCH_KEYS = [
  'nameEN',
  'nameRU',
  'director',
  'country',
  'year',
  'description',
];

const KEYS_TO_CHECK = [
  {
    keyName: 'image',
    checkFunc: getFullImageUrl,
  },
  {
    keyName: 'trailerLink',
    checkFunc: getTrailerUrl,
  },
  {
    keyName: 'duration',
    checkFunc: checkDuration,
  }
];

const EXTRA_SEARCH_KEY = 'duration';

const searchFilter = (
  searchQuery,
  searchData,
  searchKeys = SEARCH_KEYS,
  searchKeyExtra = EXTRA_SEARCH_KEY,
  searchQueryExtra = EXTRA_SEARCH_QUERY_MAX_SHORMFILM_DURATION,
) => {
  const map = new Map();
  searchData.forEach(element => {
    searchKeys.forEach((key) => {
      if (element[key]) {
        if (searchQuery.shortfilm) {
          if ((element[searchKeyExtra] <= searchQueryExtra)) {
            if (element[key].toString().toLowerCase().includes(searchQuery.search.toLowerCase())) {
              map.set(element.id, element);
            }
          }
        } else {
          if (element[key].toString().toLowerCase().includes(searchQuery.search.toLowerCase())) {
            map.set(element.id, element);
          }
        }
      } else {
        element[key] = 'Нет данных';
      };
    })
  });

  map.forEach((element) => {
    KEYS_TO_CHECK.forEach((key) => {
      const checkResult = key.checkFunc(element);
      element[key.keyName] = checkResult;
    })
  });

  return [...map.values()];
};

export default searchFilter;
