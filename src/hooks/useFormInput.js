import { useState } from "react";

export const useInput = (initial, required) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  return {
    value,
    error,
    onChange: (e) => {
      setValue(e.target.value);
      if (
        (!e.target.value && required) ||
        (e.target.name !== "number" && !isNaN(e.target.value))
      )
        setError(`Please input real ${e.target.name}!`);
      else if (e.target.name === "number" && isNaN(e.target.value))
        setError("You ust input only numbers!");
      else setError(null);
    },
  };
};
