import React from 'react';
import {Field} from 'formik';

class TrainingsInput extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <div>
        <div>
          {this.props.values.trainings.map ((t, index) => {
            return (
              <div key={t.id}>
                <div className="r-row col-8 r-content">
                  <Field
                    name={`trainings[${index}].trainingName`}
                    value={t.trainingName}
                    onChange={this.props.handleChange}
                    type="text"
                    placeholder="Kurs"
                    as="input"
                  />
                  <Field
                    name={`trainings[${index}].description`}
                    value={t.description}
                    onChange={this.props.handleChange}
                    type="text"
                    placeholder="Opis kursu"
                    as="input"
                  />
                  <Field
                    name={`trainings[${index}].trainingDate`}
                    value={t.trainingDate}
                    onChange={this.props.handleChange}
                    type="date"
                    placeholder="Data"
                    as="input"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (this.props.values.trainings.length > 1)
                        this.props.remove ();
                    }}
                  >
                    USUŃ
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <button
          type="button"
          onClick={event =>
            this.props.push ({
              trainingName: '',
              description: '',
              trainingDate: '',
            })}
        >
          DODAJ
        </button>
      </div>
    );
  }
}

export default TrainingsInput;
