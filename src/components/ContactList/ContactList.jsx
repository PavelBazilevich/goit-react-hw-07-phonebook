import { nanoid } from 'nanoid/non-secure';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'Redux/Operations';
import { filterFromRedux, contactsFromRedux } from 'Redux/Selector';
// import PropTypes from 'prop-types';
import css from 'components/ContactList/ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filters = useSelector(filterFromRedux);
  const contacts = useSelector(contactsFromRedux);
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filters.toLowerCase())
  );

  const createMarcup = () => {
    return filteredContacts.map(contact => {
      return (
        <li key={nanoid()} id={contact.id}>
          <span
            className={css.item_content}
          >{`${contact.name}: ${contact.phone}`}</span>
          <button
            className={css.deleted_button}
            data-id={contact.id}
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </button>
        </li>
      );
    });
  };

  return <ul>{createMarcup()}</ul>;
};
