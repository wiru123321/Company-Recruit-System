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
      paramsPosition: '', // Tymczasowe rozwiazanie
      paramsStatus: '',
      paramsResult: '',
      paramsRate: '',

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

      errors: {
        descriptionIsEmpty: true,
        resultIsNotSelected: true,
      },
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
    console.log ('log');
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
      position: this.state.paramsPosition,
      status: this.state.paramsStatus,
      result: this.state.paramsResult,
      rate: parseInt (this.state.paramsRate, 10),
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

  getResult (result) {
    if (result === '1') return 'Przyjety';
    else return 'Nieprzyjety';
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
                value={this.state.paramsPosition}
                onChange={this.handleChange}
              />
              <input
                className="searchParamsForm"
                name="status"
                placeholder="Status"
                value={this.state.paramsStatus}
                onChange={this.handleChange}
              />
              <input
                className="searchParamsForm"
                name="result"
                placeholder="Wynik"
                value={this.state.paramsResult}
                onChange={this.handleChange}
              />
              <input
                className="searchParamsForm"
                name="rate"
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
        </div>
        <div>
          {this.state.container.map ((json, id) => {
            return (
              <div className="listing listing-a">
                <label style={{fontSize: '40px'}}>
                  {json.recruit.firstName}
                </label>
                <label style={{fontSize: '40px'}}>
                  {json.recruit.lastName}
                </label>
                <br />
                {/*<label>Status: {json.status}</label>
                <label>Ocena: {json.rate.rate}</label>*/}
                <DetailsComponent recruit={json.recruit} />
                {!json.rate.rate &&
                  <DecisionFormComponent
                    id={json.id}
                    reload={this.getApplicationsBySearchParams}
                  />}
                {json.rate.rate &&
                  <div style={{marginTop: '2%'}}>
                    <p>
                      Decyzja: {this.getResult (json.rate.rate)}
                    </p>
                    <p>Uzasadnienie: </p>
                    <p style={{fontSize: '20px'}}>
                      {json.decission.description}
                    </p>
                  </div>}
                <button
                  className="pdfButton"
                  onClick={event => {
                    event.preventDefault ();
                    CallApi.createPDF ();
                  }}
                >
                  GENERUJ UMOWĘ
                </button>

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
