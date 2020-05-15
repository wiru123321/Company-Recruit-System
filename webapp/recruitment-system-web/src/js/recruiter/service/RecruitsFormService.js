import axios from 'axios';

class CallApi {
  fullApplication (
    firstName,
    lastName,
    department,
    education,
    skills,
    trainings,
    experiences
  ) {
    const recruitDTO = {
      firstName: firstName,
      lastName: lastName,
      department: department,
    };

    const attributesDTO = {
      educationDegrees: education,
      skills: skills,
      trainings: trainings,
      experiences: experiences,
    };
    var formData = new FormData ();
    const recruitJson = JSON.stringify (recruitDTO);
    const attributesJson = JSON.stringify (attributesDTO);
    console.log (recruitDTO, attributesDTO);
    var blob = new Blob ([recruitJson], {
      type: 'application/json',
    });
    formData.append ('recruitDTO', blob);

    blob = new Blob ([attributesJson], {
      type: 'application/json',
    });
    formData.append ('attributesDTO', blob);
    console.log (formData);
    axios ({
      method: 'post',
      url: `http://localhost:8080/recruiter/addFullApplication`,
      data: formData,
      header: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    })
      .then (response => {
        alert (
          recruitDTO.firstName +
            ' ' +
            recruitDTO.firstName +
            ' został dodany/a.'
        );
        if (response.data != null) {
          console.log (response.data);
        }
      })
      .catch (e => console.log ('error'));
  }
}

export default new CallApi ();
