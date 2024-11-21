import { useDispatch} from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

import styles from "./Contact.module.css";

const Contact = (props) => {
  const { name, number, id } = props;
  
  const dispatch = useDispatch();
  
    const onDeleteContact = (contactId) => {
    const action = deleteContact(contactId);

    dispatch(action);
  };

  return (
      <div className={styles.contact}>
          <div>
              <p className={styles.name}><FaUser className={styles.icons}/>{name}</p>
              <p><FaPhoneAlt className={styles.icons}/>{number}</p>
          </div>
          <button className={styles.button} onClick={() => onDeleteContact(id)} type="button">Delete</button>
    </div>
  )
}

export default Contact