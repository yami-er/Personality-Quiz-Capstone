import axios from "axios";

const USER_REST_API_URL = "http://localhost:8080/user/names";

class UserService {
  getUserNames() {
    return axios.get(USER_REST_API_URL);
  }

  createUserNames(user) {
    return axios.post(USER_REST_API_URL, user);
  }
}

export default new UserService();
