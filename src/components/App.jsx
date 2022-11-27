import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Loader } from './Loader';
import { useSelector } from 'react-redux';
import {
  contactsFromRedux,
  isLoadingFromRedux,
  getError,
} from 'Redux/Selector';
import { Layout, Title } from './App.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'Redux/Operations';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsFromRedux);
  const isLoading = useSelector(isLoadingFromRedux);
  const error = useSelector(getError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <Title>Phonebook</Title>
      <ContactForm />
      {error && <p>{error}</p>}
      <h2>Contacts</h2>
      {contacts?.length === 0 && (
        <>
          <Filter />
          <ContactList />
        </>
      )}
      {!isLoading && !error && !contacts && <p>There is no contacts</p>}
      {isLoading && <Loader />}
    </Layout>
  );
};
