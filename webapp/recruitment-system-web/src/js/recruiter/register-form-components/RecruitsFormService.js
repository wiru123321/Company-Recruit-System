import axios from 'axios';

class RecruitsFormApi {
  callPersonalDataService (firstName, secondName) {
    return axios.get (
      `http://localhost:8080/recruit/new-recruit/${firstName}:${secondName}`
    );
  }

  callEducationService (education) {
    return axios.get (`http://localhost:8080/recruit/new-recruit/${education}`);
  }

  callExperienceService (job, beginDate, endDate) {
    return axios.get (
      `http://localhost:8080/recruit/new-recruit/${job}:${beginDate}:${endDate}`
    );
  }

  callCoursesService (course, date) {
    return axios.get (
      `http://localhost:8080/recruit/new-recruit/${course}:${date}`
    );
  }
}

export default new RecruitsFormApi ();
