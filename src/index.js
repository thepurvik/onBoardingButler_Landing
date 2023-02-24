import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import { Auth0Provider } from '@auth0/auth0-react';
import { AuthProvider } from './components/Contexts/AuthContexts';
import { API_BASE_URLS } from './assets/Helper/constant';

const onRedirectCallback = (appState) => {
  console.log(appState, 'we are here');
  // history.push(appState && appState.returnTo ? appState.returnTo : window.location.pathname);
};

const providerConfig = {
  domain: 'dev-xl4j55ir.us.auth0.com',
  clientId: 'l4ofMfliLRmlVTVK3ci4V9oyu1DzkjZv',
  organization: 'org_gvBvGFt77KBeaRPK',
  redirectUri:
    window.location.hostname?.split('.')?.[0] == `${API_BASE_URLS.hostname}` || window.location.hostname?.split('.')?.[0] == 'localhost'
      ? window.location.origin + '/callback'
      : null,
  scope: 'openid profile email',
  // organization_connection: 'con_pnWBN1KujcspWDMI',
  // organization_connection_scope: 'https://graph.microsoft.com/User.Read https://graph.microsoft.com/Tasks.ReadWrite',
  onRedirectCallback,
};

// let showRobots = false

// useEffect(() => {
//  if(API_BASE_URLS.hostname == 'onboardingprofilen'){
//   showRobots = true
//  } else {
//   showRobots = false
//  }
// }, [])

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider {...providerConfig}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
