import axios from 'axios';

const BASE_URL = 'https://64650501228bd07b353fe658.mockapi.io';

export type User = {
  user: string;
  tweets: number;
  followers: number;
  avatar: string;
  id: number;
  following: boolean;
};

const PAGE_SIZE = 3;

export const getUsers = async (page: number) => {
  const result = await axios.get<{ items: User[]; total: number }>(
    `${BASE_URL}/user?page=${page}&limit=${PAGE_SIZE}`
  );

  return result.data;
};

export const getUser = (userId: number) => {
  return axios.get(`${BASE_URL}/user/${userId}`);
};

/**
 * add user
 * */
export const postUser = (user: User) => {
  return axios.post(`${BASE_URL}/user/${user.id}`, user);
};

/**
 * update user
 * */
export const putUser = async (user: Partial<User>) => {
  const response = await axios.put<User>(`${BASE_URL}/user/${user.id}`, user);

  return response.data;
};

export const deleteUser = (userId: number) => {
  return axios.delete(`${BASE_URL}/user/${userId}`);
};
