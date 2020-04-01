import React from 'react';
import {
  Form,
  Formik,
  ErrorMessage,
  Field,
  FieldArray,
  setNestedObjectValues,
} from 'formik';

const EducationComponent = () => {
  return (
    <Formik
      initialValues={{
        none: 0,
        primary: 1,
        secondary: 2,
        vocational: 3,
        higher: 4,
      }}
    >
      {({values, handleChange}) => (
        <Form>
          <Field name="education" as="select" placeholder="Wykształcenie">
            <option value={values.none}> brak </option>
            <option value={values.primary}>Podstawowe</option>
            <option value={values.secondary}>Średnie</option>
            <option value={values.vocational}>Zawodowe</option>
            <option value={values.higher}>Wyższe</option>
          </Field>
        </Form>
      )}
    </Formik>
  );
};

export default EducationComponent;
