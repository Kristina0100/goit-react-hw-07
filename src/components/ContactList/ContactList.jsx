import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter} from "../../redux/filtersSlice";

import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = () => {

    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);

    const filteredUsers = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );
    
    return (
        <ul className={styles.contacts}>
            {filteredUsers.map(contact => {
                return (<li key={contact.id}>
                    <Contact
                        name={contact.name}
                        number={contact.number}
                        id={contact.id}/>
                </li>)
            })}
      </ul>
  )
}

export default ContactList;