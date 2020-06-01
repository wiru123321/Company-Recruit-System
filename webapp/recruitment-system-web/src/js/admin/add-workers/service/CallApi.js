import axios from "axios";

class CallApi {
  createWorker(workerDto) {
    let dto = workerDto;
    return axios({
      method: "post",
      url: `http://localhost:8080/admin/addEmployee`,
      data: dto,
    });
  }

  getDepartments() {
    return axios({
      method: "GET",
      url: `http://localhost:8080/admin/getAllDepartments`,
    });
  }
  hi() {
    axios
      .get(`http://localhost:8080/admin/hi`)
      .then((response) => console.log("8080", response.data));
  }
}

export default new CallApi();
