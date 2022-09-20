import React, { useRef, useEffect } from "react";
import { useInput } from "../../hooks/useFormInput";
import $ from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { UserService } from "../../api/services/User";

const Form = () => {
  const firstName = useInput("", true);
  const lanstName = useInput("", true);
  const phoneNumber = useInput("", true);
  const address = useInput("", true);
  let navigate = useNavigate();
  const inputRef = useRef()


  useEffect(() => {
    inputRef.current.focus()
  }, [])
  


  const submitForm = (e) => {
    e.preventDefault();
    const data = {
      firstName: firstName.value,
      lanstName: lanstName.value,
      phoneNumber: phoneNumber.value,
      address: address.value,
    };
    UserService.setUserFormData(data);
    navigate("/pokemon-list", { replace: true });
  };

  return (
    <div className={$.formContainer}>
      <form onSubmit={submitForm} className={$.form}>
        <input
          className={`${$.input} ${firstName.error && $.inputError}`}
          type="text"
          name="name"
          required
          autoFocus
          placeholder="First Name"
          ref={inputRef}
          {...firstName}
        />
        <div className={$.inputErrorMessage}>{firstName.error}</div>
        <input
          className={`${$.input} ${lanstName.error && $.inputError}`}
          type="text"
          name="last name"
          required
          placeholder="Last Name"
          {...lanstName}
        />
        <div className={$.inputErrorMessage}>{lanstName.error}</div>
        <input
          className={`${$.input} ${phoneNumber.error && $.inputError}`}
          type="text"
          name="number"
          required
          placeholder="Phone number"
          {...phoneNumber}
        />
        <div className={$.inputErrorMessage}>{phoneNumber.error}</div>
        <input
          className={`${$.input} ${address.error && $.inputError}`}
          type="text"
          name="address"
          required
          placeholder="Address"
          {...address}
        />
        <div className={$.inputErrorMessage}>{address.error}</div>
        <button
          className={$.button}
          type="submit"
          disabled={
            firstName.error ||
            lanstName.error ||
            phoneNumber.error ||
            address.error
          }
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;
