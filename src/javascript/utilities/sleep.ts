export const sleep = (duration: number, ...args: unknown[]) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration, ...args);
  });
};
