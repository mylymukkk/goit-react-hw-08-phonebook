import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ThreeDots } from 'react-loader-spinner';

import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';

import css from 'common/formPages.module.css';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      <h1 className={css.mainTitle}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.sectionTitle}>Contacts</h2>
      <Filter />
      {isLoading && !error && (
        <ThreeDots color="#1976d2" width="30" height="30" />
      )}
      <ContactList />
    </div>
  );
};

export default Contacts;
