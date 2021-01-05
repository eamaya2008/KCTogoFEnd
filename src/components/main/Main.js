import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
// Methods
// import { Route, HashRouter } from "react-router-dom";
// Components
// import Contact from '../contactos/Contact';
// import NewContact from '../contactos/NewContactModal';
// import Tickets from '../tickets/Tickets';
import Header from '../header/Header.js';
import Loader from '../../assets/Loader'
import { moduleRoutes } from "../../routes";
// Styles
import './main.css';
import './color-themes.css';


//Las props estan al final del componente y se inyectan con el metodo connect de Redux
const Main = () => {

    return (
        <div className="conteiner">
      <div className="row">
        <div className="main">
            {/* <HashRouter> */}
                
                <Header />
                
                <div className="data-row">

                    <div className="content">
                        <div className="content-main">
                            {/* <Route path="/tickets" component={Tickets} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/newcontact" component={NewContact} /> */}
                            {/* <Route path="/" strict component={Main}/> */}
                            <Suspense fallback={<Loader />}>
                  <Switch>
                  {
                    moduleRoutes.map(route => {
                      const RouteComponent = route.component;
                      return (
                        <Route
                          key={route.path}
                          path={route.path}
                          exact={route.exact}
                          name={route.name}
                          component={RouteComponent}
                        />
                      );
                    })
                  }
                  </Switch>
                </Suspense>
                        </div>
                    </div>

                </div>
            {/* </HashRouter> */}
        </div>
        </div>
    </div>
    );
}

export default Main;