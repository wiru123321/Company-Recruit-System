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
/*TO DO: WALIDACJA */
const NameComponent = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        experiences: [
          {
            jobName: '',
            beginDate: '',
            endDate: '',
          },
        ],
        courses: [
          {
            courseName: '',
            courseDate: '',
          },
        ],
        skills: [
          {
            skill: '',
            skillRating: '',
          },
        ],
        education: 0,
      }}
      validate={values => {
        let errors = {};

        if (!values.firstName) {
          errors.firstName = 'Należy podać imie.';
        } else if (!values.lastName) {
          errors.lastName = 'Należy podać nazwisko.';
        } else {
          for (var i = 0; i < values.courses.length; i++) {
            if (
              !values.courses[i].courseName ||
              !values.courses[i].courseDate
            ) {
              errors.courseName = 'Pole nie moze być puste.';
            }
            for (var i = 0; i < values.experiences.length; i++) {
              if (
                !values.experiences[i].jobName ||
                !values.experiences[i].beginDate ||
                !values.experiences[i].endDate
              ) {
                errors.jobName = 'Pole nie może być puste';
              }
            }
          }
        }

        return errors;
      }}
      onSubmit={values => {
        console.log ('submit');
        CallApi.recruit (
          values.firstName,
          values.lastName,
          values.courses,
          values.experiences,
          values.skills,
          values.education
        );
      }}
    >
      {({values, errors, handleChange}) => (
        <div>
          <Form name="names">
            <Field
              as="input"
              value={values.firstName}
              onChange={handleChange}
              name="firstName"
              type="text"
              placeholder="Imie"
            />
            <Field
              as="input"
              value={values.lastName}
              onChange={handleChange}
              name="lastName"
              type="text"
              placeholder="Nazwisko"
            />

            <div>
              {errors.firstName}
              {errors.lastName}
            </div>
            <FieldArray name="courses">
              {({push, remove}) => (
                <div>
                  <div>

                    <button
                      type="button"
                      onClick={event =>
                        push ({
                          courseName: '',
                          courseDate: '',
                        })}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    {values.courses.map ((c, index) => {
                      return (
                        <div key={c.id}>
                          <Field
                            name={`courses[${index}].courseName`}
                            value={c.courseName}
                            onChange={handleChange}
                            type="text"
                            placeholder="Kurs"
                            as="input"
                          />
                          <Field
                            name={`courses[${index}].courseDate`}
                            value={c.courseDate}
                            onChange={handleChange}
                            type="date"
                            placeholder="Data"
                            as="input"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              if (values.courses.length > 1) remove ();
                            }}
                          >
                            -
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </FieldArray>
            <FieldArray name="experiences">
              {({push, remove}) => (
                <div>
                  <div>

                    <button
                      type="button"
                      onClick={event =>
                        push ({
                          jobName: '',
                          beginDate: '',
                          endDate: '',
                        })}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    {values.experiences.map ((exp, index) => {
                      return (
                        <div key={exp.id}>
                          <Field
                            name={`experiences[${index}].jobName`}
                            value={exp.jobName}
                            onChange={handleChange}
                            type="text"
                            placeholder="Zawód"
                            as="input"
                          />

                          <Field
                            name={`experiences[${index}].beginDate`}
                            value={exp.beginDate}
                            onChange={handleChange}
                            type="date"
                            placeholder="Data"
                            as="input"
                          />
                          <Field
                            name={`experiences[${index}].endDate`}
                            value={exp.endDate}
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
                            -
                          </button>
                        </div>
                      );
                    })}
                  </div>

                </div>
              )}
            </FieldArray>

            <Field
              name="education"
              as="select"
              placeholder="Wykształcenie"
              onChange={handleChange}
              value={values.education}
            >
              <option value="0"> brak </option>
              <option value="1">Podstawowe</option>
              <option value="2">Średnie</option>
              <option value="3">Zawodowe</option>
              <option value="4">Wyższe</option>
            </Field>
            <FieldArray name="skills">
              {({push, remove}) => {
                return (
                  <div>
                    <div>
                      <button
                        type="button"
                        onClick={event =>
                          push ({
                            skill: '',
                            skillRating: '',
                          })}
                      >
                        +
                      </button>
                    </div>
                    <div>
                      {values.skills.map ((s, index) => {
                        return (
                          <div key={s.id}>
                            <Field
                              as="input"
                              type="text"
                              name={`s[${index}].skill`}
                              value={s.skill}
                              onChange={handleChange}
                            />
                            <Field
                              name={`s[${index}].skillRating`}
                              value={s.skillRating}
                              onChange={handleChange}
                              as="select"
                            >
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                            </Field>
                            <button
                              type="button"
                              onClick={event => {
                                if (values.skills.length > 1) remove ();
                              }}
                            >
                              -
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              }}
            </FieldArray>
            <div>
              <button type="submit">
                Submit
              </button>
            </div>
            <div>
              <pre>
                {JSON.stringify (values, null, 2)}
              </pre>
            </div>
          </Form>
        </div>
      )}

    </Formik>
  );
};

export default NameComponent;
