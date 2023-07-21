import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import { nanoid } from 'nanoid';
import Button from '@mui/material/Button';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();

  const handleClick = e => {
    dispatch(deleteContact(e.target.id));
  };

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(contact => {
        return (
          <li className={css.contact} key={nanoid()}>
            <div>
              {contact.name}: {contact.number}
            </div>
            <Button
              variant="outlined" 
              type="button"
              id={contact.id}
              onClick={handleClick}
              color="error"
            >
              Delete
            </Button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
