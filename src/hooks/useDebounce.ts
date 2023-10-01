import { useEffect, useState } from 'react';

export const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (value !== debouncedValue) {
        setDebouncedValue(value);
      }
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  const onSetDebounceValue = (newValue: string) => {
    setDebouncedValue(newValue);
  };

  return { debouncedValue, onSetDebounceValue };
};
