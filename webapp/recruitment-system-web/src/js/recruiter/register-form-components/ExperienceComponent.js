import React from 'react';
import {Form, Formik, Field, FieldArray} from 'formik';
import * as Yup from 'yup';

const schema = Yup.object ().shape ({
  experiences: Yup.array ().of (
    Yup.object ().shape ({
      jobName: Yup.string ().min (1, 'too short').required ('Required'), // these constraints take precedence
      beginDate: Yup.string ().min (8, 'cmon').required ('Required'), // these constraints take precedence
      endDate: Yup.string ().min (8, 'cmon').required ('Required'),
    })
  ),
});
const ExperienceComponent = () => {
  return (
    <div>
      <Formik
        initialValues={{
          experiences: [
            {
              jobName: '',
              beginDate: '',
              endDate: '',
            },
          ],
        }}
        onSubmit={() => {}}
      >
        {({values, errors, handleChange}) => (
          <Form>
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

                  <div>
                    <pre>
                      {JSON.stringify (values, null, 2)}
                    </pre>
                  </div>
                </div>
              )}
            </FieldArray>
          </Form>
        )}
      </Formik>

    </div>
  );
};

export default ExperienceComponent;
