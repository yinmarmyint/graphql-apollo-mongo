import React from "react";
import _ from "lodash";
import { Field as FormikField } from "formik";
import { FormGroup, ControlLabel, HelpBlock, SelectPicker } from "rsuite";
import { customFieldValidation, required } from "./validation";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_AUTHORS = gql`
  {
    authors {
      name
      id
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
  const { data } = useQuery(GET_AUTHORS);
  const authData = _.map(data && data.authors, auth => ({
    label: auth && auth.name,
    value: auth && auth.id
  }));
  console.log("data", authData);
  return (
    <FormGroup>
      <ControlLabel>{label}</ControlLabel>
      <SelectPicker
        // {...props}
        searchable={false}
        data={authData}
        defaultValue={field.value}
        appearance="default"
        placeholder="Select Business"
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

const AuthorField = props => {
  // useEffect(() => {
  //   const getBusinesses = props.getAllBusiness;
  //   getBusinesses();
  // }, [props.getAllBusiness]);
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

// function mapStateToProps({ business }) {
//   return {
//     businessdata: _.map(business.data, businesses => ({
//       label: businesses && businesses.name,
//       value: businesses && businesses.id
//     }))
//   };
// }

export default AuthorField;
