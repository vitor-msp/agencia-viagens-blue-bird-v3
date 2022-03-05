export const formatDateTime = (fullDateTime) => {
  const dateTime = new Date(fullDateTime);

  const time = `${addLeftZero(dateTime.getHours())}:${addLeftZero(
    dateTime.getMinutes()
  )}`;

  const date = `
    ${addLeftZero(dateTime.getDate())}/${addLeftZero(
    dateTime.getMonth() + 1
  )}/${addLeftZero(dateTime.getFullYear(), 4)}`;

  return `${time} ${date}`;
};

export const formatDate = (fullDateTime) => {
  const dateTime = new Date(fullDateTime);

  const date = `
  ${addLeftZero(dateTime.getFullYear(), 4)}-${addLeftZero(
    dateTime.getMonth() + 1
  )}-${addLeftZero(dateTime.getDate())}`;

  return date.trim();
};

const addLeftZero = (number, size = 2) => {
  const len = number.toString().length;
  let formatNumber = ``;

  if (len < size) {
    for (let i = 0; i < size - len; i++) {
      formatNumber += `0`;
    }
  }

  formatNumber += number.toString();
  return formatNumber;
};
