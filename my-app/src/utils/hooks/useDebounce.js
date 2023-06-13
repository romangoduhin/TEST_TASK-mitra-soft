import {useEffect, useState} from "react";

export function useDebounce(value, delay) {
  const [delayedValue, setDelayedValue] = useState(value)

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDelayedValue(value)
    }, delay)

    return () => {
      clearTimeout(timerId)
    }
  }, [value, delay]);

  return delayedValue
}