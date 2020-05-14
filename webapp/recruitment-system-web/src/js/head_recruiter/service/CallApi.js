import React from 'react';

import axios from 'axios';

class CallHeadApi {
  getFile () {
    window.open (`http://localhost:8080/head/getFile`);
  }

  createPDF (contractParams) {
    let dto = {
      contract: contractParams.contract,
      salary: contractParams.salary,
      dateFrom: contractParams.dateFrom,
      dateTo: contractParams.dateTo,
    };
    axios ({
      method: 'post',
      url: `http://localhost:8080/head/generatePDF`,
      data: dto,
      header: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
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

    return axios ({
      method: 'post',

      url: `http://localhost:8080/head/addDecission`,

      data: dto,
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

    const searchParametersDTO = {
      firstName: searchParameters.firstName,
      lastName: searchParameters.lastName,
      position: searchParameters.position,
      status: searchParameters.status,
      result: '', //searchParameters.result, // to powinien byc int
      Rate: searchParameters.rate, // DTO tez ma duzą literę
    };

    console.log (searchParametersDTO);
    var formData = new FormData ();
    const json = JSON.stringify (searchParametersDTO);
    var blob = new Blob ([json], {
      type: 'application/json',
    });
    formData.append ('dto', blob);
    return axios ({
      method: 'post',
      url: `http://localhost:8080/head/parametrizedApplications`,
      data: formData,
      header: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
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
