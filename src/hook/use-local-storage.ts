import React from "react";

interface localStorageProps {
  key: string;
  defaultValue: boolean | string | object;
}

export const useLocalStorage = ({key, defaultValue}: localStorageProps) => {
  const [value, setValue] = React.useState(() => {
    const storedValue = window.localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
  });

  window.localStorage.setItem(key, JSON.stringify(value));

  return [value, setValue];
};
