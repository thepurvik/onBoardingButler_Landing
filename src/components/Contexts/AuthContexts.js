import { createContext, useEffect, useReducer } from 'react';
// utils
import { API_BASE_URLS } from '../../assets/Helper/constant';
import axios from '../../assets/Helper/axios';
import { isValidToken, setSession } from '../../assets/Helper/utils';
import { axiosInstance } from '../../assets/API/axiosInstances';

// ----------------------------------------------------------------------

const Types = {
  Initial: 'INITIALIZE',
  Login: 'LOGIN',
  Logout: 'LOGOUT',
  Register: 'REGISTER',
  GatewayActionFetch: 'GATEWAYACTIONFETCH',
};

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
  gatewayactions: [],
  gatewayactionsvt: [],
  domain: '',
};

const JWTReducer = (state, action) => {
  switch (action.type) {
    case 'INITIALIZE':
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        isInitialized: true,
        user: action.payload.user,
      };
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };

    case 'REGISTER':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        domain: '',
      };

    case 'GATEWAYACTIONFETCH':
      return {
        ...state,
        gatewayactions: [...action.payload.gatewayactions],
        gatewayactionsvt: [...action.payload.gatewayactionsvt],
      };

    default:
      return state;
  }
};

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(JWTReducer, initialState);
  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = window.localStorage.getItem('accessToken');
        const user = window.localStorage.getItem('acc');

        if (accessToken && user && isValidToken(accessToken)) {
          setSession(accessToken, JSON.parse(user));

          dispatch({
            type: Types.Initial,
            payload: {
              isAuthenticated: true,
              user: JSON.parse(user),
            },
          });
        } else {
          dispatch({
            type: Types.Initial,
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: Types.Initial,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    // CALL this API to fetch account details on login for roles, elements etc
    initialize();
  }, []);

  const createSession = (values) => {
    setSession(values);
    dispatch({
      type: Types.Login,
      payload: {
        ...values,
      },
    });
  };

  const login = async (body) => {
    try {
      const response = await axiosInstance.post(`${API_BASE_URLS.baseUrl_V1}/accounts/login`, body);
      const user = response.data.data;
      createSession({
        user: user,
      });
      return response;
    } catch (err) {
      return err.response.data;
    }
  };

  //for registration
  const loginMicrosoft = async (payload) => {
    try {
      const response = await axios.post(`${API_BASE_URLS.baseUrl_V1}/accounts/microsoft`, payload);
      const user = response?.data?.data;
      createSession({
        user: user,
      });
      return response;
    } catch (err) {
      return err;
    }
  };

  //for login
  const loginMicrosoftWithHeader = async (payload, headerValue) => {
    try {
      const response = await axios.post(`${API_BASE_URLS.baseUrl_V1}/accounts/microsoft`, payload, {
        headers: {
          company: headerValue,
        },
      });
      const user = response.data.data;
      createSession({
        user: user,
      });
      return response;
    } catch (err) {
      return err;
    }
  };

  const register = async (body) => {
    const response = await axios.post(`${API_BASE_URLS.baseUrl_V1}/accounts/customer`, body);
    const { company, ...rest } = response.data.data;

    return response.data.data;
  };

  const logout = async () => {
    setSession(null, null);
    dispatch({ type: Types.Logout });
  };

  const verifyPassword = async (body) => {
    await axios(body);
  };

  const resetPassword = async (email) => {
    await axios.post(`${API_BASE_URLS.user}/password/forget`, {
      username: email,
    });
  };

  const updateProfile = () => {};

  const fetchactions = async () => {
    try {
      const url = `${API_BASE_URLS.adminGateway}/gateways/actions/paylink`;
      const url1 = `${API_BASE_URLS.adminGateway}/gateways/actions/vt`;
      const [response, response1] = await Promise.all([axios.get(url), axios.get(url1)]);
      if (response.data && response1.data) {
        dispatch({
          type: Types.GatewayActionFetch,
          payload: {
            gatewayactions: [...response.data.message],
            gatewayactionsvt: [...response1.data.message],
          },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'jwt',
        login,
        loginMicrosoft,
        logout,
        register,
        resetPassword,
        updateProfile,
        verifyPassword,
        fetchactions,
        loginMicrosoftWithHeader,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
