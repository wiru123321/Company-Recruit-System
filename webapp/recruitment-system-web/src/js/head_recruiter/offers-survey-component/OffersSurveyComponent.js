import React from 'react';
import CallApi from '../service/CallApi';
import DecisionFormComponent from './DecissionFormComponent';
import DetailsComponent from './DetailsComponent';
import '../../../css/HeadRecruiterPage.css';
import '../../../css/SurveyOffers.css';

class OffersSurveyComponent extends React.Component {
  // #region members
  constructor (props) {
    super (props);
    this.state = {
      searchParams: {
        position: '',
        status: '',
        result: '',
        rate: '',
      },

      position: '', // Tymczasowe rozwiazanie
      status: '',
      result: '',
      Rate: '',

      container: [
        {
          id: '',
          position: '',
          status: '',
          decission: {result: '', description: ''},
          rate: '',
          recruit: {
            firstName: '',
            lastName: '',
            educations: [''],
            empolymentExperiences: [{dateFrom: '', dateTo: '', postion: ''}],
            skills: [{skillName: '', skillLevel: ''}],
            trainings: [{name: '', description: '', date: ''}],
          },
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
    this.setState ({
      [event.target.name]: event.target.value,
    });
  }

  renderApplications () {
    return <div />;
  }

  getAllApplicationsFromApi () {
    CallApi.getAllApplications ()
      .then (response => {
        this.setState ((this.state.container = response.data));
        console.log (response.data);
      })
      .catch (e => {
        console.log (e);
      });
  }

  getApplicationsBySearchParams () {
    var params = {
      //TYMCZASOWE
      position: this.state.position,
      status: this.state.status,
      result: this.state.result,
      rate: this.state.rate,
    };
    console.log ('GEEEENG');
    console.log (params);
    CallApi.getSpecifiedAppliacations (params) //TYMCZASOWE PARAMS
      .then (response => this.setState ((this.state.container = response.data)))
      .catch (e => console.log (e));
  }

  componentDidMount () {
    this.getAllApplicationsFromApi ();
  }

  // #endregion members

  // #region render
  render () {
    return (
      <div>
        <div className="container">
          <form>
            <div className="searchParamsForm">
              <label>Wyszukaj</label>
              <input
                className="searchParamsForm"
                name="position"
                placeholder="Stanowisko"
                value={this.state.position}
                onChange={this.handleChange}
              />
              <input
                className="searchParamsForm"
                name="status"
                placeholder="Status"
                value={this.state.status}
                onChange={this.handleChange}
              />
              <input
                className="searchParamsForm"
                name="result"
                placeholder="Wynik"
                value={this.state.result}
                onChange={this.handleChange}
              />
              <input
                className="searchParamsForm"
                name="rate"
                placeholder="Ocena"
                value={this.state.rate}
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
        </div>
        <div>
          {this.state.container.map ((json, id) => {
            return (
              <div className="listing">
                <label>{json.recruit.firstName}</label>
                <label>{json.recruit.lastName}</label>
                <br />
                <label>Status: {json.status}</label>
                <label>Ocena: {json.rate.rate}</label>
                <DetailsComponent recruit={json.recruit} />
                <DecisionFormComponent id={json.id} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  // #endregion render
}

export default OffersSurveyComponent;
