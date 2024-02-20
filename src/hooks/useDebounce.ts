import { useRef } from "react";

export default function useDebounce(fn: Function, delay: number = 300) {
  const timer = useRef<NodeJS.Timeout>();
  return function (...args: any[]) {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
