import React from 'react';
import CallApi from '../service/CallApi';
import '../../../css/HeadRecruiterPage.css';
import '../../../css/SurveyOffers.css';

class DecisionFormComponent extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      result: '',
      description: '',
      id: props.id,
      rate: '',

      show: false,

      errors: {
        descriptionIsEmpty: true,
        resultIsNotSelected: true,
      },
    };
    this.handleChange = this.handleChange.bind (this);
    this.handleDecissionSubmit = this.handleDecissionSubmit.bind (this);
    this.reload = this.reload.bind (this);
  }

  reload () {
    // this.props.reload ();
  }

  handleDecissionSubmit () {
    if (
      this.state.result !== '' &&
      this.state.result !== '2' &&
      this.state.description !== ''
    ) {
      var decission = {
        result: this.state.result,
        description: this.state.description,
        jobApplicationId: this.props.id,
        rate: parseInt (this.state.result, 10), // TO DO : POPRAWIC
      };
      console.log (JSON.stringify (decission));
      CallApi.sendDecission (decission)
        .then (response => console.log (response.data))
        .catch (e => console.log (e));
      // this.reload ();
    } else {
      //erros
    }
  }

  handleChange (event) {
    this.setState ({
      [event.target.name]: event.target.value,
    });
    console.log (event.target.name);
  }

  render () {
    return (
      <div>
        <button
          className="addDecision"
          onClick={() => this.setState ({show: !this.state.show})}
        >
          OCEŃ REKRUTA
        </button>
        {this.state.show &&
          <div>
            <label>Aplikacja została rozpatrzona </label>
            <select
              name="result"
              value={this.state.result}
              onChange={this.handleChange}
            >
              <option value="2">-</option>
              <option style={{color: 'green'}} value="1">Pozytywnie</option>
              {/*value="positive" */}
              <option style={{color: 'red'}} value="0">Negatywnie</option>
              {/*value="negative" */}
            </select>
            <form>
              <textarea
                className="description"
                name="description"
                value={this.state.description}
                placeholder="Uzasadnienie"
                onChange={this.handleChange}
              />
              {/*<input
                name="result"
                value={this.state.decission.result}
                placeholder="Ocena"
                onChange={this.handleChange}
              />*/}
              <button
                onClick={event => {
                  event.preventDefault ();
                  this.handleDecissionSubmit ();
                }}
              >
                PRZEŚLIJ OCENĘ
              </button>
            </form>
          </div>}
      </div>
    );
  }
}

export default DecisionFormComponent;
