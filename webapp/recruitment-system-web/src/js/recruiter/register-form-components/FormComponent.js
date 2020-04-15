import React from 'react';
import CallApi from './RecruitsFormService';
import {
  Form,
  Formik,
  ErrorMessage,
  Field,
  FieldArray,
  setNestedObjectValues,
} from 'formik';
import '../../../css/RecruiterPage.css';

/*TO DO: WALIDACJA */
const NameComponent = () => {
  return (
    <Formik
      initialValues={{
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
      }}
      /** WALIDACJA */
      validate={values => {
        let errors = {};

        if (!values.firstName) {
          errors.firstName = 'Należy podać imie.';
        } else if (!values.lastName) {
          errors.lastName = 'Należy podać nazwisko.';
        } else {
          for (var i = 0; i < values.trainings.length; i++) {
            if (
              !values.trainings[i].trainingDate ||
              !values.trainings[i].trainingName ||
              !values.trainings[i].description
            ) {
              errors.courseName = 'Pole nie moze być puste.';
              return errors;
            }
          }
          for (var i = 0; i < values.experiences.length; i++) {
            if (
              !values.experiences[i].position ||
              !values.experiences[i].dateFrom ||
              !values.experiences[i].dateTo
            ) {
              errors.jobName = 'Pole nie może być puste';
              return errors;
            }
          }
          if (!values.education) {
            errors.education = 'Nalezy wybrac odpowiednie pole.';
            return errors;
          } else {
            for (var i = 0; i < values.skills.length; i++) {
              if (!values.skills[i].skillName || !values.skills[i].skillLevel) {
                errors.trainings = 'Pole nie może być puste';
                return errors;
              }
            }
          }
        }
        return errors;
      }}
      /** REAKCJA NA SUBMIT */
      onSubmit={values => {
        console.log ('submit');

        CallApi.fullApplication (
          values.firstName,
          values.lastName,
          values.education,
          values.skills,
          values.trainings,
          values.experiences
        );
      }}
    >
      {({values, errors, handleChange}) => (
        <div>

          <Form name="names">
            <div className="r-row col-9 r-content">
              <label>Dane osobowe.</label>
              <div className="r-row col-4 r-content">
                <Field
                  className="field"
                  as="input"
                  value={values.firstName}
                  onChange={handleChange}
                  name="firstName"
                  type="text"
                  placeholder="Imie"
                />
                <Field
                  className="field"
                  as="input"
                  value={values.lastName}
                  onChange={handleChange}
                  name="lastName"
                  type="text"
                  placeholder="Nazwisko"
                />
                <div className="errors">
                  {errors.firstName}
                  {errors.lastName}
                </div>
              </div>
            </div>
            <div className="r-row col-9 r-content">
              <label>Kursy</label>
              <div>
                <FieldArray name="trainings">
                  {({push, remove}) => (
                    <div>
                      <div>
                        {values.trainings.map ((t, index) => {
                          return (
                            <div key={t.id}>
                              <div className="r-row col-8 r-content">
                                <Field
                                  name={`trainings[${index}].trainingName`}
                                  value={t.trainingName}
                                  onChange={handleChange}
                                  type="text"
                                  placeholder="Kurs"
                                  as="input"
                                />
                                <Field
                                  name={`trainings[${index}].description`}
                                  value={t.description}
                                  onChange={handleChange}
                                  type="text"
                                  placeholder="Opis kursu"
                                  as="input"
                                />
                                
                                <Field
                                  name={`trainings[${index}].trainingDate`}
                                  value={t.trainingDate}
                                  onChange={handleChange}
                                  type="date"
                                  placeholder="Data"
                                  as="input"
                                />
                                
                                <button
                                  type="button"
                                  onClick={() => {
                                    if (values.trainings.length > 1) remove ();
                                  }}
                                >
                                  USUŃ
                                </button>
                                
                              </div>
                            </div>
                          );
                        })}

                      </div>
                    <div>
                      <button
                                  type="button"
                                 onClick={event =>
                                  push ({
                                     trainingName: '',
                                     trainingDate: '',
                                     description: '',
                                      })}
                                 >
                                   DODAJ
                                </button>
                    </div>
                      
                    </div>
                  )}
                </FieldArray>
                <div className="errors">
                  {errors.courseName}
                </div>
              </div>
            </div>
            <div className="r-row col-9 r-content">
              <label>Doświadczenie zawodowe.</label>
              <FieldArray name="experiences">
                {({push, remove}) => (
                  <div>
                    <div>
                      {values.experiences.map ((exp, index) => {
                        return (
                          <div key={exp.id}>
                            <Field
                              name={`experiences[${index}].position`}
                              value={exp.position}
                              onChange={handleChange}
                              type="text"
                              placeholder="Zawód"
                              as="input"
                            />
                            <Field
                              name={`experiences[${index}].dateFrom`}
                              value={exp.dateFrom}
                              onChange={handleChange}
                              type="date"
                              placeholder="Data"
                              as="input"
                            />
                            <Field
                              name={`experiences[${index}].dateTo`}
                              value={exp.dateTo}
                              onChange={handleChange}
                              type="date"
                              placeholder="Data"
                              as="input"
                            />
                            <button
                              type="button"
                              onClick={() => {
                                if (values.experiences.length > 1) remove ();
                              }}
                            >
                              USUŃ
                            </button>
                          </div>
                        );
                      })}
                    </div>
                    <div>
                      <button
                        type="button"
                        onClick={event =>
                          push ({
                            position: '',
                            dateFrom: '',
                            dateTo: '',
                          })}
                      >
                        DODAJ
                      </button>
                    </div>
                  </div>
                )}
              </FieldArray>
              <div className="errors">
                {errors.jobName}
              </div>
            </div>
            <div className="r-row col-9 r-content">
              <label>Wykształcenie</label>
              <Field
                name="education"
                as="select"
                placeholder="Wykształcenie"
                onChange={handleChange}
                value={values.education}
              >
                <option value="Wyzsze"> Wyższe </option>
                <option value="Srednie"> Średnie </option>
                <option value="Podstawowe"> Podstawowe </option>
              </Field>
              <div className="errors">
                {errors.education}
              </div>
            </div>
            <div className="r-row col-9 r-content">
              <label>Umiejętności</label>
              <FieldArray name="skills">
                {({push, remove}) => {
                  return (
                    <div>
                      <div>
                        {values.skills.map ((s, index) => {
                          return (
                            <div key={s.id}>
                              <Field
                                as="input"
                                type="text"
                                name={`skills[${index}].skillName`}
                                value={s.skillName}
                                onChange={handleChange}
                                placeholder="Umiejętność"
                              />
                              <Field
                                name={`skills[${index}].skillLevel`}
                                value={s.skillLevel}
                                onChange={handleChange}
                                as="select"
                              >
                                <option value="poczatkujacy">
                                  poczatkujacy
                                </option>
                                <option value="srednio-zaawansowany">
                                  srednio-zaawansowany
                                </option>
                                <option value="zaawansowany">
                                  zaawansowany
                                </option>
                                <option value="ekspert">ekspert</option>
                              </Field>
                              <button
                                type="button"
                                onClick={event => {
                                  if (values.skills.length > 1) remove ();
                                }}
                              >
                                USUŃ
                              </button>
                            </div>
                          );
                        })}
                      </div>
                      <div>
                        <button
                          type="button"
                          onClick={event =>
                            push ({
                              skill: '',
                              skillRating: '',
                            })}
                        >
                          DODAJ
                        </button>
                      </div>
                    </div>
                  );
                }}
              </FieldArray>
              <div className="errors">
                {errors.trainings}
              </div>
              <Field type="file" name="file" onChange={handleChange} />
            </div>
            <div className="r-row col-9 r-content">
              <div>
                <button type="submit">
                  ZATWIERDŹ
                </button>
              </div>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default NameComponent;
