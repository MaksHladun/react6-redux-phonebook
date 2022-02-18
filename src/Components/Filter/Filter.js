import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/actions';
import { getFilter } from '../../redux/selectors';

const Filter = () => {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    return (
        <>
            <h2>Find contacts by name</h2>
            <input
                type="text"
                id="filter"
                name="filter"
                value={filter}
                onChange={e => dispatch(changeFilter(e.target.value))}
            />
        </>
    );
};

export default Filter;
