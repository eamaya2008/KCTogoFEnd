import { connect } from 'react-redux';
import Tickets from './Tickets'
import {
    getOwnTickets,
    getOtherUserTickets,
    updateTicketUserById
} from '../../redux/actions/ticketActions'

const mapStateToProps = (state) => {
    return {
        ownTickets: state.ticket.ownTickets,
        otherUserTickets: state.ticket.otherUserTickets,
        error: state.ticket.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getOwnTickets: (user)=> dispatch(getOwnTickets(user)),
        getOtherUserTickets: (user)=> dispatch(getOtherUserTickets(user)),
        updateTicketUserById: (id, user) => dispatch(updateTicketUserById(id, user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tickets);