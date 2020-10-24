import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";


const HorizontalNavBar = (props) => {

    const [slContactos, setSlContactos] = useState(false);
    const [slDasboard, setSlDasboard] = useState(false);


    return (

        <nav className="hnavbar">

            <ul>
                <li className="sidebar-dropdown">
                    <div id="title"
                        onClick={() => setSlDasboard(!slDasboard)}
                    >
                        <i className="fa fa-tachometer-alt"></i>
                        <span className="menu-text">{"Tickets"}</span>
                    </div>

                    {slDasboard &&
                        <div className="sidebar-dropdown-item-conteiner">
                            <div className="sidebar-dropdown-item">
                                <NavLink to="/tickets" replace>Pendientes</NavLink>
                            </div>
                        <div className="sidebar-dropdown-item">
                            <NavLink 
                                to="/tickets" 
                                replace
                                onClick={() => setSlDasboard(!slDasboard)}                                 
                            >Abiertos</NavLink>
                            </div>
                        <div className="sidebar-dropdown-item">
                                <NavLink to="/tickets" replace>Derivados a Bs.As.</NavLink>
                            </div>
                        </div>
                    }                 
                </li>
                <li className="sidebar-dropdown">
                    <div id="title">
                        <i className="far fa-gem"></i>
                        <span
                            className={props.sdBarState ? "menu-text mt-shrink" : "menu-text mt-large"}
                        >{"Clientes"}</span>
                    </div>

                    <div className="sidebar-submenu">

                    </div>
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

                    {slContactos &&
                        <div className="sidebar-dropdown-item-conteiner">
                            <div className="sidebar-dropdown-item">
                            <NavLink to="/contact" replace>Listado</NavLink>
                            </div>
                            <div className="sidebar-dropdown-item">
                            <NavLink to="/newcontact" replace>Agregar Contacto</NavLink>

                            </div>                           
                        </div>
                                            } 

                   
                </li>
                
                <li className="sidebar-dropdown">
                    <div id="title">
                        <i className="fa fa-book"></i>
                        <span
                            className={props.sdBarState ? "menu-text mt-shrink" : "menu-text mt-large"}
                        >{"Documentacion"}</span>
                    </div>
                </li>
                <li className="sidebar-dropdown">
                    <div id="title">
                        <i className="fa fa-calendar"></i>
                        <span
                            className={props.sdBarState ? "menu-text mt-shrink" : "menu-text mt-large"}
                        >{"Calendario"}</span>
                    </div>
                </li>
                <li className="sidebar-dropdown">
                    <div id="title">
                        <i className="fa fa-folder"></i>
                        <span
                            className={props.sdBarState ? "menu-text mt-shrink" : "menu-text mt-large"}
                        >{"Extras"}</span>
                    </div>
                </li>
            </ul>
        </nav>

    );
}

const mapStateToProps = (state) => {
    return {
        sdBarState: state
    }
}

export default connect(mapStateToProps)(HorizontalNavBar);