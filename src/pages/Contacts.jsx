import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoading, selectError } from 'redux/selectors';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import UserMenu from 'components/UserMenu/UserMenu';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div>
      <UserMenu/>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading ? <div>Loading...</div> : <ContactList />}
      {error && <div>Something go wrong... Try again!</div>}
    </div>
  );
};

export default Contacts;
