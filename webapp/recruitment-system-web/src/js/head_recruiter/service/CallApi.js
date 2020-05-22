import axios from 'axios';

class CallHeadApi {
  getFile () {
    window.open (`http://localhost:8080/head/getFile`);
  }

  createPDF (contractParams) {
    let dto = {
      firstName: contractParams.firstName,
      lastName: contractParams.lastName,
      contract: contractParams.contract,
      salary: contractParams.salary,
      dateFrom: contractParams.dateFrom,
      dateTo: contractParams.dateTo,
    };
    axios ({
      method: 'post',
      url: `http://localhost:8080/head/generatePDF`,
      data: dto,
    }).then (() => {
      window.open (`http://localhost:8080/head/recievePDF`);
    });
  }

  sendDecission (decission) {
    let dto = {
      description: decission.description,
      jobApplicationID: decission.jobApplicationID,
      rate: decission.rate,
    };

    return axios.post (`http://localhost:8080/head/addDecission`, dto, {
      headers: {'Content-Type': 'application/json'},
    });
  }

  getAllApplications () {
    return axios ({
      method: 'get',
      url: `http://localhost:8080/head/allApplications`,
    });
  }

  getSpecifiedAppliacations (searchParameters) {
    const dto = {
      firstName: searchParameters.firstName,
      lastName: searchParameters.lastName,
      position: searchParameters.position,
      status: searchParameters.status,
      Rate: searchParameters.rate,
    };

    return axios ({
      method: 'post',
      url: `http://localhost:8080/head/parametrizedApplications`,
      data: dto,
    });
  }

  startRecrutation (position, description, maxHires) {
    let dto = {
      position: position,
      description: description,
      maxHires: maxHires,
    };
    return axios ({
      method: 'post',
      url: `http://localhost:8080/head/startRecrutation`,
      data: dto,
    });
  }

  getAllRecrutationProccesses () {
    return axios ({
      method: 'get',
      url: `http://localhost:8080/head/getAllRecrutationProcesses`,
    });
  }
}

export default new CallHeadApi ();
