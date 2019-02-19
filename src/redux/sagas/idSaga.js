import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* getCurrentIdSaga (action) {
    try {
        const items = yield axios.get('/api/incident/id', action.payload)
        console.log('in get id saga', action);
        const nextAction = { type: 'GET_CURRENT_ID', payload: items.data };
        yield put(nextAction)
    } catch (error) {
        console.log('error in get incident saga', error);
        alert(error)
    }
}


function* getIncidentIdSaga() {
    
    yield takeLatest('GET_CURRENT_ID_SAGA', getCurrentIdSaga)


}

export default getIncidentIdSaga;
