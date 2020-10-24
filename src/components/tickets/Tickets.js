import React, { useState, useEffect } from 'react';
import './tickets.css';
import EditArea from './EditArea.js';
import Filters from './Filters.js';
import { conexApi } from '../config.js';

const Tickets = () => {

    const server = conexApi + 'tickets/sinCerrar'

    const [ticketSinCerrar, setTicketSinCerrar] = useState([]);
    const [ticketSelected, setTicketSelected] = useState({
        tik_id: '',
        tik_fechacreacion: '',
        tik_fechamodif: '',
        tik_cliente: '',
        tik_clientecod: '',
        tik_abonado: '',
        tik_contacto: '',
        tik_tel: '',
        tik_email: '',
        tik_estado: '',
        tik_usu: '',
        tik_tipo: '',
        tik_modulo: '',
        tik_tema: '',
        tik_notes: ''
    });

    useEffect(() => {
        fetch(server)
            .then(res => res.json())
            .then(function (data) {
                setTicketSinCerrar(data)
            })
    }, [server])

    const handleTicketSelect = (ticket) =>{
        setTicketSelected(ticket);
    }

    return (

        <div className="tickets-conteiner">
            
            <Filters/>

            <div className="tickets-data-grid">

                {ticketSinCerrar.map((ticket, index) => {

                    const fechaCreacion = ticket.tik_fechacreacion.substr(0, 16)
                    const estado = (st) => {
                        switch (st) {
                            case 'A': return "Abierto"
                            case 'V': return "Pendiente"
                            case 'D': return "Derivado Bs.As."
                            case 'C': return "Cerrado"
                            default: return "sin estado"
                        }
                    }

                    return (
                        <div
                            key={index}
                            className={index % 2 === 0 ? "tickets-card-conteiner bgLine" : "tickets-card-conteiner"}
                            onClick={() => handleTicketSelect(ticket)}
                        >
                            <div id="tickets-card-right">
                                <div id="tickets-card-client-row">
                                    <div id="tickets-card-client">{ticket.tik_cliente}</div>
                                    <div id="tickets-card-client-state">{ticket.tik_abonado}</div>
                                </div>
                                <div id="tickets-card-data">{ticket.tik_tema}</div>
                            </div>
                            <div id="tickets-card-left">
                                <div id="tickets-card-id-state">
                                    <div id="tickets-card-id">{ticket.tik_id}</div>
                                    <div id="tickets-card-state" >{estado(ticket.tik_estado)}</div>
                                </div>
                                <div id="tickets-card-date">{fechaCreacion}</div>
                                <div id="tickets-card-owner">{ticket.tik_usu}</div>
                            </div>
                        </div>
                    )
                })}

            </div >

            <EditArea ticketSelected={ticketSelected} />

        </div >
    )
}

export default Tickets;
