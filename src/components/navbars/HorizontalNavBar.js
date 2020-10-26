import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";


const HorizontalNavBar = (props) => {

    const [slContactos, setSlContactos] = useState(false);
    const [slTickets, setSlTickets] = useState(false);


    return (

        <nav className="hnavbar">

            <ul>
                {/* TICKETS */}
                <li className="sidebar-dropdown">
                    <div id="title"
                        onClick={() => setSlTickets(!slTickets)}
                    >
                        <i className="fa fa-tachometer-alt"></i>
                        <span className="menu-text">{"Tickets"}</span>
                    </div>

                    {slTickets &&
                        <div className="sidebar-dropdown-item-conteiner">
                            <div className="sidebar-dropdown-item">
                                <NavLink
                                    to="/tickets"
                                    replace
                                    onClick={() => setSlTickets(!slTickets)}
                                >{"Pendientes"}</NavLink>
                            </div>
                            <div className="sidebar-dropdown-item">
                                <NavLink
                                    to="/tickets"
                                    replace
                                    onClick={() => setSlTickets(!slTickets)}
                                >{"Abiertos"}</NavLink>
                            </div>
                            <div className="sidebar-dropdown-item">
                                <NavLink
                                    to="/tickets"
                                    replace
                                    onClick={() => setSlTickets(!slTickets)}
                                >{"Derivados a Bs.As."}</NavLink>
                            </div>
                        </div>
                    }
                </li>

                {/* CLIENTES */}
                <li className="sidebar-dropdown">
                    <div id="title"
                        onClick={() => setSlContactos(!slContactos)}
                    >
                        <i className="far fa-gem"></i>
                        <span
                            className={props.sdBarState ? "menu-text mt-shrink" : "menu-text mt-large"}
                        >{"Clientes"}</span>
                    </div>

                    {slContactos &&
                        <div className="sidebar-dropdown-item-conteiner">
                            <div className="sidebar-dropdown-item">
                                <NavLink
                                    to="/listado"
                                    replace
                                    onClick={() => setSlContactos(!slContactos)}
                                >{"Listado"}</NavLink>
                            </div>
                            <div className="sidebar-dropdown-item">
                                <NavLink
                                    to="/contact"
                                    replace
                                    onClick={() => setSlContactos(!slContactos)}
                                >{"Contactos"}</NavLink>
                            </div>
                        </div>
                    }
                </li>


                {/* DOCUMENTACION */}
                <li className="sidebar-dropdown">
                    <div id="title">
                        <i className="fa fa-book"></i>
                        <span
                            className={props.sdBarState ? "menu-text mt-shrink" : "menu-text mt-large"}
                        >{"Documentacion"}</span>
                    </div>
                </li>

                {/* CALENDARIO */}
                <li className="sidebar-dropdown">
                    <div id="title">
                        <i className="fa fa-calendar"></i>
                        <span
                            className={props.sdBarState ? "menu-text mt-shrink" : "menu-text mt-large"}
                        >{"Calendario"}</span>
                    </div>
                </li>

                {/* EXTRAS */}
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