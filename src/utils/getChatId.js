export const getChatId = (num1, num2) => {
  const min = Math.min(Number(num1), Number(num2));
  const max = Math.max(Number(num1), Number(num2));
  return String(min) + String(max);
};
