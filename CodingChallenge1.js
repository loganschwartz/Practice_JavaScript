var massMark = 78;
var heightMark = 1.69;
var massJohn = 92;
var heightJohn = 1.95;

var bmiMark = massMark / (heightMark * heightMark);
var bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiMark, bmiJohn);

var markHigherBmi = bmiMark > bmiJohn;

console.log("Is Mark's BMI higher than John's?" + markHigherBmi);
