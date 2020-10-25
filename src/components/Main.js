import React from 'react';
// Methods
import { connect } from 'react-redux';
import { Route, HashRouter } from "react-router-dom";
// Components
import Contact from './contactos/Contact';
import NewContact from './contactos/NewContactModal';
import Tickets from './tickets/Tickets';
import Header from './Header';
// Styles
import './main.css';
import './sidebar-themes.css';


//Las props estan al final del componente y se inyectan con el metodo connect de Redux
const Main = (props) => {

    return (
        <div className="main">
            <HashRouter>
                <Header />
                
                <div className="data-row">

                    <div className="content">
                        <div className="content-main">
                            <Route path="/tickets" component={Tickets} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/newcontact" component={NewContact} />
                            {/* <Route path="/" strict component={Main}/> */}
                        </div>
                    </div>

                </div>
            </HashRouter>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        sdBarState: state
    }
}

export default connect(mapStateToProps)(Main);