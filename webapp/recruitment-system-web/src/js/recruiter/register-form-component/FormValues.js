class FormValues {
  // zmienic na properties
  initialValues = {
    firstName: '',
    lastName: '',
    experiences: [
      {
        position: '',
        dateFrom: '',
        dateTo: '',
      },
    ],
    trainings: [
      {
        trainingName: '',
        trainingDate: '',
        description: '',
      },
    ],
    skills: [
      {
        skillName: '',
        skillLevel: '',
      },
    ],
    education: 0,
  };
  errors = {};
}

export default new FormValues ();
