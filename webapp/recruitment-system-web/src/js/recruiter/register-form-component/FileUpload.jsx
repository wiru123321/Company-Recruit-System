import React from 'react';
import {Field, FieldArray} from 'formik';
import axios from 'axios';
class FileUpload extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      file: null,
    };
    this.onFormSubmit = this.onFormSubmit.bind (this);
    this.onChange = this.onChange.bind (this);
    this.fileUpload = this.fileUpload.bind (this);
  }

  onFormSubmit (e) {
    e.preventDefault (); // Stop form submit
    this.fileUpload (this.state.file).then (response => {
      console.log (response.data);
    });
  }

  onChange (event) {
    this.setState ({file: event.target.files[0]});
  }

  fileUpload (file) {
    const url = 'http://localhost:8080/recruiter/addFiles';
    const formData = new FormData ();
    formData.append ('file', file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    return axios.post (url, formData, config);
  }

  render () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="file" onChange={this.onChange} multiple />
        <button type="submit">Upload</button>
      </form>
    );
  }
}

export default FileUpload;
