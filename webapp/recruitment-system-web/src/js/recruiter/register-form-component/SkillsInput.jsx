import React from 'react';
import {Field} from 'formik';

class SkillsInput extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <div>
        <div>
          <div>
            {this.props.values.skills.map ((s, index) => {
              return (
                <div key={s.id}>
                  <Field
                    as="input"
                    type="text"
                    name={`skills[${index}].skillName`}
                    value={s.skillName}
                    onChange={this.props.handleChange}
                    placeholder="Umiejętność"
                  />
                  <Field
                    name={`skills[${index}].skillLevel`}
                    value={s.skillLevel}
                    onChange={this.props.handleChange}
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
                      if (this.props.values.skills.length > 1)
                        this.props.remove ();
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
                this.props.push ({
                  skill: '',
                  skillRating: '',
                })}
            >
              DODAJ
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SkillsInput;
