import axios from 'axios';

class CallApi {
  getWorkers () {
    return axios.get (`http://localhost:8080/admin/getAllEmployees`);
  }
  hi () {
    axios
      .get (`http://localhost:8080/admin/hi`)
      .then (response => console.log ('8080', response.data));
  }

  remove (firstName) {
    return axios ({
      method: 'DELETE',
      url: `http://localhost:8080/admin/deleteEmployee/${firstName}`,
    });
  }
}

export default new CallApi ();
