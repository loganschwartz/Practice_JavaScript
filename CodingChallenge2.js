var johnAverageScore = (89 + 120 + 103) / 3;
var mikeAverageScore = (116 + 94 + 123) / 3;
var maryAverageScore = (97 + 134 + 105) / 3;
console.log(johnAverageScore, mikeAverageScore, maryAverageScore);

if (
  johnAverageScore > mikeAverageScore &&
  johnAverageScore > maryAverageScore
) {
  console.log(
    "John's team is the winner. His team scored " +
      johnAverageScore +
      " points."
  );
} else if (
  mikeAverageScore > johnAverageScore &&
  mikeAverageScore > maryAverageScore
) {
  console.log(
    "Mike's team is the winner. His team scored " +
      mikeAverageScore +
      " points."
  );
} else if (
  maryAverageScore > johnAverageScore &&
  maryAverageScore > mikeAverageScore
) {
  console.log(
    "Mary's team is the winner. Her team scored " +
      maryAverageScore +
      " points."
  );
} else {
  console.log("There is a draw");
}

/*if (johnAverageScore > mikeAverageScore) {
  console.log(
    "John's team is the winner" +
      " " +
      "John's team scored " +
      johnAverageScore +
      " points"
  );
} else if (mikeAverageScore > johnAverageScore) {
  console.log(
    "Mike's team is the winner " +
      "Mike's team scored " +
      mikeAverageScore +
      " points"
  );
} else {
  console.log("There is a draw");
}*/
