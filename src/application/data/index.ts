export const buildQueryFN = (client, fn) => {
  return client ? () => fn : new Promise((resolve) => resolve(null));
};
