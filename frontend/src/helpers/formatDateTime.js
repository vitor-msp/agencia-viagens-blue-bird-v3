export const formatDateTime = (dateTime) => {
  const array = dateTime.split(" ");
  return `${array[0].split("-").reverse().join("/")} ${array[1]}`;
};
