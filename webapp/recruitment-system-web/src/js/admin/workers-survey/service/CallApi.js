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
}

export default new CallApi ();
