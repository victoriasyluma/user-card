import axios from 'axios';

const BASE_URL = 'https://64650501228bd07b353fe658.mockapi.io';

export type User = {
  user: string;
  tweets: number;
  followers: number;
  avatar: string;
  id: number;
};

export const getUsers = () => {
  return axios.get(`${BASE_URL}/user`);
};

export const getUser = (userId: number) => {
  return axios.get(`${BASE_URL}/user/${userId}`);
};

export const postUser = (user: User) => {
  return axios.post(`${BASE_URL}/user/${user.id}`, user);
};

export const putUser = (user: Partial<User>) => {
  return axios.put(`${BASE_URL}/user/${user.id}`, user);
};

export const deleteUser = (userId: number) => {
  return axios.delete(`${BASE_URL}/user/${userId}`);
};
