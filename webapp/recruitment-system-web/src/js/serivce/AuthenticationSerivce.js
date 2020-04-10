const recruiter = 'authUserAsRecruiter';
const head = 'authUserAsHead';
/**
 * TO DO: ZABEZPIECZYC PRZED PODWOJNYM LOGOWANIEM
 */
class RecruiterAuthenticationService {
  /**
   * 
   */
  registerSuccessfullRecruiterLogin (username, password) {
    sessionStorage.setItem (recruiter, username);
  }
  /**
   * 
   */
  logoutRecruiter () {
    sessionStorage.removeItem (recruiter);
  }
  /**
   * 
   */
  isRecruiterLoggedIn () {
    let user = sessionStorage.getItem (recruiter);

    if (user === null) return false;
    return true;
  }
  /**
   * 
   */
  registerSuccessfullHeadLogin (username, password) {
    sessionStorage.setItem (head, username);
  }
  /**
   * 
   */
  logoutHead () {
    sessionStorage.removeItem (head);
  }
  /**
   * 
   */
  isHeadLoggedIn () {
    let user = sessionStorage.getItem (head);

    if (user === null) return false;
    return true;
  }
}

export default new RecruiterAuthenticationService ();
