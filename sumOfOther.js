function sumOfOther(arr) {
  const resultArr = [];
  let sumOfArray = 0;

  for (let i = 0; i < arr.length; i++) {
    sumOfArray += arr[i];
  }

  for (let i = 0; i < arr.length; i++) {
    resultArr.push(sumOfArray - arr[i]);
  }
  console.log(resultArr);
  return resultArr;
}
sumOfOther([2, 3, 4, 1]);