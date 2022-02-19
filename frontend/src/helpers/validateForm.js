export const validateForm = (fields) => {
  if (Object.values(fields).some((field) => field === null)) {
    return false;
  }
  return true;
};