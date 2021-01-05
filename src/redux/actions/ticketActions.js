/**Ticket selected onClick**/
export const SELECT_TICKET = 'SELECT_TICKET';

/**User tickets */
export const GET_TICKETS_BYUSER_REQUEST = 'GET_OWN_TICKETS_REQUEST'
export const GET_TICKETS_BYUSER_SUCCESS = 'GET_OWN_TICKETS_SUCCESS'
export const GET_TICKETS_BYUSER_ERROR = 'GET_OWN_TICKETS_ERROR'

/**Non-user tickets */
export const GET_OTHERUSER_TICKETS_REQUEST = 'GET_OTHERUSER_TICKETS_REQUEST'
export const GET_OTHERUSER_TICKETS_SUCCESS = 'GET_OTHERUSER_TICKETS_SUCCESS'
export const GET_OTHERUSER_TICKETS_ERROR = 'GET_OTHERUSER_TICKETS_ERROR'

/**Update user by ticket id */
export const UPDATE_USER_TICKET_BYID_REQUEST = 'UPDATE_USER_TICKET_BYID_REQUEST'
export const UPDATE_USER_TICKET_BYID_SUCCESS = 'UPDATE_USER_TICKET_BYID_SUCCESS'
export const UPDATE_USER_TICKET_BYID_ERROR = 'UPDATE_USER_TICKET_BYID_ERROR'

/**Ticket Selected onClick */
export const selectTicket = (ticket) => {
    return {
        type: SELECT_TICKET,
        payload: {
            tickets: ticket
        }
    }
}

/**Get user tickets */
export const getOwnTickets = (user) => {
    return {
        type: GET_TICKETS_BYUSER_REQUEST,
        payload:{
            user: user
        }
    }
}

/**Get non-user tickets */
export const getOtherUserTickets = (user) => {
    return {
        type: GET_OTHERUSER_TICKETS_REQUEST,
        payload:{
            user: user
        }
    }
}

/**Update ticket's user by id */
export const updateTicketUserById = (id, user) => {
    return {
        type: UPDATE_USER_TICKET_BYID_REQUEST,
        payload:{
            id: id,
            user: user
        }
    }
}
