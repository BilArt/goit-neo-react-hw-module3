import { useId } from "react";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

const FeedbackForm = () => {
    const nameFieldId = userId();
    const emailFieldId = useId();
}

const ContactForm = () => {
  return (
    <div>
      <Form>
        <label htmlFor={nameFieldId}>Username</label>
        <Field type="text" name="username" id={nameFieldId} />

        <label htmlFor={emailFieldId}>Email</label>
        <Field type="email" name="email" id={emailFieldId} />
      </Form>
    </div>
  );
};

export default ContactForm;
