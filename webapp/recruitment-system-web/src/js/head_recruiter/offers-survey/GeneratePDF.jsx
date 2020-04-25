import React from 'react';
import CallApi from '../service/CallApi';

class GeneratePDF extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      agreement: '',
      salary: '',
      position: '',

      agreementErrors: '',
      salaryErrors: '',
      positionErrors: '',
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
        <input
          type="text"
          name="agreement"
          placeholder="Umowa"
          value={this.state.agreement}
          onChange={this.handleChange}
        />
        <p>{this.state.agreementErrors}</p>
        <input
          type="number"
          name="salary"
          placeholder="Płaca"
          value={this.state.salary}
          onChange={this.handleChange}
        />
        <p>{this.state.salaryErrors}</p>
        <input
          type="text"
          name="position"
          placeholder="Stanowisko"
          value={this.state.position}
          onChange={this.handleChange}
        />
        <p>{this.state.positionErrors}</p>
        <button
          className="pdfButton"
          onClick={event => {
            event.preventDefault ();
            if (
              this.state.agreement &&
              this.state.salary &&
              this.state.position
            ) {
              CallApi.createPDF ();
              this.setState ({
                agreementErrors: '',
                salaryErrors: '',
                positionErrors: '',
              });
            } else {
              if (this.state.agreement === '')
                this.setState ({agreementErrors: 'Pole nie moze byc puste'});
              if (this.state.salary === '')
                this.setState ({salaryErrors: 'Pole nie moze byc puste'});
              if (this.state.position === '')
                this.setState ({positionErrors: 'Pole nie moze byc puste'});
            }
          }}
        >
          GENERUJ UMOWĘ
        </button>
      </div>
    );
  }
}

export default GeneratePDF;
