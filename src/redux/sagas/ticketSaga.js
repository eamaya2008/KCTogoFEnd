import {put, call, takeLatest} from 'redux-saga/effects';
import apiCall from '../api';
import {conexApi} from '../../assets/conexConfig'
import { 
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

/**Gets all the user's tickets **/
export function* getOwnTickets({payload}) {
 try {
    const result = yield call(apiCall, 'get', conexApi + 'tickets/byUsuState?usuario=' + payload.user)
    yield put({
        type: GET_TICKETS_BYUSER_SUCCESS, 
        payload:{
            tickets: result
        }
    })
} catch (error) {
     yield put({
         type: GET_TICKETS_BYUSER_ERROR,
         payload:{
             error: error
         }
     })
 }
}

/**Gets all the foreing's tickets **/
export function* getOtherUserTickets({payload}) {
    try {
       const result = yield call(apiCall, 'get', conexApi + 'tickets/byUsuState?usuario=' + payload.user)
       yield put({
           type: GET_OTHERUSER_TICKETS_SUCCESS, 
           payload:{
               tickets: result
           }
       })
   } catch (error) {
        yield put({
            type: GET_OTHERUSER_TICKETS_ERROR,
            payload:{
                error: error
            }
        })
    }
   }

/**Update ticket's user by id */
export function* updateTicketUserById({payload}) {
    try {
       yield call(apiCall, 'get', conexApi + 'tickets/updateUsuById?id=' + payload.id + '&usuario=' + payload.user)
       yield put({
           type: UPDATE_USER_TICKET_BYID_SUCCESS
       })
   } catch (error) {
        yield put({
            type: UPDATE_USER_TICKET_BYID_ERROR,
            payload:{
                error: error
            }
        })
    }
   }
//Watcher
export default function* tickets(){
    yield takeLatest(GET_TICKETS_BYUSER_REQUEST, getOwnTickets);
    yield takeLatest(GET_OTHERUSER_TICKETS_REQUEST, getOtherUserTickets);
    yield takeLatest(UPDATE_USER_TICKET_BYID_REQUEST, updateTicketUserById);
}

