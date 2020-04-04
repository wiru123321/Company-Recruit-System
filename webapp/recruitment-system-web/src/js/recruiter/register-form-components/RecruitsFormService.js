import axios from 'axios';

let RecruitDTO = {
  firstName: '',
  lastName: '',
};

class CallApi {
  recruit (firstName, lastName, courses, experience, skills, education) {
    var formData = new FormData ();
    RecruitDTO = {firstName, lastName};
    formData.append ('RecruitDTO', RecruitDTO);
    formData.append ('EducationDTO', courses[0]);
    formData.append ('EducationDTO', experience[0]);
    formData.append ('EducationDTO', skills[0]);
    formData.append ('EducationDTO', education);

    axios
      .post ('http://localhost:8080/recruiter/addFullRecruit', formData)
      .then (response => {
        if (response.data != null) {
          console.log ('successfull');
        }
      })
      .catch (e => console.log ('error'));
  }

  ping () {
    axios
      .get ('http://localhost:8080/recruiter/main')
      .then (response => console.log (response));
  }
}

export default new CallApi ();
