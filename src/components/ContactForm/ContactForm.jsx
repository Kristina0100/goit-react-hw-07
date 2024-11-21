import styles from "./ContactForm.module.css"

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { AddContactSchema } from "../../utils/schemas";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

import { nanoid } from 'nanoid';

const ContactForm = () => {

  const INITIAL_VALUES = {
    name: '',
    number: ''
  }

  const dispatch = useDispatch();

  const onAddContact = (formData) => {
    const finalContact = {
      ...formData,
      id: nanoid(),
    };

    const action = addContact(finalContact);
    dispatch(action);
  };

  
  const handleSubmit = (values, actions) => {
    onAddContact(values);
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