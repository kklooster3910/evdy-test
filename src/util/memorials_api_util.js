import axios from 'axios';

export const fetchMemorials = () => {
  return axios.get('https://dev.requiemapp.com/public/memorial/random', memorials);
}