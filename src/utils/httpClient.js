import axios from 'axios';

export const Client = axios.create({
  baseURL: 'https://mate.academy/students-api',
});