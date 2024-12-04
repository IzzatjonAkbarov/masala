// let a;
// let b;
// function calculate(a, b) {}
// calculate(1 + 2);
// // console.log(calculate);
// function salomBer(ism = "Do‘st") {
//   return `Salom, ${ism}!`;
// }

// console.log(salomBer("izzatillo"));
// // ------------------------------
// n = 5;
// b = " ";
// for (i = 0; i < n + 1; i++) {
//   console.log(b.repeat(i) + "i");
// }
// let s = "hello I AM DONALD";
// let all = "";
// for (i = 0; i < s.length; i++) {}
// //
// let I = 1;
// let V = 5;
// let X = 10;
// let L = 50;
// let C = 100;
// let D = 500;
// let M = 1000;
// let count = 0;
// let s = "MCMXCIV";
// for (j = 0; j < s.length; j++) {
//   if (s[j] == "I" && s[j + 1] == "V") {
//     count -= 1;
//   } else if (s[j] == "I" && s[j + 1] == "X") {
//     count -= 1;
//   } else if (s[j] == "I" && s[j + 1] == "L") {
//     count -= 1;
//   } else if (s[j] == "X" && s[j + 1] == "C") {
//     count -= 10;
//   } else if (s[j] == "C" && s[j + 1] == "M") {
//     count -= 100;
//   } else if (s[j] == "C" && s[j + 1] == "D") {
//     count -= 100;
//   } else if (s[j] == "I") {
//     count += I;
//   } else if (s[j] == "V") {
//     count += V;
//   } else if (s[j] == "X") {
//     count += X;
//   } else if (s[j] == "L") {
//     count += L;
//   } else if (s[j] == "C") {
//     count += C;
//   } else if (s[j] == "D") {
//     count += D;
//   } else if (s[j] == "M") {
//     count += M;
//   }
// }
// console.log(count);

// var romanToInt = function (s) {
//   let I = 1;
//   let V = 5;
//   let X = 10;
//   let L = 50;
//   let C = 100;
//   let D = 500;
//   let M = 1000;
//   let count = 0;

//   for (j = 0; j < s.length; j++) {
//     if (s[j] == "I" && s[j + 1] == "V") {
//       count -= 1;
//     } else if (s[j] == "I" && s[j + 1] == "X") {
//       count -= 1;
//     } else if (s[j] == "I" && s[j + 1] == "L") {
//       count -= 1;
//     } else if (s[j] == "X" && s[j + 1] == "C") {
//       count -= 10;
//     } else if (s[j] == "C" && s[j + 1] == "M") {
//       count -= 100;
//     } else if (s[j] == "C" && s[j + 1] == "D") {
//       count -= 100;
//     } else if (s[j] == "I") {
//       count += I;
//     } else if (s[j] == "V") {
//       count += V;
//     } else if (s[j] == "X") {
//       count += X;
//     } else if (s[j] == "L") {
//       count += L;
//     } else if (s[j] == "C") {
//       count += C;
//     } else if (s[j] == "D") {
//       count += D;
//     } else if (s[j] == "M") {
//       count += M;
//     }
//   }
//   return count;
// };
// console.log(romanToInt("MCMXCIV"));

// let str = "luffy is still joyboy";
// let str2 = str.trim().split(" ");
// let uzunlik = 0;
// // console.log(str2);
// let str3 = "";
// for (i = 0; i < str2.length; i++) {
//   str3 = str2[i];
// }
// console.log(str3.length);
// let str = "A man, a plan, a canal: Panama";
// let str2 = str.toLowerCase();
// let str3 = "";
// let str4 = "";
// for (i = 0; i < str2.length; i++) {
//   //   console.log(str2[i]);
//   if (str2[i] !== " " && str2[i] !== "," && str2[i] !== ":") {
//     str3 += str2[i];
//   }
// }
// str4 = str3.split("").reverse().join("");
// console.log(str3 === str4);
// var isPalindrome = function (s) {
//   s = "A man, a plan, a canal: Panama";
//   str2 = str.toLowerCase();
//   str3 = "";
//   str4 = "";
//   for (i = 0; i < str2.length; i++) {
//     //   console.log(str2[i]);
//     if (str2[i] !== " " && str2[i] !== "," && str2[i] !== ":") {
//       str3 += str2[i];
//     }
//   }
//   str4 = str3.split("").reverse().join("");
//   return str3 === str4;
// };
// var addDigits = function (b) {
//   var b = 38;
//   var count = 0;
//   for (i = 0; i < b.length; i++) {
//     count += 1;
//   }
//   return count;
// };
// console.log(addDigits(1));
// let num = 38;
// numstr = String(num);
// numlast = 0;
// num2str = String(numlast);
// numlast2 = 0;
// for (i = 0; i < numstr.length; i++) {
//   numlast += +numstr[i];
// }
// console.log(numlast);
// for (i = 0; i < num2str.length; i++) {
//   numlast2 += +num2str[i];
// }
// console.log(numlast2);
let str = ["flower", "flow", "flight"];
let str2 = "";
let str3 = "";
for (i = 0; i < str.length; i++) {
  str2 += str[i];
  for (j = 0; j < str2.length; j++) {
    str3 += str2;

    console.log(str3);
  }
}
