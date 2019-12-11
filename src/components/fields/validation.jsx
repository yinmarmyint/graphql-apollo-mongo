export const required = value => {
  if (value && typeof value === "string" && value.trim() !== "") {
    return undefined;
  }
  if (value && value.constructor === Array && value.length > 0) {
    return undefined;
  }
  if (value && typeof value === "number") {
    return undefined;
  }
  return "Required field";
};

// (value && value.trim() !== '' ? undefined : 'This is a required field.');

export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const maxLength255 = maxLength(255);

export const phoneNumber = value =>
  value && !/^(09[1-9][0-9]{6,9})$/i.test(value)
    ? "Invalid phone number, must be in (09xxxxxxx, 09xxxxxxxx, 09xxxxxxxxx)"
    : undefined;

export const percentage = value =>
  value > 100 ? "Invalid percentage amount" : undefined;

export const number = value =>
  value && Number.isNaN(Number(value)) ? "Must be a number" : undefined;

export const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined;

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;

export const username = value =>
  value && !/^[A-Z0-9_]+$/i.test(value) ? "Invalid username" : undefined;

export const keyValidation = value =>
  value && value.length !== 3 ? "Must be 3 characters" : undefined;

export const customFieldValidation = (value, validations) => {
  for (const validation of validations) {
    const result = validation(value);
    if (result) {
      return result;
    }
  }
  return null;
};
