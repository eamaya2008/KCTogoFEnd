import React from 'react';
import { connect } from 'react-redux';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import {selectTicket} from '../../redux/actions/ticketActions'

const Card = (props) => {
    
    const {tickets, droppableId, selectTicket} = props

    const handleSelectTicket = (ticket) => {
        selectTicket(ticket);
    }

    

    return (
        <Droppable droppableId={droppableId}>
        {(provided) => (
            <div
                className="tickets-card-dnd"
                {...provided.droppableProps}
                ref={provided.innerRef}
            >
                {tickets.map((ticket, index) => {

                    const fechaCreacion = ticket.tik_fechacreacion.substr(0, 16)

                    const ticketId = ticket.tik_id.toString()

                    const estado = (st) => {
                        switch (st) {
                            case 'A': return "Abierto"
                            case 'V': return "Pendiente"
                            case 'D': return "Bs.As."
                            case 'C': return "Cerrado"
                            default: return "sin estado"
                        }
                    }

                    return (
                        <Draggable
                            key={ticket.tik_id}
                            draggableId={ticketId}
                            index={index}
                        >
                            {(provided) => (
                                <div
                                    // className={index % 2 === 0 ? "tickets-card-conteiner bgLine" : "tickets-card-conteiner"}
                                    className="tickets-card-conteiner"
                                    onClick={() => handleSelectTicket(ticket)}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    ref={provided.innerRef}
                                    id={ticket.tik_id}
                                >
                                    <div id="tickets-card-top">
                                        <div id="tickets-card-client-row">
                                            <div id="tickets-card-client">{ticket.tik_cliente}</div>
                                            <div id="tickets-card-client-state">{ticket.tik_abonado}</div>
                                        </div>
                                        <div id="tickets-card-data">{ticket.tik_tema}</div>
                                    </div>
                                    <div id="tickets-card-bottom">
                                        <div id="tickets-card-id">{ticket.tik_id}</div>
                                        <div id="tickets-card-state" >{estado(ticket.tik_estado)}</div>
                                        <div id="tickets-card-date">{fechaCreacion}</div>
                                        <div id="tickets-card-owner">{ticket.tik_usu}</div>
                                    </div>
                                </div>
                            )}
                        </Draggable>
                    )
                })}
                {provided.placeholder}
            </div >
        )}
    </Droppable>
    )
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectTicket: (ticket)=> dispatch(selectTicket(ticket))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
