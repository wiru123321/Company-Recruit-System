import axios from 'axios';

const recruiter = 'authUserAsRecruiter';
const head = 'authUserAsHead';
const admin = 'authUserAsAdmin';
const API_URL = 'http://localhost:8080';

class RecruiterAuthenticationService {
  executeBasicAuthentication (username, password) {
    return axios.get (`${API_URL}/login`, {
      headers: {
        authorization: this.createBasicAuthToken (username, password),
      },
    });
  }

  createBasicAuthToken (username, password) {
    return 'Basic ' + window.btoa (username + ':' + password);
  }

  registerSuccessfullHeadLogin (username, password) {
    sessionStorage.setItem (head, username);
    this.setupAxiosInterceptors (
      this.createBasicAuthToken (username, password)
    );
  }

  registerSuccessfullAdminLogin (username, password) {
    sessionStorage.setItem (admin, username);
    this.setupAxiosInterceptors (
      this.createBasicAuthToken (username, password)
    );
  }

  setupAxiosInterceptors (token) {
    axios.interceptors.request.use (config => {
      if (
        this.isHeadLoggedIn () ||
        this.isAdminLoggedIn () ||
        this.isRecruiterLoggedIn ()
      ) {
        config.headers.authorization = token;
      }
      return config;
    });
  }

  isHeadLoggedIn () {
    let user = sessionStorage.getItem (head);
    if (user === null) return false;
    return true;
  }

  logoutHead () {
    sessionStorage.removeItem (head);
  }

  isAdminLoggedIn () {
    let user = sessionStorage.getItem (admin);
    if (user === null) return false;
    return true;
  }

  logoutAdmin () {
    sessionStorage.removeItem (admin);
  }

  isRecruiterLoggedIn () {
    let user = sessionStorage.getItem (recruiter);
    if (user === null) return false;
    return true;
  }

  logoutRecruiter () {
    sessionStorage.removeItem (recruiter);
  }

  registerSuccessfullRecruiterLogin (username, password) {
    sessionStorage.setItem (recruiter, username);
    this.setupAxiosInterceptors (
      this.createBasicAuthToken (username, password)
    );
  }

  getRecruiterName () {
    return sessionStorage.getItem (recruiter);
  }

  getHeadName () {
    return sessionStorage.getItem (head);
  }
}

export default new RecruiterAuthenticationService ();
