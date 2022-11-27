import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Loader } from './Loader';
import { useSelector } from 'react-redux';
import { selectContacts, selectIsLoading, selectError } from 'Redux/Selector';
import { Layout, Title } from './App.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'Redux/Operations';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <Title>Phonebook</Title>
      <ContactForm />
      {error && <p>{error}</p>}
      <h2>Contacts</h2>
      <Filter />
      {contacts && <ContactList />}
      {!isLoading && !error && !contacts && <p>There is no contacts</p>}
      {isLoading && <Loader />}
    </Layout>
  );
};
