// Assignement No 2 Start

// Q1

// 1
let exp = "faraz" || (true + false + 5 && " ") || "true";
// answer
// faraz

// 2
b = 3;
let exp1 = 1 + 2 + ++b || (5 && 0);
// answer
// 7

// 3
a = 5;
let exp2 = (32 && true - ++a && " ") || "true";
exp2 = " " || "true";
// answer
// (" ");

// 4
let exp3 = ((true + 3) * 5 && undefined) || "faraz" + 5;
exp3 = (20 && undefined) || "faraz" + 5;
exp3 = undefined || "faraz" + 5;
// answer
// "faraz5"

// 5
let exp4 = 32 + "abc" || true + false + false || +5 || "true";
exp4 = "32abc" || true + false + false || +5 || "true";
// answer
// "32abc"

// 6
let exp5 = false || (true + true + 15 && "") || 50;
false || (17 && "") || 50;
false || "" || 50;
// answer
// 50

// 7
let exp6 = true + false + 5 || false + 8 + "abc" || "true";
exp6 = 6 || false + 8 + "abc" || "true";
// answer
// 6

// 8
let exp7 = "faraz" || false + 10 || "true";
// answer
// "faraz"

// 9
let exp8 = (12 + (false + false) + true && null) || "faraz";
exp8 = (13 && null) || "faraz";
// answer
// "faraz"

// 10
let exp9 = false + true + false + 2 || ("faraz" && false) || 1 + 10;
exp9 = 3 || ("faraz" && false) || 1 + 10;
// answer
// 3

// 11
let exp10 = true + false + 5 || false + 8 + "abc" || "true";
exp10 = 6 || false + 8 + "abc" || "true";
// answer
// 6

// 12
let exp11 =
  ((true + false) * 3 && "") || false + true - (12 + true + true + false);
exp11 = (3 && "") || false + true - (12 + true + true + false);
exp11 = "" || false + true - (12 + true + true + false);
// answer
// -13

// // Assignement No 2 End
