import React from 'react';
import PersonalData from './PersonalData.jsx';
import Education from './Education.jsx';
import Skills from './Skills.jsx';

class Form extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      firstName: '',
      lastName: '',
      department: '',
      education: [''],
      skills: [{skillName: '', skillLevel: ''}],
      trainings: [],
      experiences: [],
    };
    this.handleChange = this.handleChange.bind (this);
    this.updateEducation = this.updateEducation.bind (this);
    this.updateSkills = this.updateSkills.bind (this);
    this.addSkills = this.addSkills.bind (this);
    this.removeSkills = this.removeSkills.bind (this);
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

  render () {
    return (
      <div>
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

      </div>
    );
  }
}

export default Form;
