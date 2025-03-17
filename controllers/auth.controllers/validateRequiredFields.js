const validateRequiredFields = (
  name,
  username,
  email,
  password,
  status,
  message,
) => {
  // If any of the fields is undefined or null, throw custom error
  if (!name || !username || !email || !password) {
    const error = new Error();
    error.status = status;
    error.message = message;

    throw error;
  }

  return;
};

module.exports = validateRequiredFields;
