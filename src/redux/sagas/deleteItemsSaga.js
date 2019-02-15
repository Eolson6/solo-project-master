import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';




function* deleteVehicle(action) {
    console.log('action.payload delete', action.payload);
    const id = action.payload
    console.log('in delete vehicle', id);

    try {
        //updated next actin type from SET to GET- also updated what
        //was being sent
        yield axios.delete(`/api/vehicle/${action.payload}`)
        const nextAction = { type: 'VEHICLE_REDUCER' };
        yield put(nextAction);
    } catch (error) {
        console.log('error in delete vehicles', error);
        alert('error in deleting vehicle')
    }
}

function* deleteImage(action) {
    console.log('action.payload delete', action.payload);
    const id = action.payload
    console.log('in delete image', id);

    try {
        //updated next actin type from SET to GET- also updated what
        //was being sent
        yield axios.delete(`/api/image/${action.payload}`)
        const nextAction = { type: 'GET_IMAGES' };
        yield put(nextAction);
    } catch (error) {
        console.log('error in delete image', error);
        alert('error in deleting image')
    }
}

function* deleteWitness(action) {
    console.log('action.payload delete witness', action.payload);
    const id = action.payload
    console.log('in delete witness', id);

    try {
        //updated next actin type from SET to GET- also updated what
        //was being sent
        yield axios.delete(`/api/witness/${action.payload}`)
        const nextAction = { type: 'WITNESS_REDUCER' };
        yield put(nextAction);
    } catch (error) {
        console.log('error in delete witness', error);
        alert('error in deleting witness')
    }
}

function* deleteFact(action) {
    console.log('action.payload delete fact', action.payload);
    const id = action.payload
    console.log('in fact', id);

    try {
        //updated next actin type from SET to GET- also updated what
        //was being sent
        yield axios.delete(`/api/facts/${action.payload}`)
        const nextAction = { type: 'FACT_REDUCER' };
        yield put(nextAction);
    } catch (error) {
        console.log('error in fact witness', error);
        alert('error in fact witness')
    }
}

function* deleteItemsSaga() {
    yield takeLatest('DELETE_VEHICLE', deleteVehicle);
    yield takeLatest('DELETE_IMAGE', deleteImage);
    yield takeLatest('DELETE_WITNESS', deleteWitness);
    yield takeLatest('DELETE_FACT', deleteFact);
  
}

export default deleteItemsSaga;