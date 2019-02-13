import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getItems(action) {
    try {
        const items = yield axios.get('', action.payload)
        console.log('in getItems', items.data);
        const nextAction = {type: 'SET_ITEMS', PAYLOAD: items.data };
        yield put(nextAction)
    } catch(error) {
        console.log('error in get', error );
        alert(error)        
    }
}

export default getItemsSaga;
