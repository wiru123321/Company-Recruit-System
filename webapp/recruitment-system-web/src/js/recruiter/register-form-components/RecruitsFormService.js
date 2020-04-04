import axios from 'axios';

class CallApi {
  recruit (firstName, lastName, trainingName, description, trainingDate) {
    var dto = {
      firstName: firstName,
      lastName: lastName,
      trainingName: trainingName,
      description: description,
      trainingDate: trainingDate,
    };
    const json = JSON.stringify (dto);

    var blob = new Blob ([json], {
      type: 'application/json',
    });

    var formData = new FormData ();
    formData.append ('fullRecruitDTO', blob);

    axios ({
      method: 'post',
      url: `http://localhost:8080/recruiter/addFullRecruit`,
      data: formData,
      header: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    })
      .then (response => {
        if (response.data != null) {
          console.log (response.data);
        }
      })
      .catch (e => console.log ('error'));
  }

  ping () {
    console.log ('ping');
    axios
      .get ('http://localhost:8080/recruiter/main')
      .then (response => console.log (response));
  }
}

export default new CallApi ();
