import { useSelector } from "react-redux";
// import { selectContacts } from "../../redux/contactsSlice";
// import { selectNameFilter } from "../../redux/filtersSlice";
import { selectFilteredContacts } from '../../redux/contactsSlice';

import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = () => {

    const filteredContacts = useSelector(selectFilteredContacts);

//   if (!filteredContacts.length) {
//     return <p>No contacts found.</p>;
//   }
    return (
        <ul className={styles.contacts}>
            {filteredContacts.map(contact => {
                return (<li key={contact.id}>
                    <Contact
                        contact={contact} />
                </li>)
            })}
      </ul>
  )
}

export default ContactList;