import { combineReducers } from 'redux';

const vehicleReducer = (state = [], action) => {
    console.log('in incidentItem');

    switch (action.type) {
        case 'ADD_NEW_VEHICLE':
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    vehicleReducer,
});
