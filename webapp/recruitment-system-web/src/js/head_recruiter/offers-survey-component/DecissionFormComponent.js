import React from 'react';
import CallApi from '../service/CallApi';
import '../../../css/HeadRecruiterPage.css';
import '../../../css/SurveyOffers.css';

class DecisionFormComponent extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      decission: {
        result: '',
        description: '',
        id: props.id,
        rate: '',
      },

      show: false,
    };
    this.handleChange = this.handleChange.bind (this);
    this.handleDecissionSubmit = this.handleDecissionSubmit.bind (this);
  }

  handleDecissionSubmit () {
    CallApi.sendDecission (this.state.decission).catch (e => console.log (e));
  }

  handleChange (event) {
    this.setState ({
      [event.target.name]: event.target.value,
    });
  }

  render () {
    return (
      <div>
        <button
          className="addDecision"
          onClick={() => this.setState ({show: !this.state.show})}
        >
          Oceń rekruta
        </button>
        {this.state.show &&
          <div>
            <label> Oceń rekruta</label>
            <form>
              <textarea
                className="description"
                name="description"
                value={this.state.decission.description}
                placeholder="Opis"
                onChange={this.handleChange}
              />
              <input
                name="result"
                value={this.state.decission.result}
                placeholder="Ocena"
                onChange={this.handleChange}
              />
              <button
                onClick={event => {
                  event.preventDefault ();
                  this.handleDecissionSubmit ();
                }}
              >
                Prześlij ocenę
              </button>
            </form>
          </div>}
      </div>
    );
  }
}

export default DecisionFormComponent;
