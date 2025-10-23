import { useState, useEffect } from "react";

const encodeSuggestions = (suggestions: string[]) => {
  return suggestions?.map((suggestion) => ({ title: suggestion })) || [];
};

export function useLocalStorage(
  key: string,
  initialValue: string[] = [],
): [{ title: string }[], (value: string) => void] {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(`Error writing to localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  const addNewSuggestion = (suggestion: string) => {
    setStoredValue((prev: string) => {
      if (prev.includes(suggestion)) {
        return prev;
      }
      return [...prev, suggestion];
    });
  };

  return [encodeSuggestions(storedValue), addNewSuggestion];
}
