import React from 'react';
import {Form, Formik, Field, FieldArray, ErrorMessage} from 'formik';

const SkillsComponent = () => {
  return (
    <div>
      <Formik
        initialValues={{
          skills: [
            {
              skill: '',
              skillRating: '',
            },
          ],
        }}
      >
        {({values, errors, handleChange}) => (
          <div>
            <Form>
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
            </Form>
          </div>
        )}
      </Formik>

    </div>
  );
};

export default SkillsComponent;
