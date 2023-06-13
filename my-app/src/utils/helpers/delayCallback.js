export function delayCallback(callback, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = callback();
      resolve(result);
    }, delay);
  });
}