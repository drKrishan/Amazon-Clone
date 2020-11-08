import axios from "axios";

const instance = axios.create({
  //baseURL: "http://localhost:5001/challenge-be76e/us-central1/api", //The api (cloud function url)

  baseURL: "https://dev-amazon-backend.herokuapp.com/", //The api (cloud function url)
});

export default instance;
