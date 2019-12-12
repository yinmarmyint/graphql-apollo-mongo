import React from "react";
import { Form, Button, SelectPicker } from "rsuite";
import { Formik } from "formik";
import Field from "../../../components/fields/Field";
import AuthorField from "../../../components/fields/AuthorField";
import GenreField from "../../../components/fields/GenreField";

const BookForm = props => {
  const { onClose, onFormSubmit } = props;

  return (
    <Formik
      enableReinitialize
      initialValues={props.region || { name: "", genre: "", authorId: "" }}
      onSubmit={onFormSubmit}
      render={({ handleSubmit }) => (
        <Form fluid onSubmit={handleSubmit}>
          <Field name="name" label="Name" type="text" isRequired />
          {/* <Field name="genre" label="Genre" type="text" isRequired /> */}
          <GenreField name="genre" />

          {/* <Field name="authorId" label="Author" type="text" isRequired /> */}
          <AuthorField name="authorId" />
          <div className="d-flex justify-content-end">
            <Button onClick={onClose} appearance="subtle" className="mr-2">
              Cancel
            </Button>
            <Button color="cyan" type="submit">
              Create
            </Button>
          </div>
        </Form>
      )}
    />
  );
};

export default BookForm;
