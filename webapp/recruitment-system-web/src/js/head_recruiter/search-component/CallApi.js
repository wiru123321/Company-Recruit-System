import React from 'react';
import axios from 'axios';

class CallHeadApi {
  getAllApplications () {
    var responseData = {};
    console.log ('get');
    return axios.get ('http://localhost:8080/head/allApplications');
  }

  getSpecifiedAppliacations (searchParameters) {
    console.log("SZMER")
    console.log(searchParameters)
    const searchParametersDTO = {
      position: searchParameters.position,
      status: searchParameters.status,
      result: searchParameters.result,
      rate: searchParameters.rate,
    };
    console.log ('specifiedParams');
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
}

export default new CallHeadApi ();
