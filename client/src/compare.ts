// Comparsion of the original array and the choices of the user
export const compare = (numberArr: [], orderArr: any): Boolean => {
  let result = true;

  if (!result) {
    return result;
  }

  const sorted = [...numberArr].sort();

  for (let i = 0; i <= orderArr.length - 1; i++) {
    result = sorted[i] === orderArr[i] ? true : false;
  }

  return result;
};
