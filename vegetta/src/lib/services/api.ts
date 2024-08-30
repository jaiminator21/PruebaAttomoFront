import axios from "axios";

export const APIHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",

};

export const API = axios.create({
  baseURL: "http://localhost:4000",
  headers: APIHeaders,
});