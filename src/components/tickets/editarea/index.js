import { connect } from 'react-redux';
import EditArea from './EditArea.js'

const mapStateToProps = (state) => {
    return {
        ticketSelected: state.ticket.ticketSelected
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditArea);