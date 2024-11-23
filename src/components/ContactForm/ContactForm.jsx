import { Formik, Form, Field, ErrorMessage } from 'formik';
import { AddContactSchema } from "../../utils/schemas";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

import styles from "./ContactForm.module.css"

const ContactForm = () => {

  const INITIAL_VALUES = {
    name: '',
    number: ''
  }

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact({ name: values.name, number: values.number }));
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
            <Field className={styles.field} type="text" name="number" />
            <ErrorMessage className={styles.error} name="number" component="span" />
          </label>
          <button className={styles.btn} type='submit'>Add contact</button>
        </Form>
      </Formik>
    </div>
  )
};

export default ContactForm;