import axios from "axios";

export const USER_SESSION_ATTRIBUTE_NAME = "authenticatedUser";

class AuthenticationService {

    logout() {
        localStorage.removeItem(USER_SESSION_ATTRIBUTE_NAME);
      }

    isUserLoggedIn() {
        let user = localStorage.getItem(USER_SESSION_ATTRIBUTE_NAME);
        if (user === null) return false;
        return true;
      }

    getLoggedInUser() {
        let user = localStorage.getItem(USER_SESSION_ATTRIBUTE_NAME);
        if (user === null) return "";
        return JSON.parse(user);
      }
}

export default new AuthenticationService();