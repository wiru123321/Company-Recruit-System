import axios from 'axios';

class CallApi {
  recruit (firstName, lastName, trainingName, description, trainingDate) {
    const dto = {
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

  fullApplication (
    firstName,
    lastName,
    education,
    skills,
    trainings,
    experiences
  ) {
    const recruitDTO = {
      firstName: firstName,
      lastName: lastName,
    };

    const attributesDTO = {
      educationDegrees: [education],
      skills: skills,
      trainings: trainings,
      experiences: experiences,
    };
    var formData = new FormData ();
    const recruitJson = JSON.stringify (recruitDTO);
    const attributesJson = JSON.stringify (attributesDTO);

    var blob = new Blob ([recruitJson], {
      type: 'application/json',
    });
    formData.append ('recruitDTO', blob);

    blob = new Blob ([attributesJson], {
      type: 'application/json',
    });
    formData.append ('attributesDTO', blob);

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
        if (response.data != null) {
          console.log (response.data);
        }
      })
      .catch (e => console.log ('error'));
  }
}

export default new CallApi ();
