import React from 'react';
import {
  Form,
  Formik,
  ErrorMessage,
  Field,
  FieldArray,
  setNestedObjectValues,
} from 'formik';

const NameComponent = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
      }}
      onSubmit={() => {}}
    >
      {({values, handleChange}) => (
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
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default NameComponent;
