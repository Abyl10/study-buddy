import NetApi from "../NetApi";


export default class AppointmentsMock extends NetApi {
  myAppointmentsUrl = '/users/get_appointments/';
  appointmentsUrl = '/appointments/';
  joinAppointmentUrl = '/appointments/join/';

  constructor(http) {
    super(http);
  }

  async getMyAppointments(username) {
    try {
      return await this.post(this.myAppointmentsUrl, {}, {username: username});
    } catch (e) {
      console.log('AppointmentsMock getMyAppointments error:' + JSON.stringify(e));
    }
  }

  async getAppointments(username) {
    try {
      return await this.post(this.appointmentsUrl, {}, {username: username, subject: '', topic: ''});
    } catch (e) {
      console.log('AppointmentsMock getAppointments error:' + JSON.stringify(e));
    }
  }

  async joinAppointment(username, appointmentId) {
    try {
      return await this.post(this.joinAppointmentUrl, {}, {username: username, appointment_id: appointmentId});
    } catch (e) {
      console.log('AppointmentsMock joinAppointment error:' + JSON.stringify(e));
    }
  }
}