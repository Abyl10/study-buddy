import AppointmentsMock from "../repositories/AppointmentsMock";
import AuthMock from "../repositories/AuthMock";
import NetApi from "../repositories/NetApi";
import HttpClient from "../services/HttpClient";
import AppointmentsStore from "../store/AppointmentsStore";
import AuthStore from "../store/AuthStore";
import SigninStore from "../store/SigninStore";

const services = {
  HttpClient: new HttpClient(),
}

const repositories = {
  netApi: new NetApi(services.HttpClient),
  authMock: new AuthMock(services.HttpClient),
  appointmentsMock: new AppointmentsMock(services.HttpClient),
}

const authStore = new AuthStore()

const stores = {
  authStore: authStore,
  signinStore: new SigninStore(repositories.authMock, authStore),
  appointmentsStore: new AppointmentsStore(repositories.appointmentsMock),
}

export default {
  services,
  repositories,
  stores,
}