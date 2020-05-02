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
    this.getApplicationsBySearchParams = this.getApplicationsBySearchParams.bind (
      this
    );
    this.handleChange = this.handleChange.bind (this);
  }
  handleChange (id, event) {
    this.setState ({
      [event.target.name]: event.target.value,
    });
    this.props.callbackChange (id, event.target.value);
  }
  getApplicationsBySearchParams () {
    var params = {
      //TYMCZASOWE
      position: this.props.searchParams.paramsPosition,
      status: this.props.searchParamsparamsStatus,
      result: this.props.searchParamsparamsResult,
      rate: parseInt (this.props.searchParams.paramsRate, 10),
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
            onChange={event => this.handleChange (0, event)}
          />
          <input
            className="searchParamsForm"
            name="paramsStatus"
            placeholder="Status"
            value={this.state.paramsStatus}
            onChange={event => this.handleChange (1, event)}
          />
          <input
            className="searchParamsForm"
            name="paramsResult"
            placeholder="Wynik"
            value={this.state.paramsResult}
            onChange={event => this.handleChange (2, event)}
          />
          <input
            className="searchParamsForm"
            name="paramsRate"
            placeholder="Ocena"
            value={this.state.paramsRate}
            onChange={event => this.handleChange (3, event)}
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
