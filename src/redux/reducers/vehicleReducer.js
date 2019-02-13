
import { combineReducers } from 'redux';

const vehicleReducer = (state = {}, action) => {
    console.log('in vehicle reducer', action);

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
// export default vehicleReducer;
