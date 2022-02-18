import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('phoneBook/add', (name, number) => {
    return {
        payload: { id: uuidv4(), name, number },
    };
});

export const deleteContact = createAction('phoneBook/delete');
export const changeFilter = createAction('phoneBook/changeFilter');
