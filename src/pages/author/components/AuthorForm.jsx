import React from "react";
import { Button, Form } from "rsuite";
import { Formik } from "formik";
import Field from "../../../components/fields/Field";

const AuthorForm = props => {
  const { onClose, onFormSubmit, author } = props;

  let initialValues;
  if (author) {
    initialValues = {
      name: author.name || "",
      age: author.age || ""
    };
  }
  return (
    <Formik
      enableReinitialize
      initialValues={
        initialValues || {
          name: "",
          age: ""
        }
      }
      onSubmit={onFormSubmit}
      render={({ handleSubmit }) => (
        <Form fluid onSubmit={handleSubmit}>
          <Field name="name" placeholder="Name" />
          <Field name="age" placeholder="Age" />
          <div className="d-flex justify-content-end">
            <Button onClick={onClose} appearance="subtle" className="mr-2">
              Cancel
            </Button>
            <Button color="cyan" type="submit">
              {props.author ? <>Update</> : <>Create</>}
            </Button>
          </div>
        </Form>
      )}
    />
  );
};

export default AuthorForm;
