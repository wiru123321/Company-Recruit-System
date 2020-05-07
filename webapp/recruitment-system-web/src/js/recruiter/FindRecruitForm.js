import React from 'react';

class Json {
  json = [
    {
      recruit: {
        firstName: '',
        lastName: '',
        educations: [''],
        empolymentExperiences: [{dateFrom: '', dateTo: '', postion: ''}],
        skills: [{skillName: '', skillLevel: ''}],
        trainings: [{name: '', description: '', date: ''}],
      },
    },
  ];

  getAll () {
    return this.json;
  }

  filterByFirstName (firstName) {
    var result;
    this.json.map (item => {
      if (item.recruit.firstName === firstName) result.put (item.recruit);
    });
    console.log (result);
  }

  filterByLastName (lastName) {}

  filterByEducation (education) {}

  filterByCourseName (courseName) {}

  filterByJobName (jobName) {}
}

class Filters extends React.Component {
  render () {
    return (
      <div>
        <input type="text" placeholder="Odbyte zawody" />
        <input type="text" placeholder="Kurs" />
        <input type="text" placeholder="Wykształcenie" />
      </div>
    );
  }
}

class FindRecruitForm extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      showFilters: false,
    };
  }

  render () {
    return (
      <div>
        <p>Szukaj</p>
        <input type="text" placeholder="imie" />
        <input type="text" placeholder="nazwisko" />
        <button
          onClick={event => {
            event.preventDefault ();
            this.setState ({showFilters: !this.state.showFilters});
          }}
        >
          Zaawansowane filtry
        </button>
        {this.state.showFilters && <Filters />}

        <button>Filtruj</button>
      </div>
    );
  }
}

export default FindRecruitForm;
