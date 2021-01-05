import React, { useState } from 'react';
import { connect } from 'react-redux';
import SlideToggleContent from '../SlideToogleContent';
import { NavLink } from "react-router-dom";

const VerticalNavBar = (props) => {

    const [slDasboard, setSlDasboard] = useState(false);
    const [slContactos, setSlContactos] = useState(false); 

    return(
        <nav
            className={props.sdBarState ? "sidebar-wrapper sw-shrink" : "sidebar-wrapper sw-large"}
        >
            <div className="sidebar-content">
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
                                    className={props.sdBarState ? "menu-text mt-shrink" : "menu-text mt-large"}
                                >{"Tickets"}</span>
                            </div>

                            <SlideToggleContent isVisible={slDasboard} className="sidebar-dropdown-item">
                                <ul>
                                    <li>
                                        <NavLink to="/tickets" replace>Abiertos</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/tickets" replace>Derivados a Bs.As.</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/tickets" replace>Pendientes</NavLink>
                                    </li>
                                </ul>
                            </SlideToggleContent>
                        </li>

                        <li className="sidebar-dropdown">
                            <div id="title"
                                onClick={() => setSlContactos(!slContactos)}
                            >
                                <i className="fa fa-address-book" aria-hidden="true"></i>
                                <span
                                    className={props.sdBarState ? "menu-text mt-shrink" : "menu-text mt-large"}
                                >{"Contactos"}</span>
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
                                <span
                                    className={props.sdBarState ? "menu-text mt-shrink" : "menu-text mt-large"}
                                >{"Clientes"}</span>
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
                                <span
                                    className={props.sdBarState ? "menu-text mt-shrink" : "menu-text mt-large"}
                                >{"Informes"}
                                </span>
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

                        {/* <li className="sidebar-dropdown">
                                        <div id="title">
                                            <i className="fa fa-globe"></i>
                                            <span 
                                                className={slSideBar ? "menu-text mt-shrink" : "menu-text mt-large"}
                                            >{"Maps"}</span>
                                        </div>
                                        <div className="sidebar-submenu"> */}
                        {/* <ul>
                                        <li>
                                            <a href="#">Google maps</a>
                                        </li>
                                        <li>
                                            <a href="#">Open street map</a>
                                        </li>
                                    </ul> */}
                        {/* </div>
                                    </li> */}

                        <li className="header-menu">
                            <span>Extra</span>
                        </li>
                        <li>
                            <div id="title">
                                <i className="fa fa-book"></i>
                                <span
                                    className={props.sdBarState ? "menu-text mt-shrink" : "menu-text mt-large"}
                                >{"Documentacion"}</span>
                            </div>
                        </li>
                        <li>
                            <div id="title">
                                <i className="fa fa-calendar"></i>
                                <span
                                    className={props.sdBarState ? "menu-text mt-shrink" : "menu-text mt-large"}
                                >{"Calendario"}</span>
                            </div>
                        </li>
                        <li>
                            <div id="title">
                                <i className="fa fa-folder"></i>
                                <span
                                    className={props.sdBarState ? "menu-text mt-shrink" : "menu-text mt-large"}
                                >{"Otros"}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

const mapStateToProps = (state) => {
    return {
        sdBarState: state
    }
}

export default connect(mapStateToProps)(VerticalNavBar);