import { all } from 'redux-saga/effects';

import ticketSaga from './ticketSaga';

export default function* rootSaga() {
    yield all([
        ticketSaga()
    ]);
}