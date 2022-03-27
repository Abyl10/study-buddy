import NetApi from "../NetApi";


export default class AppointmentsMock extends NetApi {
  myAppointmentsUrl = '/users/get_appointments/';
  appointmentsUrl = '/appointments/';
  joinAppointmentUrl = '/appointments/join/';
  createAppointmentUrl = '/appointments/create/';
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

  async removeAppointment(username, appointmentId) {
    try {
      return await this.post(this.removeAppointment, {}, {username: username, appointment_id: appointmentId});
    } catch (e) {
      console.log('AppointmentsMock joinAppointment error:' + JSON.stringify(e));
    }
  }

  async createAppointment(subject, topic, username, place) {
    try {
      console.log('sub:' + subject);
      console.log('top:' + topic);
      console.log('us: ' + username);
      console.log('pl: ' + place);
      return await this.post(this.createAppointmentUrl, {}, {subject: subject, topic: topic, host_username: username, place_name: place});
    } catch (e) {
      console.log('AppointmentsMock createAppointment error:' + JSON.stringify(e));
    }
  }
}