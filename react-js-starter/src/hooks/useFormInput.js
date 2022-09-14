import { useState } from "react";

export const useInput = (initial, required) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  return {
    value,
    error,
    onChange: (e) => setValue(e.target.value),
    onBlur: (e) => {
      if (!e.target.value && required) setError("This input is required!");
      else setError(null);
    },
  };
};
