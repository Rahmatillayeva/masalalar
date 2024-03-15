// #1

// k va n butun soni berilgan (n > 0). k sonini n marta chiqaruvchi programma tuzing.

// const k = +prompt("k sonini kiriting!");
// const n = +prompt("n sonini kiriting!");

// for (let i = 1; i <= n ; i++) {
// console.log(k);
// }

// ---------------------------------------------------------------------------------

// #2

// a va b butun sonlar berilgan (a < b). a va b sonlar orasidagi barcha butun sonlarni (a va b ni ham) chiqaruvchi va chiqarilgan sonlar sonini ham chiqaruvchi programma tuzilsin.

// const a = +prompt("a sonni kiriting!");
// const b = +prompt("b sonni kiriting!");
// let count = 0;

// if (a < b) {
//   for (let i = a; i <= b; i++) {
//     console.log(i);
//     count++
//   }
//   console.log(`${count} ta son bor`);
// }
// else{
//   alert("xato!")
// }

// ---------------------------------------------------------------------------------------------

// #3

// a va b butun sonlar berilgan (a < b). a va b sonlar orasidagi barcha butun sonlarni (a va b dan tashqari) chiqaruvchi va chiqarilgan sonlar sonini ham chiqaruvchi programma tuzilsin.

// const a = +prompt("a sonni kiriting!");
// const b = +prompt("b sonni kiriting!");
// let count = 0;

// if (a < b) {
//     for (let i = b - 1; i > a; i--) {
//       console.log(i);
//       count++
//     }
//     console.log(`${count} ta son bor`);
//   }
//   else{
//     alert("xato!")
//   }

// ------------------------------------------------------------------------------------------------

// #4

// 1 kg konfetning narxi berilgan. 1, 2, ..., 10 konfetni narxini chiqaruvchi programma tuzing.

// const narx = +prompt("1 kg konfet narxi:");

// for (let i = 1; i <= 10; i++) {
//   console.log(`${i} kg konfet narxi: ${i*narx}`);
// }

// ----------------------------------------------------------------------------------

// #5

// 1 kg konfetning narxi berilgan. 0.1, 0.2, ..., 1 konfetni narxini chiqaruvchi programma tuzing.

// const narx = +prompt("1 kg konfet narxi:");

// for (let i = 0.1; i <= 1; i += 0.1) {
//   console.log(`${i.toFixed(1)} kg konfet narxi: ${(i*narx).toFixed(1)}`);
// }

// --------------------------------------------------------------------------------

// #6

// 1 kg konfetning narxi berilgan. 1.2, 1.4, ..., 2 konfetni narxini chiqaruvchi programma tuzing.

// const narx = +prompt("1 kg konfet narxi:");

// for (let i = 1.2; i <= 2; i += 0.2) {
//   console.log(`${i.toFixed(1)} kg konfet narxi: ${(i*narx).toFixed(1)}`);
// }

// ---------------------------------------------------------------------------------------------------

// #7

// a va b butun sonlar berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar yig'indisini chiqaruvchi programma tuzilsin.

// const a = +prompt("a sonni kiriting!");
// const b = +prompt("b sonni kiriting!");
// let sum = 0;

// if (a < b) {
//   for (let i = a; i <= b; i++) {
//     sum += i;
//   }
//   console.log(`${a} dan ${b} gacha bo'lgan sonlar yig'indisi: ${sum}`);
// }
// else{
//   alert("xato!")
//  }

// --------------------------------------------------------------------------------------------

// #8

// a va b butun sonlar berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar ko'paytmasini chiqaruvchi programma tuzilsin.

// const a = +prompt("a sonni kiriting!");
// const b = +prompt("b sonni kiriting!");
// let multiplication = 1;

// if (a < b) {
//   for (let i = a; i <= b; i++) {
//     multiplication *= i;
//   }
//   console.log(`${a} dan ${b} gacha bo'lgan sonlar ko'paytmasi: ${multiplication}`);
// }
// else{
//   alert("xato!")
//  }

// -------------------------------------------------------------------------------------------------

// #9

// a va b butun sonlar berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar kvadratlari yig'indisini chiqaruvchi programma tuzilsin.

// const a = +prompt("a sonni kiriting!");
// const b = +prompt("b sonni kiriting!");
// let kvsum = 0;

// if (a < b) {
//   for (let i = a; i <= b; i++) {
//     kvsum += i ** 2;
//   }
//   console.log(`${a} dan ${b} gacha bo'lgan sonlar kvadratlari yig'indisi: ${kvsum}`);
// }
// else{
//   alert("xato!")
//  }

// --------------------------------------------------------------------------------------------------

// #25

// const n = +prompt("n sonini kiriting!");
// const x = +prompt("x sonini kiting!");
// let sum = 0;

// if (n > 0 && x > -1 && x < 1) {
//   for (let i = 1; i <= n; i++) {
//     sum += ((-1) ** (i - 1)) * (x ** i) / i;
//   }
//   console.log(sum);
// }
// else{
//   console.log("xato!");
// }


// ------------------------------------------------------------------------------




// #26

// const n = +prompt("n sonini kiriting!");
// const x = +prompt("x sonini kiting!");
// let sum = 0;

// if (n > 0 && x > -1 && x < 1) {
//   for (let i = 1; i <= n; i++) {
//     sum += ((-1) ** i) * (x ** (2*i + 1)) / (2*i +1);
//   }
//   console.log(sum);
// }
// else{
//   console.log("xato!");
// }