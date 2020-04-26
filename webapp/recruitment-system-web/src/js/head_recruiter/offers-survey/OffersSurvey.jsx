import React from 'react';
import CallApi from '../service/CallApi';
import DecisionFormComponent from './DecissionForm';
import DetailsComponent from './Details';
import SearchParamsComponent from './SearchParams';
import GeneratePDF from './GeneratePDF';
import '../../../css/HeadRecruiterPage.css';
import '../../../css/SurveyOffers.css';

class OffersSurveyComponent extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      searchParams: {
        paramsPosition: '', // Tymczasowe rozwiazanie
        paramsStatus: '',
        paramsResult: '',
        paramsRate: '',
      },
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
    this.handleChange = this.handleChange.bind (this);
    this.callbackOnPositionChange = this.callbackOnPositionChange.bind (this);
    this.reloadOnDecissionSubmit = this.reloadOnDecissionSubmit.bind (this);
  }

  callbackOnPositionChange (id, param) {
    switch (id) {
      case 0:
        this.setState ({paramsPosition: param});
        break;
      case 1:
        this.setState ({paramsStatus: param});
        break;
      case 2:
        this.setState ({paramsResult: param});
        break;
      case 3:
        this.setState ({paramsRate: param});
        break;
      default:
        break;
    }
  }
  //reload()
  handleChange (event) {
    this.setState ({
      [event.target.name]: event.target.value,
    });
  }

  getAllApplicationsFromApi () {
    console.log ('log');
    CallApi.getAllApplications ()
      .then (response => {
        this.setState ({container: response.data});
        console.log (response.data);
      })
      .catch (e => {
        console.log (e);
      });
  }

  componentDidMount () {
    this.getAllApplicationsFromApi ();
  }

  getResult (result) {
    if (result === '1') return 'Przyjety';
    else return 'Nieprzyjety';
  }

  searchParamsCallback = childJSON => {
    this.setState ({container: childJSON});
  };

  reloadOnDecissionSubmit () {
    console.log ('callback');
    CallApi.getSpecifiedAppliacations (
      this.state.searchParams
    ).then (response => {
      this.setState ({container: response.data});
      console.log (response.data);
    });
  }

  // #region render
  render () {
    return (
      <div>
        <div className="container" />
        <SearchParamsComponent
          callback={this.searchParamsCallback}
          callbackChange={this.callbackOnPositionChange}
          searchParams={this.state.searchParams}
        />
        <div>
          {this.state.container.map ((json, id) => {
            return (
              <div className="listing listing-a">
                <DetailsComponent recruit={json.recruit} />
                {!json.rate.rate &&
                  <DecisionFormComponent
                    id={json.id}
                    reload={this.reloadOnDecissionSubmit}
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
                <div>
                  <GeneratePDF />
                </div>
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
