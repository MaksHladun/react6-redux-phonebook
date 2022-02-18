import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/actions';

const Contakts = ({ id, name, number }) => {
    const dispatch = useDispatch();
    return (
        <li>
            {' '}
            <p>
                {name}: {number}
            </p>
            <button
                className="btn"
                type="button"
                onClick={() => dispatch(deleteContact(id))}
            >
                Delete
            </button>
        </li>
    );
};
Contakts.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};

export default Contakts;
