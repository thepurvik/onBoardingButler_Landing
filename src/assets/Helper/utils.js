import { CUSTOMKEYS } from './constant';
import axios from 'axios';
export const IsAuthenticated = () => {
  let user = localStorage.getItem(CUSTOMKEYS.USER);
  if (!!user) {
    user = JSON.parse(user);
  }
  return user;
};

export const isValidToken = () => {};

export const setSession = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const removeSession = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('user');
  delete axios.defaults.headers.common.Authorization;
};

export const validName = (value) => {
  const nameRegex = /^([a-zA-Z]+[,.]?[ ]?|[a-zA-Z]+['-]?)+$/;
  return nameRegex.test(value);
};

export const validateEmail = (value) => {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(value);
};
export const validatePwd = (value) => {
  const pwdRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?/_!@$%^&*-]).{8,12}$/;
  return pwdRegex.test(value);
};

export const validateCompany = (value) => {
  const compRegex = /^[a-zA-Z0-9]+$/;
  return compRegex.test(value);
};
