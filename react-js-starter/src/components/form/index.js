import React from "react";
import { useInput } from "../../hooks/useFormInput";
import $ from "./index.module.scss";

const Form = () => {
  const firstName = useInput("", true);
  const lanstName = useInput("", true);
  const phoneNumber = useInput("", true);
  const address = useInput("", true);

  const submitForm = (e) => {
    e.preventDefault();
    const data = {
      firstName: firstName.value,
      lanstName: lanstName.value,
      phoneNumber: phoneNumber.value,
      address: address.value,
    };
    console.log(data);
  };

  return (
    <div className={$.formContainer}>
      <form onSubmit={submitForm} className={$.form}>
        <input
          className={`${$.input} ${firstName.error && $.nputError}`}
          type="text"
          placeholder="First Name"
          {...firstName}
        />
        <div className={$.inputErrorMessage}>{firstName.error}</div>
        <input
          className={`${$.input} ${lanstName.error && $.error}`}
          type="text"
          placeholder="Last Name"
          {...lanstName}
        />
        <div className={$.inputErrorMessage}>{lanstName.error}</div>
        <input
          className={`${$.input} ${phoneNumber.error && $.error}`}
          type="text"
          placeholder="Phone Number"
          {...phoneNumber}
        />
        <div className={$.inputErrorMessage}>{phoneNumber.error}</div>
        <input
          className={`${$.input} ${address.error && $.error}`}
          type="text"
          placeholder="Address"
          {...address}
        />
        <div className={$.inputErrorMessage}>{address.error}</div>
        <button className={$.button} type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;
