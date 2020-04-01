import React from 'react';
import {
  Form,
  Formik,
  ErrorMessage,
  Field,
  FieldArray,
  setNestedObjectValues,
} from 'formik';

const CoursesComponent = () => {
  return (
    <div>
      <Formik
        initialValues={{
          courses: [
            {
              courseName: '',
              courseDate: '',
            },
          ],
        }}
        onSubmit={() => {}}
      >
        {({values, handleChange}) => (
          <Form>
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

export default CoursesComponent;
