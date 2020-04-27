import React from 'react';
import CallApi from '../service/CallApi';

class GeneratePDF extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      contract: '',
      salary: '',
      dateFrom: '',
      dateTo: '',
      show: false,
      didSubmit: false,
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
          onClick={() => {
            this.setState ({show: !this.state.show});
          }}
        >
          Generuj umowę
        </button>
        {this.state.show &&
          <div>
            <select
              value={this.state.contract}
              name="contract"
              onChange={this.handleChange}
            >
              <option value="">-</option>
              <option value="zlecenie">Zlecenie</option>
              <option value="praca">Umowa o pracę</option>
              <option value="dzielo">Umowa o dzieło</option>
              <option value="staz">Staż</option>
            </select>
            {this.state.didSubmit &&
              !this.state.contract &&
              <p style={{fontSize: '12px', color: 'red'}}>
                Należy wybrać rodzaj zatrudnienia.
              </p>}
            <br />
            <input
              type="number"
              name="salary"
              placeholder="Płaca"
              value={this.state.salary}
              onChange={this.handleChange}
            />
            {this.state.didSubmit &&
              !this.state.salary &&
              <p style={{fontSize: '12px', color: 'red'}}>
                Należy wybrać wysokość pensji.
              </p>}
            <br />
            <input
              type="date"
              name="dateFrom"
              placeholder="Data rozpoczęcia"
              value={this.state.dateFrom}
              onChange={this.handleChange}
            />
            {this.state.didSubmit &&
              !this.state.dateFrom &&
              <p style={{fontSize: '12px', color: 'red'}}>
                Należy wybrać datę rozpoczęcia umowy.
              </p>}
            <br />
            <input
              type="date"
              name="dateTo"
              placeholder="Data zakończenia"
              value={this.state.dateTo}
              onChange={this.handleChange}
            />
            {this.state.didSubmit &&
              !this.state.dateTo &&
              <p style={{fontSize: '12px', color: 'red'}}>
                Należy wybrać datę zakończenia umowy.
              </p>}
            <br />
            <button
              className="pdfButton"
              onClick={event => {
                event.preventDefault ();
                this.setState ({didSubmit: true});
                if (
                  this.state.contract &&
                  this.state.salary &&
                  this.state.dateFrom &&
                  this.state.dateTo
                ) {
                  CallApi.createPDF (this.state);
                }
              }}
            >
              GENERUJ UMOWĘ
            </button>
          </div>}
      </div>
    );
  }
}

export default GeneratePDF;
