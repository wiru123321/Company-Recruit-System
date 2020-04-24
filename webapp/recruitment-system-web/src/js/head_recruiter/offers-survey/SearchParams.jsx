import React from 'react';
import CallApi from '../service/CallApi';

class SearchParamsComponent extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      paramsPosition: '', // Tymczasowe rozwiazanie
      paramsStatus: '',
      paramsResult: '',
      paramsRate: '',
    };
    this.handleChange = this.handleChange.bind (this);
    this.getApplicationsBySearchParams = this.getApplicationsBySearchParams.bind (
      this
    );
  }

  handleChange (event) {
    this.setState ({
      [event.target.name]: event.target.value,
    });
  }
  getApplicationsBySearchParams () {
    var params = {
      //TYMCZASOWE
      position: this.state.paramsPosition,
      status: this.state.paramsStatus,
      result: this.state.paramsResult,
      rate: parseInt (this.state.paramsRate, 10),
    };
    console.log ('GEEEENG');
    console.log (params);
    CallApi.getSpecifiedAppliacations (params) //TYMCZASOWE PARAMS
      .then (response => this.props.callback (response.data))
      .catch (e => console.log (e));
  }
  render () {
    return (
      <form>
        <div className="searchParamsForm">
          <label>Wyszukaj</label>
          <input
            className="searchParamsForm"
            name="paramsPosition"
            placeholder="Stanowisko"
            value={this.state.paramsPosition}
            onChange={this.handleChange}
          />
          <input
            className="searchParamsForm"
            name="paramsStatus"
            placeholder="Status"
            value={this.state.paramsStatus}
            onChange={this.handleChange}
          />
          <input
            className="searchParamsForm"
            name="paramsResult"
            placeholder="Wynik"
            value={this.state.paramsResult}
            onChange={this.handleChange}
          />
          <input
            className="searchParamsForm"
            name="paramsRate"
            placeholder="Ocena"
            value={this.state.paramsRate}
            onChange={this.handleChange}
          />
          <button
            className="searchParamsForm"
            type="button"
            onClick={this.getApplicationsBySearchParams}
          >
            Znajdz
          </button>
          <button
            className="searchParamsForm"
            type="button"
            onClick={this.getAllApplicationsFromApi}
          >
            Wszyscy
          </button>
        </div>
      </form>
    );
  }
}

export default SearchParamsComponent;
