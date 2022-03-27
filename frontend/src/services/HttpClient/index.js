import axios from "axios";

export default class HttpClient {
  constructor() {
    this.client = axios.create({
      baseURL: "http://10.202.0.196:8000",
      headers: {
        "Content-Type": "application/json",
      },
    });
    this.client.interceptors.request.use(config => {
      // console.log('Request: ', config);
      return config;
    }, err => Promise.reject(err),
    );
  }
}
