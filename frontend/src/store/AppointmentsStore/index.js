import { makeObservable, observable, action, runInAction } from "mobx";
import BaseStore from "../BaseStore";

export default class AppointmentsStore extends BaseStore {
  constructor(appointmentsMock) {
    super();
    this.appointmentsMock = appointmentsMock;
    this.myAppointments = [];
    this.appointments = [];
    makeObservable(this, {
      myAppointments: observable,
      appointments: observable,
      getAppointments: action,
      getMyAppointments: action,
    });
  }

  getAppointments(username) {
    this.makeRequest({
      request: () => this.appointmentsMock.getAppointments(username),
      success: (res) => {
        runInAction(() => {
          this.appointments = res;
        })
      }
    })
  }

  getMyAppointments(username) {
    this.makeRequest({
      request: () => this.appointmentsMock.getMyAppointments(username),
      success: (res) => {
        runInAction(() => {
          this.myAppointments = res;
        })
        console.log(this.myAppointments);
      }
    })
  }

  joinAppointment(username, appointmentId) {
    this.makeRequest({
      request: () => this.appointmentsMock.joinAppointment(username, appointmentId),
      success: () => console.log('SUCCES JOIN'),
    })
  }
}