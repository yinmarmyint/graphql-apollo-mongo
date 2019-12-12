import React from "react";
import _ from "lodash";
import { Field as FormikField } from "formik";
import { FormGroup, ControlLabel, HelpBlock, SelectPicker } from "rsuite";
import { customFieldValidation, required } from "./validation";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_GENRE = gql`
  {
    __type(name: "GenreType") {
      enumValues {
        name
      }
    }
  }
`;

const InputComponet = ({
  componentClass,
  label,
  field, // { name, value, onChange, onBlur }
  type,
  onSelect,
  form: { touched, errors, setFieldValue },
  ...props
}) => {
  const { data } = useQuery(GET_GENRE);

  const genreData = _.map(data && data.__type && data.__type.enumValues, d => ({
    label: d && d.name,
    value: d && d.name
  }));
  console.log("type===", data && data.__type && data.__type.enumValues);
  return (
    <FormGroup>
      <ControlLabel>{label}</ControlLabel>
      <SelectPicker
        // {...props}
        searchable={false}
        data={genreData}
        defaultValue={field.value}
        appearance="default"
        placeholder="Select GENRE"
        onSelect={value => {
          // props.getBranchesOfBusiness(value);
          if (typeof onSelect === "function") {
            onSelect(value);
          }
          setFieldValue(field.name, value);
        }}
        block
      />

      {touched[field.name] && errors[field.name] && (
        <HelpBlock style={{ color: "red" }}>{errors[field.name]}</HelpBlock>
      )}
    </FormGroup>
  );
};

const GenreField = props => {
  const {
    label,
    name,
    componentClass,
    placeholder,
    type,
    title,
    data,
    isRequired,
    onSelect
  } = props;
  const validate = [];
  if (isRequired) {
    validate.push(required);
  }

  const valid = value => customFieldValidation(value, validate);
  return (
    <FormikField
      {...props}
      name={name}
      type={type}
      component={InputComponet}
      label={label}
      componentClass={componentClass}
      placeholder={placeholder}
      title={title}
      data={data}
      validate={valid}
      onSelect={onSelect}
    />
  );
};

export default GenreField;
