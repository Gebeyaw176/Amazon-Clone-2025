import axios from "axios";


const axiosInstance = axios.create({
  // local instance of firebase functions
  // baseURL: "http://127.0.0.1:5001/e-clone-2025/us-central1/api",

  // deploy version of firebase function
  baseURL: "https://us-central1-e-clone-2025.cloudfunctions.net/api",

  // deployed version of amazon server on render.com
  baseURL: "https://amazon-api-deploy-cde1.onrender.com",
});
export {axiosInstance}