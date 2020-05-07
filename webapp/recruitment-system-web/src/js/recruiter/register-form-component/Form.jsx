import React from 'react';
import CallApi from '../service/RecruitsFormService.js';
import formValues from './FormValues';
import {Form, Formik, Field, FieldArray} from 'formik';
import TrainingsInput from './TrainingsInput.jsx';
import ExperienceInput from './ExperienceInput.jsx';
import SkillsInput from './SkillsInput.jsx';
import FileUpload from './FileUpload.jsx';

import '../../../css/RecruiterPage.css';
import axios from 'axios';

/*TO DO: WALIDACJA */
const NameComponent = () => {
  return (
    <Formik
      initialValues={formValues.initialValues}
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
                      <TrainingsInput
                        handleChange={handleChange}
                        remove={remove}
                        push={push}
                        values={values}
                      />
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
                    <ExperienceInput
                      handleChange={handleChange}
                      remove={remove}
                      push={push}
                      values={values}
                    />
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
                <option value="wyzsze"> Wyższe </option>
                <option value="srednie"> Średnie </option>
                <option value="zawodowe"> Zawodowe </option>
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
                    <SkillsInput
                      handleChange={handleChange}
                      remove={remove}
                      push={push}
                      values={values}
                    />
                  );
                }}
              </FieldArray>
              <div className="errors">
                {errors.trainings}
              </div>
              <FileUpload />
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
