const mean = function(arr) {

  let meanResult = 0;
  let meanSum = 0;

  for (let i = 0; i < arr.length; i++) {
    meanSum += arr[i];

    meanResult = meanSum / arr.length;

  }

  return meanResult;

}

console.log(mean([6, 2, 3, 4, 9, 6, 1, 0, 5]));