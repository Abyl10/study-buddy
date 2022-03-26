import AuthMock from "../repositories/AuthMock";
import NetApi from "../repositories/NetApi";
import HttpClient from "../services/HttpClient";
import AuthStore from "../store/AuthStore";
import SigninStore from "../store/SigninStore";

const services = {
  HttpClient: new HttpClient(),
}

const repositories = {
  netApi: new NetApi(services.HttpClient),
  authMock: new AuthMock(services.HttpClient),
}

const authStore = new AuthStore()

const stores = {
  signinStore: new SigninStore(repositories.authMock, authStore),
  authStore: authStore,
}

export default {
  services,
  repositories,
  stores,
}