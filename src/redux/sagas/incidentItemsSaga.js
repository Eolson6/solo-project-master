import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addVehicle(action){
    console.log('in add vehicle saga', action );
    try{
        console.log('axios', action);
        
        yield axios.post('/api/vehicle', action.payload);
        
    } catch (error) {
        console.log('error in vehicle saga', error);
        alert('error', error)
        
    }
}
    
function* addWitness(action) {
    try {
        yield axios.post('/api/witness', action.payload)
    } catch (error) {
        console.log('error in witness saga', error);
        alert('error', error)

    }
}

function* addImage(action) {
    console.log('in addImage saga', action);
    
    try {
        yield axios.post('/api/image', action.payload)
    } catch (error) {
        console.log('error in image saga', error);
        alert('error', error)

    }
}

function* addFacts(action) {
    console.log('in addFacts saga', action);
    try {
        yield axios.post('/api/facts', action.payload)
    } catch (error) {
        console.log('error in facts saga', error);
        alert('error', error)

    }
}


function* postIncidentItemsSaga() {
    yield takeLatest('ADD_NEW_VEHICLE', addVehicle);
    yield takeLatest('ADD_NEW_WITNESS',  addWitness);
    yield takeLatest('ADD_NEW_IMAGE',  addImage);
    yield takeLatest('ADD_NEW_FACT', addFacts );
}

export default postIncidentItemsSaga;
