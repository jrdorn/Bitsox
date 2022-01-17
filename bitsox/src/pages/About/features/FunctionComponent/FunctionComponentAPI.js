//mock function that mimics async data request
export function fetchCount(amount = 1) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ data: amount }), 500);
  });
}
