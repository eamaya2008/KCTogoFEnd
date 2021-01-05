import React, { LazyExoticComponent } from 'react';

/**
 * Main module imports
 */
// const Signin1 = React.lazy(() => import('./main/containers/Authentication/SignIn1'));
const Main = React.lazy(() => import('./components/main/Main.js'));

/**
 * Dynamic module import and loading
 */
// const Tickets = React.lazy(() => import('./components/tickets'));
// const Nvd3Chart = React.lazy(() => import('./modules/Charts/Nvd3Chart/index'));
const Tickets = React.lazy(()=> import('./components/tickets'))
const Contact = React.lazy(()=> import('./components/contactos'))

type Route = {
  path: string;
  exact: boolean,
  name: string,
  component: LazyExoticComponent<any>
};

/**
 * Main module routes
 */
export const mainRoutes: Route[] = [
  // { path: '/login', exact: true, name: 'Signin', component: Signin1 },
  { path: '/', exact: false, name: 'Main Layout', component: Main },
];

/**
 * Dynamic module routes
 */
export const moduleRoutes: Route[] = [
  { path: '/tickets', exact: true, name: 'Tickets', component: Tickets },
  { path: '/contact', exact: true, name: 'Contact', component: Contact },
];

export default mainRoutes;
