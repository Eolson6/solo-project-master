import { combineReducers } from 'redux';

const IncidentItems = (state = [], action) => {
    console.log('in incidentItem');
    
    switch (action.type) {
        case 'ADD_NEW_ITEM':
        return action.payload
        default:
            return state;
    }
};

export default combineReducers({
    IncidentItems,
});
