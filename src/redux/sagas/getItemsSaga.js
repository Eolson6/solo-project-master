import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getVehicle(action) {
    try {
        const items = yield axios.get('/api/vehicle', action.payload)
        console.log('in getItems', action);
        const nextAction = { type: 'VEHICLE_REDUCER', payload: items.data };
        yield put(nextAction)
    } catch (error) {
        console.log('error in get vehicle saga', error);
        alert(error)
    }
}

function* getWitness(action) {
    try {
        const items = yield axios.get('/api/witness', action.payload)
        console.log('in get witness', action);
        const nextAction = { type: 'WITNESS_REDUCER', payload: items.data };
        yield put(nextAction)
    } catch (error) {
        console.log('error in get witness saga', error);
        alert(error)
    }
}

function * getImages(action) {
    try {
        const items =yield axios.get('/api/image', action.payload)
        console.log('in get image saga', action);
        const nextAction = {type: 'IMAGE_REDUCER', payload: items.data };
        yield put (nextAction)
    } catch(error) {
        console.log('error in get imags saga', error);
        alert(error)
    }
}

function* getIncident(action) {
    try {
        const items = yield axios.get('/api/incident', action.payload)
        console.log('in get incident saga', action);
        const nextAction = { type: 'INCIDENT_REDUCER', payload: items.data };
        yield put(nextAction)
    } catch (error) {
        console.log('error in get incident saga', error);
        alert(error)
    }
}

function* getIncidentItemsSaga() {
    yield takeLatest('GET_VEHICLES', getVehicle);
    yield takeLatest('GET_WITNESSES', getWitness);
    yield takeLatest('GET_IMAGES', getImages);
    yield takeLatest('GET_INCIDENT', getIncident)


}

export default getIncidentItemsSaga;
