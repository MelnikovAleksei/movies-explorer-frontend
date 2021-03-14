class MainApi {
  constructor (options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  _handleOriginalResponse(res) {
    if (!res.ok) {
      return Promise.reject(res.status);
    }
    return Promise.resolve(res.json())
      .then((data) => {
        return { data, status: res.status }
      })
  };

  register(data) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._handleOriginalResponse);
  };

  authorize(data) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    }).then(this._handleOriginalResponse);
  };

  checkToken(token) {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        ...this.headers,
        Authorization: `Bearer ${token}`,
      },
    }).then(this._handleOriginalResponse);
  };

  updateCurrentUserProfile(data, token) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email
      })
    }).then(this._handleOriginalResponse)
  };

  saveMovie(data, token) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data),
    }).then(this._handleOriginalResponse)
  };

  getSavedMovies(token) {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`
      },
    }).then(this._handleOriginalResponse)
  };

  deleteSavedMovie(id, token) {
    return fetch(`${this._url}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`
      },
    }).then(this._handleOriginalResponse)
  };
};

const OPTIONS = {
  baseUrl: 'https://api.cinema-explorer.students.nomoredomains.icu',
  headers: {
    'Content-Type': 'application/json',
  },
};

const mainApi = new MainApi(OPTIONS);

export default mainApi;
