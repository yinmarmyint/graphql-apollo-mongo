import React from "react";
import { connect } from "react-redux";
import { Form, Button } from "rsuite";
import { Formik } from "formik";
import Field from "../../../components/fields/Field";

const RegionForm = props => {
  const { onClose, onFormSubmit } = props;

  return (
    <Formik
      enableReinitialize
      // initialValues={props.region || { name: "" }}
      onSubmit={onFormSubmit}
      render={({ handleSubmit }) => (
        <Form fluid onSubmit={handleSubmit}>
          <Field name="name" label="Name" type="text" isRequired />
          <Field name="age" label="Age" type="text" isRequired />
          <div className="d-flex justify-content-end">
            <Button onClick={onClose} appearance="subtle" className="mr-2">
              Cancel
            </Button>
            <Button color="cyan" type="submit">
              {props.region ? <>Update</> : <>Create</>}
            </Button>
          </div>
        </Form>
      )}
    />
  );
};

export default connect(null, null)(RegionForm);
