import { api } from "@/common/api";
import axios from "axios";
export function login(data) {
  return axios.post(api.login, data);
}
export function register(data) {
  return axios.post(api.register, data);
}
