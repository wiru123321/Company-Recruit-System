import React from 'react';

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
    console.log (dto);
    axios ({
      method: 'post',
      url: `http://localhost:8080/head/generatePDF`,
      data: dto,
      /* header: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },*/
    }).then (() => {
      window.open (`http://localhost:8080/head/recievePDF`);
    });
  }

  sendDecission (decission) {
    let dto = {
      description: decission.description, //decission.description,
      jobApplicationID: decission.jobApplicationID, // decission.jobApplicationID,
      result: decission.result,
      rate: decission.rate,
    };

    return axios.post (`http://localhost:8080/head/addDecission`, dto, {
      headers: {'Content-Type': 'application/json'},
    });
  }

  getAllApplications () {
    console.log ('getAll');

    return axios ({
      method: 'get',

      url: `http://localhost:8080/head/allApplications`,
    });
  }

  getSpecifiedAppliacations (searchParameters) {
    console.log (searchParameters);

    const dto = {
      firstName: searchParameters.firstName,
      lastName: searchParameters.lastName,
      position: searchParameters.position,
      status: searchParameters.status,
      result: '', //searchParameters.result, // to powinien byc int
      Rate: searchParameters.rate, // DTO tez ma duzą literę
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
