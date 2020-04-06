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
        Rate: '',
      },

      container: [
        {
          position: '',
          status: '',
          decission: '',
          rate: '',
          recruit: '',
        },
      ],
    };

    this.getAllApplicationsFromApi = this.getAllApplicationsFromApi.bind (this);
    this.renderApplications = this.renderApplications.bind (this);
    this.getApplicationsBySearchParams = this.getApplicationsBySearchParams.bind (
      this
    );
    this.handleChange = this.handleChange.bind (this);
  }

  handleChange (event) {
    this.setState ({[event.target.name]: event.target.value});
  }

  renderApplications () {
    return <div />;
  }

  getAllApplicationsFromApi () {
    CallApi.getAllApplications ().then (response => {
      this.setState ((this.state.container = response.data));
      console.log (response.data);
    });
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
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Imie</th>
                <th>Nazwisko</th>
                <th>Stanowisko</th>
                <th>Status</th>
                <th>Wyksztalcenie</th>
              </tr>
            </thead>
            <tbody>
              {this.state.container.map ((json, id) => (
                <tr>
                  <td>{id}</td>
                  <td>{json.recruit.firstName}</td>
                  <td>{json.recruit.lastName}</td>
                  <td>{json.position}</td>
                  <td>{json.status}</td>
                  <td>{json.recruit.educations}</td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default OffersSurveyComponent;
