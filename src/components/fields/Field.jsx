import React from "react";
import { Field as FormikField } from "formik";
import { FormGroup, ControlLabel, HelpBlock, Input } from "rsuite";
import { customFieldValidation, required, phoneNumber } from "./validation";

const InputComponet = ({
  componentClass,
  label,
  type,
  field, // { name, value, onChange, onBlur }
  form: { touched, errors },
  ...props
}) => {
  return (
    <FormGroup>
      <ControlLabel>{label}</ControlLabel>
      <Input
        {...field}
        {...props}
        type={type}
        componentClass={componentClass}
        onChange={(value, event) => {
          field.onChange(event);
        }}
      />
      {touched[field.name] && errors[field.name] && (
        <HelpBlock style={{ color: "red" }}>{errors[field.name]}</HelpBlock>
      )}
    </FormGroup>
  );
};

const Field = props => {
  const {
    label,
    name,
    componentClass,
    placeholder,
    type,
    isRequired,
    validPhoneNumber,
    disabled
  } = props;
  const validate = [];
  if (isRequired) {
    validate.push(required);
  }
  if (validPhoneNumber) {
    validate.push(phoneNumber);
  }
  const valid = value => customFieldValidation(value, validate);
  return (
    <FormikField
      name={name}
      component={InputComponet}
      type={type}
      label={label}
      componentClass={componentClass}
      placeholder={placeholder}
      validate={valid}
      disabled={disabled}
    />
  );
};

export default Field;
