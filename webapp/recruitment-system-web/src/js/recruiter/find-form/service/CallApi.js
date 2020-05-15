import axios from 'axios';

class CallApi {
  getAllMatchingResults (firstName, lastName, rate, result, status, position) {
    let dto = {
      firstName: firstName,
      lastName: lastName,
      rate: rate,
      result: 1,
      status: status,
      position: position,
    };
    return axios ({
      method: 'post',
      url: `http://localhost:8080/recruiter/getRecruitInfo`,
      data: dto,
    });
    return axios.post (`http://localhost:8080/recruiter/getRecruitInfo`, dto);
  }
}

export default new CallApi ();
