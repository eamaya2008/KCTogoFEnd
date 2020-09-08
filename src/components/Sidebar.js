import React, { useState } from 'react';
import './main.css';
import './sidebar-themes.css';
import SlideToggleContent from './SlideToogleContent';
import Contact from '../contactos/Contact';
import NewContact from '../contactos/NewContact';
import { Route, NavLink, HashRouter } from "react-router-dom";

const Sidebar = () => {

    const [slDasboard, setSlDasboard] = useState(false);
    const [slContactos, setSlContactos] = useState(false);

    return (
        <div className="main">
            <HashRouter>
            <nav className="sidebar-wrapper">
                <div className="sidebar-content">
                    <div className="sidebar-header d-flex flex-nowrap">
                        <div className="user-pic">
                            {/* <img className="img-responsive img-rounded" src="<?= Url::to('/img/user.jpg') ?>" alt="User picture" /> */}
                        </div>
                        <div className="user-info">
                            <span className="user-name">Jhon
                            <strong>Smith</strong>
                            </span>
                        </div>
                    </div>

                    <div className="sidebar-menu">
                        <ul>
                            <li className="header-menu">
                                <span>General</span>
                            </li>
                            <li className="sidebar-dropdown">
                                <div id="title" 
                                    onClick={() => setSlDasboard(!slDasboard)}
                                >
                                    <i className="fa fa-tachometer-alt"></i>
                                    <span 
                                    className="menu-text">Tickets</span>
                                </div>
                                <SlideToggleContent isVisible={slDasboard} className="sidebar-dropdown-item">
                                    <ul>
                                        <li>
                                            <span>Dashboard 1</span>
                                        </li>
                                        <li>
                                            <span>Dashboard 2</span>
                                        </li>
                                        <li>
                                            <span>Dashboard 3</span>
                                        </li>
                                    </ul>
                                </SlideToggleContent>
                            </li>
                            <li className="sidebar-dropdown">
                                <div id="title"
                                    onClick={() => setSlContactos(!slContactos)}
                                >
                                    <i className="fa fa-address-book" aria-hidden="true"></i>
                                    <span className="menu-text">Contactos</span>
                                </div>
                                <SlideToggleContent isVisible={slContactos}>
                                    <ul>
                                        <li>
                                            <NavLink to="/contact" replace>Listado</NavLink>                                            
                                        </li>
                                        <li>
                                            <NavLink to="/newcontact" replace>Agregar Contacto</NavLink>  
                                        </li>
                                    </ul>
                                </SlideToggleContent>
                            </li>
                            <li className="sidebar-dropdown">
                                <div id="title">
                                    <i className="far fa-gem"></i>
                                    <span className="menu-text">Components</span>
                                </div>
                                <div className="sidebar-submenu">
                                    {/* <ul>
                                        <li>
                                            <span>General</span>
                                        </li>
                                        <li>
                                            <span>Panels</span>
                                        </li>
                                        <li>
                                            <span>Tables</span>
                                        </li>
                                        <li>
                                            <span>Icons</span>
                                        </li>
                                        <li>
                                            <span>Forms</span>
                                        </li>
                                    </ul> */}
                                </div>
                            </li>
                            <li className="sidebar-dropdown">
                                <div id="title">
                                    <i className="fa fa-chart-line"></i>
                                    <span className="menu-text">Charts</span>
                                </div>
                                <div className="sidebar-submenu">
                                    {/* <ul>
                                        <li>
                                            <a href="#">Pie chart</a>
                                        </li>
                                        <li>
                                            <a href="#">Line chart</a>
                                        </li>
                                        <li>
                                            <a href="#">Bar chart</a>
                                        </li>
                                        <li>
                                            <a href="#">Histogram</a>
                                        </li>
                                    </ul> */}
                                </div>
                            </li>
                            <li className="sidebar-dropdown">
                                <div id="title">
                                    <i className="fa fa-globe"></i>
                                    <span className="menu-text">Maps</span>
                                </div>
                                <div className="sidebar-submenu">
                                    {/* <ul>
                                        <li>
                                            <a href="#">Google maps</a>
                                        </li>
                                        <li>
                                            <a href="#">Open street map</a>
                                        </li>
                                    </ul> */}
                                </div>
                            </li>
                            <li className="header-menu">
                                <span>Extra</span>
                            </li>
                            <li>
                                <div id="title">
                                    <i className="fa fa-book"></i>
                                    <span className="menu-text">Documentation</span>
                                </div>
                            </li>
                            <li>
                                <div id="title">
                                    <i className="fa fa-calendar"></i>
                                    <span className="menu-text">Calendar</span>
                                </div>
                            </li>
                            <li>
                                <div id="title">
                                    <i className="fa fa-folder"></i>
                                    <span className="menu-text">Examples</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="content">
                <Route path="/contact" component={Contact}/>
                <Route path="/newcontact" component={NewContact} />
            </div>
            </HashRouter>
        </div>
    );
}

export default Sidebar;