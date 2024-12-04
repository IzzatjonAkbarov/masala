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
// ======================================1-masala^
// function getthelastword(s) {
//   let str2 = s.trim().split(" ");
//   let result = "";

//   // console.log(str2);

//   for (i = 0; i < str2.length; i++) {
//     result = str2[i];
//   }

//   return result.length;
// }
// console.log(getthelastword("luffy is still joyboy"));
// =====================================3-masala^
// function pallindrome(s) {
//   let str2 = s.toLowerCase();
//   let str3 = "";
//   let str4 = "";
//   for (i = 0; i < str2.length; i++) {
//     //   console.log(str2[i]);
//     if (str2[i] !== " " && str2[i] !== "," && str2[i] !== ":") {
//       str3 += str2[i];
//     }
//   }
//   str4 = str3.split("").reverse().join("");
//   return str3 === str4 ? true : false;
// }
// console.log(pallindrome("A man, a plan, a canal: Panam"));
// ===============================================4-masala
//
// let str = ["alower", "flow", "flight"];
// let str2 = "";
// let str3 = "";
// for (i = 0; i < str.length; i++) {
//   str2 = str[i];
//   for (j = 0; j < str2.length; j++) {
//     console.log(str2[j]);
//   }
//   if (str2.includes(str2[0]) && str2.includes(str2[1])) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// console.log(str.includes("flower"));
// for (j = 0; j < str2.length; j++){
// if( str2[j]==" "){

// }}
