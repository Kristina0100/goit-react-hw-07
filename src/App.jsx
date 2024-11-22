import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contactsOps';

import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

function App() {

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.contacts.isLoading);
  const error = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <ContactForm/>
          <SearchBox />
          {isLoading && !error && <b>Request in progress...</b>} 
          <ContactList />
        </div>
      </>
    )
  }

export default App;
