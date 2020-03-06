import axios from "axios";
import store from "../store";

const getClient = (baseUrl = null) => {
  const options = {
    baseURL: baseUrl
  };

  const client = axios.create(options);

  // Add a request interceptor
  client.interceptors.request.use(
    requestConfig => {
      store.commit("START_LOADING");
      return requestConfig;
    },
    requestError => {
      store.commit("FINISH_LOADING");
      return Promise.reject(requestError);
    }
  );

  // Add a response interceptor
  client.interceptors.response.use(
    response => {
      return new Promise(resolve =>
        setTimeout(() => {
          store.commit("FINISH_LOADING");
          resolve(response);
        }, 5000)
      );
    },
    error => {
      store.commit("FINISH_LOADING");
      return Promise.reject(error);
    }
  );

  return client;
};

class ApiClient {
  constructor(baseUrl = null) {
    this.client = getClient(baseUrl);
  }

  get(url, conf = {}) {
    return this.client
      .get(url, conf)
      .then(response => Promise.resolve(response.data))
      .catch(error => Promise.reject(error));
  }

  delete(url, conf = {}) {
    return this.client
      .delete(url, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  head(url, conf = {}) {
    return this.client
      .head(url, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  options(url, conf = {}) {
    return this.client
      .options(url, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  post(url, data = {}, conf = {}) {
    return this.client
      .post(url, data, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  put(url, data = {}, conf = {}) {
    return this.client
      .put(url, data, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  patch(url, data = {}, conf = {}) {
    return this.client
      .patch(url, data, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }
}

export { ApiClient };
