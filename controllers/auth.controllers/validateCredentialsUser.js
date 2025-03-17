const validateCredentialsUser = (user, status, message) => {
  // If the user is undefined, throw custom error
  if (!user) {
    const error = new Error();
    error.status = status;
    error.message = message;
    throw error;
  }

  return;
};

module.exports = validateCredentialsUser;
