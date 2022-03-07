export const isLogged = () => {
  try {
    const BBJwtInfo = JSON.parse(localStorage.getItem("BBJwtInfo"));
    const email = BBJwtInfo.email;
    return email;
  } catch (error) {
    return null;
  }
};
