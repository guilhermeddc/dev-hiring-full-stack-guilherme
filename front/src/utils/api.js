import axios from 'axios';

export const makeRequest = async (url, token, method, body) => {
  try {
    const options = {
      method,
      url,
      headers: {
        'Content-type': 'application/json'
      }
    };
    if (body) {
      options.data = body;
    }
    const { status, data } = await axios(options);
    return { status, data };
  } catch (err) {
    if (err.response && err.response.status) {
      return { status: err.response.status, data: err.response.data };
    }
    return { status: 500 };
  }
}

