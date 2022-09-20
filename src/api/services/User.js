export const setUserFormData = ({
  firstName,
  lanstName,
  phoneNumber,
  address,
}) => {
  localStorage.setItem("firstName", firstName);
  localStorage.setItem("lastName", lanstName);
  localStorage.setItem("phoneNumber", phoneNumber);
  localStorage.setItem("address", address);
};

export const getUserFormData = () => {
  const result = [];
  result.push({
    firstName: localStorage.getItem("firstName"),
    lanstName: localStorage.getItem("lanstName"),
    phoneNumber: localStorage.getItem("phoneNumber"),
    address: localStorage.getItem("address"),
  });
  console.log(result);
};

export const UserService = {
  setUserFormData,
  getUserFormData,
};
