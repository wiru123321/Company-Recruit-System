import React from 'react';
import CallApi from './search-component/CallApi';
import '../../css/HeadRecruiterPage.css';

class OffersSurveyComponent extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      searchParams: {
        position: '',
        status: '',
        result: '',
        rate: '',
      },

      container: [
        {
          json: {
            position: '',
            status: '',
            decission: '',
            rate: '',
            recruit: '',
          },
        },
      ],
    };

    this.getAllApplicationsFromApi = this.getAllApplicationsFromApi.bind (this);
    this.getApplicationsBySearchParams = this.getApplicationsBySearchParams.bind (
      this
    );
    this.handleChange = this.handleChange.bind (this);
  }

  handleChange (event) {
    this.setState ({[event.target.name]: event.target.value});
  }

  getAllApplicationsFromApi () {
    CallApi.getAllApplications ().then (response =>
      this.setState ((this.state.container = response.data))
    );
  }

  getApplicationsBySearchParams () {
    CallApi.getSpecifiedAppliacations (this.state.searchParams)
      .then (response => this.setState ((this.state.container = response.data)))
      .catch (e => console.log (e));
  }

  componentDidMount () {
    this.getAllApplicationsFromApi ();
  }
  render () {
    return (
      <div>
        <div>
          <form>
            <input
              name="position"
              value={this.state.searchParams.position}
              onChange={this.handleChange}
            />
            <input
              name="status"
              value={this.state.searchParams.status}
              onChange={this.handleChange}
            />
            <input
              name="result"
              value={this.state.searchParams.result}
              onChange={this.handleChange}
            />
            <input
              name="rate"
              value={this.state.searchParams.rate}
              onChange={this.handleChange}
            />
            <button type="button" onClick={this.getApplicationsBySearchParams}>
              Znajdz
            </button>
            <button type="button" onClick={this.getAllApplicationsFromApi}>
              Wszyscy
            </button>
          </form>
        </div>
        <div>
          {JSON.stringify (this.state.container)}
        </div>
      </div>
    );
  }
}

export default OffersSurveyComponent;
