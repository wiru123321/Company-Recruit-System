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

      show: false,
    };
    this.handleChange = this.handleChange.bind (this);
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
                value={this.state.description}
                placeholder="Opis"
                onChange={this.handleChange}
              />
              <input
                name="result"
                value={this.state.result}
                placeholder="Ocena"
                onChange={this.handleChange}
              />
              <button>Prześlij ocenę</button>
            </form>
          </div>}
      </div>
    );
  }
}

export default DecisionFormComponent;
