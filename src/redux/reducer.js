import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, changeFilter } from './actions';

const contacts = createReducer([], {
    [addContact]: (state, action) => [...state, action.payload],
    [deleteContact]: (state, action) =>
        state.filter(contact => contact.id !== action.payload),
});
const filter = createReducer('', {
    [changeFilter]: (_, action) => action.payload,
});

// const contacts = (state = [], { type, payload }) => {
//     switch (type) {
//         case types.ADD:
//             return [...state, payload];
//         case types.DELETE:
//             return state.filter(contact => contact.id !== payload);

//         default:
//             return state;
//     }
// };

// const filter = (state = '', { type, payload }) => {
//     switch (type) {
//         case types.CHANGE_FILTER:
//             return payload;

//         default:
//             return state;
//     }
// };

export default combineReducers({
    contacts,
    filter,
});
