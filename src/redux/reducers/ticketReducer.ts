import {
    SELECT_TICKET,
    GET_TICKETS_BYUSER_REQUEST,
    GET_TICKETS_BYUSER_SUCCESS,
    GET_TICKETS_BYUSER_ERROR,
    GET_OTHERUSER_TICKETS_REQUEST,
    GET_OTHERUSER_TICKETS_SUCCESS,
    GET_OTHERUSER_TICKETS_ERROR,
    UPDATE_USER_TICKET_BYID_REQUEST,
    UPDATE_USER_TICKET_BYID_SUCCESS,
    UPDATE_USER_TICKET_BYID_ERROR
} from '../actions/ticketActions';
//Tipos
import { SystemAction } from './types';

let ticketSelected: Object = {
    tik_id: 0o0,
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
    tik_notes: '',
    tik_ven_cod: ''
}

const initialState = {
    ticketSelected,
    isGETing: false,
    ownTickets: [],
    otherUserTickets: [],
    error: null
}

function ticket(state = initialState, action: SystemAction) {
    switch (action.type) {

        /**Get ticket selected*/
        case SELECT_TICKET:
            return {
                ...state,
                ticketSelected: action.payload.tickets
            }

        /**Get user tickets */
        case GET_TICKETS_BYUSER_REQUEST:
            return {
                ...state,
                isFetching: true
            }

        case GET_TICKETS_BYUSER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                ownTickets: action.payload.tickets
            }

        case GET_TICKETS_BYUSER_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload.error
            }

        /**Get non-user tickets */
        case GET_OTHERUSER_TICKETS_REQUEST:
            return {
                ...state,
                isFetching: true
            }

        case GET_OTHERUSER_TICKETS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                otherUserTickets: action.payload.tickets
            }

        case GET_OTHERUSER_TICKETS_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload.error
            }

        /**Update ticket's user by id */
        case UPDATE_USER_TICKET_BYID_REQUEST:
            return {
                ...state,
                isFetching: true
            }

        case UPDATE_USER_TICKET_BYID_SUCCESS:
            return {
                ...state,
                isFetching: false
            }

        case UPDATE_USER_TICKET_BYID_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload.error
            }

        default:
            return state;
    }
}

export default ticket;