// import React, { useState } from 'react';

import Form from './Components/Form/Form';
import ContactList from './Components/Contacts/ContactList';
import Filter from './Components/Filter/Filter';
// import useLocalStorage from './Hooks/Hooks';
import './App.css';

function App() {
    // const [contacts, setContacts] = useLocalStorage('contacts', []);
    // const [filter, setFilter] = useState('');

    // const formSubmitHandler = ({ name, number }) => {
    //     if (dontAddContacts(name)) {
    //         alert(`${name} is already in contacts`);
    //         return;
    //     }
    //     const newContact = { id: uuidv4(), name, number };
    //     return setContacts(prevState => [newContact, ...prevState]);
    // };

    // const changeFilter = e => setFilter(e.target.value);

    // const dontAddContacts = name => {
    //     name = name.toLowerCase();
    //     return (
    //         contacts.filter(contact =>
    //             contact.name.toLowerCase().includes(name),
    //         ).length > 0
    //     );
    // };

    // const filterContact = () => {
    //     const normalizedFilter = filter.toLowerCase();
    //     return contacts.filter(contact =>
    //         contact.name.toLowerCase().includes(normalizedFilter),
    //     );
    // };

    // const deleteContact = contactId =>
    //     setContacts(prevState =>
    //         prevState.filter(contact => contact.id !== contactId),
    //     );

    return (
        <div className="container">
            <h1>Phonebook</h1>
            <Form />
            <h1>Contacts</h1>
            <Filter />
            <ContactList />
        </div>
    );
}

export default App;
