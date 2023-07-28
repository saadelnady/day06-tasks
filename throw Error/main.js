// create function take two parameters only

// function showError(parameter1, parameter2) {
//   var argumentsCount = arguments.length;
//   try {
//     if (typeof parameter1 != "number" || typeof parameter2 != "number") {
//       return "please insert numbers arguments";
//     }
//     if (argumentsCount != 2) {
//       return "please insert two arguments";
//     }
//   } catch (error) {
//     throw error;
//   }
// }
// var result = showError("1", "2");
// // var result = showError(1, "2");
// // var result = showError(1, 3);
// console.log(result);

// =================================================

//adding function

// function addingNumber() {
//   try {
//     var result = 0;
//     for (var i = 0; i < arguments.length; i++) {
//       if (typeof arguments[i] != "number") {
//         throw "please insert numbers";
//       } else {
//         result += arguments[i];
//       }
//     }
//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// }
// console.log(addingNumber("1", 2, 3, 3));

// ==============================================

// reversed numbers 1
// function reversedNumbers() {
//   try {
//     var result = [];
//     for (var i = 0; i < arguments.length; i++) {
//       if (typeof arguments[i] != "number") {
//         throw "please insert numbers";
//       }
//       result.push(arguments[i]);
//     }
//     var reversedArray = result.reverse();
//     console.log(reversedArray);
//   } catch (error) {
//     console.error(error);
//   }
// }

// reversedNumbers(1, 2, 3, 3);

// ==============================================

// reversed numbers 2

// function reversedNumbers2() {
//   try {
//     if (arguments.length === 0)
//       throw new Error("Please insert one argument at least.");
//     return Array.prototype.slice.call(arguments).reverse();
//   } catch (error) {
//     console.error(error);
//   }
// }

// // var result = reversedNumbers2();
// var result = reversedNumbers2(1, 4, 2);
// console.log(result);
