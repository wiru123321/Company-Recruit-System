import React from 'react';
import {Field, FieldArray} from 'formik';

class ExperienceInput extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <div>
        {this.props.values.experiences.map ((exp, index) => {
          return (
            <div key={exp.id}>
              <Field
                name={`experiences[${index}].position`}
                value={exp.position}
                onChange={this.props.handleChange}
                type="text"
                placeholder="Zawód"
                as="input"
              />
              <Field
                name={`experiences[${index}].dateFrom`}
                value={exp.dateFrom}
                onChange={this.props.handleChange}
                type="date"
                placeholder="Data"
                as="input"
              />
              <Field
                name={`experiences[${index}].dateTo`}
                value={exp.dateTo}
                onChange={this.props.handleChange}
                type="date"
                placeholder="Data"
                as="input"
              />
              <button
                type="button"
                onClick={() => {
                  if (this.props.values.experiences.length > 1)
                    this.props.remove ();
                }}
              >
                USUŃ
              </button>
            </div>
          );
        })}
        <div>
          <button
            type="button"
            onClick={event =>
              this.props.push ({
                position: '',
                dateFrom: '',
                dateTo: '',
              })}
          >
            DODAJ
          </button>
        </div>
      </div>
    );
  }
}

export default ExperienceInput;
