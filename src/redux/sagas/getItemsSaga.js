import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getVehicle(action) {
    try {
        const items = yield axios.get('/api/vehicle', action.payload)
        console.log('in getItems', action);
        const nextAction = { type: 'ADD_VEHICLE_REDUCER', payload: items.data };
        yield put(nextAction)
    } catch(error) {
        console.log('error in get', error );
        alert(error)        
    }
}

function* getIncidentItemsSaga() {
    yield takeLatest('GET_VEHICLES', getVehicle);
   

}

export default getIncidentItemsSaga;
