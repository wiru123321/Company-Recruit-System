import React from 'react';
import PersonalData from './PersonalData.jsx';
import Education from './Education.jsx';
import Skills from './Skills.jsx';
import Trainings from './Trainings.jsx';
import Experiences from './Experiences.jsx';
import FileUpload from './FileUpload.jsx';

class Form extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      firstName: '',
      lastName: '',
      department: '',
      education: [''],
      skills: [{skillName: '', skillLevel: ''}],
      trainings: [
        {trainingName: '', trainingDescription: '', trainingDate: ''},
      ],
      experiences: [{dateFrom: '', dateTo: '', position: ''}],
    };
    this.handleChange = this.handleChange.bind (this);
    this.updateEducation = this.updateEducation.bind (this);
    this.updateSkills = this.updateSkills.bind (this);
    this.addSkills = this.addSkills.bind (this);
    this.removeSkills = this.removeSkills.bind (this);
    this.updateTrainings = this.updateTrainings.bind (this);
    this.addTrainings = this.addTrainings.bind (this);
    this.removeTrainings = this.removeTrainings.bind (this);
    this.addExperiences = this.addExperiences.bind (this);
    this.removeExperiences = this.removeExperiences.bind (this);
    this.updateExperiences = this.updateExperiences.bind (this);
  }

  handleChange (event) {
    this.setState ({[event.target.name]: event.target.value});
  }

  updateEducation (event) {
    const edu = event.target.value;
    this.setState (state => {
      const education = state.education.map (item => edu);
      return {
        education,
      };
    });
  }

  addSkills () {
    this.setState (state => {
      const skills = [...state.skills, {skillName: '', skillLevel: ''}];
      return {
        skills,
      };
    });
  }

  updateSkills (index, skillName, skillLevel) {
    this.setState (state => {
      const skills = state.skills.map ((item, i) => {
        if (index === i) return {skillName, skillLevel};
        else return item;
      });
      return {
        skills,
      };
    });
  }

  removeSkills (index) {
    if (this.state.skills.length > 1)
      this.setState (state => {
        const skills = state.skills.filter ((item, i) => {
          if (i !== index) return item;
        });
        return {
          skills,
        };
      });
  }

  addTrainings () {
    this.setState (state => {
      const trainings = [
        ...state.trainings,
        {trainingName: '', trainingDescription: '', trainingDate: ''},
      ];
      return {
        trainings,
      };
    });
  }

  updateTrainings (index, trainingName, trainingDescription, trainingDate) {
    this.setState (state => {
      const trainings = state.trainings.map ((item, i) => {
        if (index === i)
          return {trainingName, trainingDescription, trainingDate};
        else return item;
      });
      return {
        trainings,
      };
    });
  }

  removeTrainings (index) {
    if (this.state.trainings.length > 1)
      this.setState (state => {
        const trainings = state.trainings.filter ((item, i) => {
          if (i !== index) return item;
        });
        return {
          trainings,
        };
      });
  }

  addExperiences () {
    this.setState (state => {
      const experiences = [
        ...state.experiences,
        {dateFrom: '', dateTo: '', position: ''},
      ];
      return {
        experiences,
      };
    });
  }

  updateExperiences (index, dateFrom, dateTo, position) {
    this.setState (state => {
      const experiences = state.experiences.map ((item, i) => {
        if (index === i) return {dateFrom, dateTo, position};
        else return item;
      });
      return {
        experiences,
      };
    });
  }

  removeExperiences (index) {
    if (this.state.experiences.length > 1)
      this.setState (state => {
        const experiences = state.experiences.filter ((item, i) => {
          if (i !== index) return item;
        });
        return {
          experiences,
        };
      });
  }

  render () {
    return (
      <div>
        <form
          onSubmit={event => {
            event.preventDefault ();
            console.log (this.state);
          }}
        >
          <PersonalData
            fName={this.state.firstName}
            lName={this.state.lastName}
            department={this.state.department}
            onChange={this.handleChange}
          />

          <Education onChange={this.updateEducation} />

          {this.state.skills.map ((item, index) => {
            return (
              <Skills
                id={index}
                onUpdate={this.updateSkills}
                onAdd={this.addSkills}
                onRemove={this.removeSkills}
              />
            );
          })}

          {this.state.trainings.map ((item, index) => {
            return (
              <Trainings
                id={index}
                onUpdate={this.updateTrainings}
                onAdd={this.addTrainings}
                onRemove={this.removeTrainings}
              />
            );
          })}

          {this.state.experiences.map ((item, index) => {
            return (
              <Experiences
                id={index}
                onUpdate={this.updateExperiences}
                onAdd={this.addExperiences}
                onRemove={this.removeExperiences}
              />
            );
          })}
          <FileUpload />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Form;
