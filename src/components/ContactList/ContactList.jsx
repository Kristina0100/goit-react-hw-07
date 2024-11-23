import { useSelector } from "react-redux";
import { selectFilteredContacts } from '../../redux/contactsSlice';

import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = () => {

    const filteredContacts = useSelector(selectFilteredContacts);

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
};

export default ContactList;