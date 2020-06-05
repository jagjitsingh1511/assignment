import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const LandingPage = lazy(() => import('./homepage'));
const AboutUs = lazy(() => import('./AboutUs'));

const routePath = [
  {
    path: '/',
    component: LandingPage,
    exact: true,
  },
  {
    path: '/about',
    component: AboutUs,
    exact: true,
  },
];

const RouterContainer = (props) => {
  return (
    <>
      <Suspense fallback={<div>Loading....</div>}>
        <Switch>
          {routePath.map((r, i) => (
            <Route path={r.path} component={r.component} key={i} exact />
          ))}
        </Switch>
      </Suspense>
    </>
  );
};

export default RouterContainer;
