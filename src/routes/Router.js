import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';

import Loadable from '../layouts/full/shared/loadable/Loadable';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

// Pages
const RiskDashboard = Loadable(lazy(() => import('../pages/risks/RiskDashboard')));
const NewRisk = Loadable(lazy(() => import('../pages/risks/NewRisk')));
const DIVRiskList = Loadable(lazy(() => import('../pages/risks/DIVRiskList')));
const AnalyzeRisk = Loadable(lazy(() => import('../pages/risks/AnalyzeRisk')));
const ReviewRisk = Loadable(lazy(() => import('../pages/risks/ReviewRisk')));
const AllRiskList = Loadable(lazy(() => import('../pages/risks/AllRiskList')));
const ConsiderRisk = Loadable(lazy(() => import('../pages/risks/ConsiderRisk')));
const EvaluateRisk = Loadable(lazy(() => import('../pages/risks/EvaluateRisk')));

// authentication
const Login = Loadable(lazy(() => import('../views/authentication/auth1/Login')));
const Login2 = Loadable(lazy(() => import('../views/authentication/auth2/Login2')));
const Register = Loadable(lazy(() => import('../views/authentication/auth1/Register')));
const Register2 = Loadable(lazy(() => import('../views/authentication/auth2/Register2')));
const ForgotPassword = Loadable(lazy(() => import('../views/authentication/auth1/ForgotPassword')));
const ForgotPassword2 = Loadable(
  lazy(() => import('../views/authentication/auth2/ForgotPassword2')),
);
const TwoSteps = Loadable(lazy(() => import('../views/authentication/auth1/TwoSteps')));
const TwoSteps2 = Loadable(lazy(() => import('../views/authentication/auth2/TwoSteps2')));
const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Maintenance = Loadable(lazy(() => import('../views/authentication/Maintenance')));

const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/risks/RiskDashboard" /> },
      { path: '/risks/RiskDashboard', exact: true, element: <RiskDashboard /> },
      { path: '/pages/newrisk', element: <NewRisk /> },
      { path: '/pages/divrisklist', element: <DIVRiskList /> },
      { path: '/pages/analyzerisk', element: <AnalyzeRisk /> },
      { path: '/pages/reviewrisk', element: <ReviewRisk /> },
      { path: '/pages/allrisklist', element: <AllRiskList /> },
      { path: '/pages/considerrisk', element: <ConsiderRisk /> },
      { path: '/pages/evaluaterisk', element: <EvaluateRisk /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/',
    element: <BlankLayout />,
    children: [
      { path: '/auth/404', element: <Error /> },
      { path: '/auth/login', element: <Login /> },
      { path: '/auth/login2', element: <Login2 /> },
      { path: '/auth/register', element: <Register /> },
      { path: '/auth/register2', element: <Register2 /> },
      { path: '/auth/forgot-password', element: <ForgotPassword /> },
      { path: '/auth/forgot-password2', element: <ForgotPassword2 /> },
      { path: '/auth/two-steps', element: <TwoSteps /> },
      { path: '/auth/two-steps2', element: <TwoSteps2 /> },
      { path: '/auth/maintenance', element: <Maintenance /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default Router;
