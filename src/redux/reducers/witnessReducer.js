import { combineReducers } from 'redux';

const witnessReducer = (state = [], action) => {
    // console.log('in witness reducer', action);

    switch (action.type) {
        case 'WITNESS_REDUCER':
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    witnessReducer,
});
