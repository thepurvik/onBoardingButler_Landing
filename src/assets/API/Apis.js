import axios from 'axios';
import { API_BASE_URLS } from '../Helper/constant';
import { IsAuthenticated } from '../Helper/utils';
import { axiosInstance } from './axiosInstances';

// Question API

export const postCompetenceQue = (props) => {
  return axiosInstance
    .post('/accounts/user/competence_result', props)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      throw new Error(error?.response?.data?.messages[0]?.message || error?.response?.data?.detail);
    });
};

export const getCompetenceQue = () => {
  return axios
    .get(`${API_BASE_URLS.baseUrl}/backend/competence_question_details`)
    .then(function (response) {
      return response.data.data;
    })
    .catch(function (error) {});
};

// Profile API

export const GetProfile = (props) => {
  return axiosInstance
    .get(`/accounts/user/${props.id}`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {});
};

export const Edit_Profile = (props) => {
  return axiosInstance
    .patch('/accounts/user/edit', props)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {});
};

export const getLevelsAndTask = (id) => {
  return axios
    .get(`${API_BASE_URLS.baseUrl}/backend/get_level_task`)
    .then(function (response) {
      return response.data.data;
    })
    .catch(function (error) {});
};

export const get_All_Employee_Details = (props) => {
  const Auth = IsAuthenticated()?.user?.access;

  return axiosInstance
    .get(`/accounts/get_employee_details`, props)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {});
};

export const get_All_Task = (props) => {
  return axiosInstance
    .get(`/accounts/task/`, props)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {});
};

export const get_One_Task = (props) => {
  return axiosInstance
    .get(`/accounts/task/${props.id}/`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {});
};

export const Update_Task_Details = (props) => {
  return axiosInstance
    .patch(`/accounts/task/${props.id}/`, props.values)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {});
};

export const StoreMyPlan = (props) => {
  return axiosInstance
    .post('/accounts/task/', props)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      throw new Error(error?.response?.data?.messages[0]?.message || error?.response?.data?.detail);
    });
};

export const SaveLevel = (id, props) => {
  return axiosInstance
    .patch(`/accounts/save_level/${id}/`, props)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      throw new Error(error?.response?.data?.messages[0]?.message || error?.response?.data?.detail);
    });
};
