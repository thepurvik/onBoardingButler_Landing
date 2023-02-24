import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/styles/Global.css';
import LandingPage from './Pages/LandingPage';
import NotFound from './Pages/NotFound';
import Layout from './Pages/Layout';
import RegisterComponent from './Pages/authentication/RegisterComponent';
import OtpVerification from './Pages/authentication/OtpVerification';
import Callback from './Pages/Callback';
import Privacy from './components/Privacy';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className='container-fluid px-0'>
      {/* <div>{process.env.REACT_APP_API_URL_V1}</div> */}
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<LandingPage />} />
          </Route>
          <Route path='/callback' element={<Callback />} />
          <Route path='/register' element={<RegisterComponent />} />
          <Route path='/otpverification' element={<OtpVerification />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
