import Contakts from './Contacts';
import { useSelector } from 'react-redux';
import { mapStateToProps } from '../../redux/selectors';

const ContactList = () => {
    const book = useSelector(mapStateToProps);

    return (
        <ul>
            {book.map(contact => (
                <Contakts
                    key={contact.id}
                    id={contact.id}
                    name={contact.name}
                    number={contact.number}
                />
            ))}
        </ul>
    );
};

export default ContactList;
