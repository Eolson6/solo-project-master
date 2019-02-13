
import { combineReducers } from 'redux';

const vehicleReducer = (state = [], action) => {
    console.log('in vehicle reducer', action.payload);

    switch (action.type) {
        
        case 'ADD_VEHICLE_REDUCER':
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    vehicleReducer,
});

