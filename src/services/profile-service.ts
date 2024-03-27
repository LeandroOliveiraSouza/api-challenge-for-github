import axios from "axios";
import { BASE_URL } from "../utils/system";

export function findProfile(sendUser: string) {
  return axios.get(`${BASE_URL}/${sendUser}`);
}
