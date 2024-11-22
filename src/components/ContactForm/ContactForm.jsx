import styles from "./ContactForm.module.css"

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { AddContactSchema } from "../../utils/schemas";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const ContactForm = ({onSearch}) => {

  const INITIAL_VALUES = {
    name: '',
    number: ''
  }

  // const SearchProductForm = ({ onSearch }) => {
  // const handleSubmit = (values, actions) => {
  //   // values => { searchTerm: "search text" }
  //   onSearch(values.searchTerm);
  //   actions.resetForm();
  // };

  const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
    onSearch(values.name);
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <div>
      <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit} validationSchema={AddContactSchema}>
        <Form className={styles.form}>
          <label className={styles.name}>Name
          <Field className={styles.field} type="text" name="name" />
            <ErrorMessage className={styles.error} name="name" component="span" />
          </label>
      
          <label className={styles.number}>Number
          <Field className={styles.field} type="text" name="number"/>
            <ErrorMessage className={styles.error} name="number" component="span" />
          </label>
          <button className={styles.btn} type='submit'>Add contact</button>
        </Form>
      </Formik>
    </div>
  )
}

export default ContactForm