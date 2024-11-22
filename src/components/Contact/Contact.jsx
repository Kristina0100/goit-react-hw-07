import { useDispatch} from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

import styles from "./Contact.module.css";

const Contact = ({contact}) => {
  
  const dispatch = useDispatch();
  
    const handleDelete = () => {
    dispatch(deleteContact(contact.id))
  };

  return (
      <div className={styles.contact}>
          <div>
              <p className={styles.name}><FaUser className={styles.icons}/>{contact.name}</p>
              <p><FaPhoneAlt className={styles.icons}/>{contact.number}</p>
          </div>
          <button className={styles.button} onClick={() => handleDelete} type="button">Delete</button>
    </div>
  )
}

export default Contact;