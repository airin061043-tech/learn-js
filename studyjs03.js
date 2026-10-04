// operator ตัวดำเนินการ/เครื่องหมายต่างไฃๆที่ใช้ในการทำงานกับช้อมูล 
// Arithemetic operator ตัวดำเนินการทางคณิตศาสตร์
// ตัวเลขกระทำกับตัวเลข ได้ ตัวเลข 
// +, -, *, /, %, ++, **
console.log(10 + 3);
console.log(10 - 3);
console.log(10 * 3);
console.log(10 / 3);
console.log(10 % 3); // เครื่องหมาย mod คือ หารเอาเศษ
console.log(10 ** 3); // เครื่องหมายยกกำลัง

// Comparison operator ตัวดำเนินการเปรียบเทียบ
// ข้อมูลกระทำกับข้อมูล ได้ค่าเป็น true/false
// ==, ===, !=, !==, >, <, >=, <=
console.log(10 == 8);
console.log(10 === 8);
console.log(10 != 8);
console.log(10 !== 8);
console.log(10 > 8);
console.log(10 < 8);
console.log(10 >= 8);
console.log(10 <= 8);
console.log('-----------------------------');
console.log("Bangna" == "Bangpoo"); // false
console.log("Bangna" === "Bangpoo"); // false
console.log("Bangna" != "Bangpoo"); // true
console.log("Bangna" !== "Bangpoo"); // true
console.log("Bangna" > "Bangpoo"); // false
console.log("Bangna" < "Bangpoo"); //true
console.log("Bangna" >= "Bangpoo"); // false
console.log("Bangna" <= "Bangpoo"); // true
console.log('-----------------------------');
console.log("15" == 15); // true เปรียบเทียบแบบไม่สนใจชนิดข้อมูล
console.log("15" === 15); // false เปรียบเทียบแบบสนใจชนิดข้อมูล
console.log("15" != 15); // false เปรียบเทียบแบบไม่สนใจชนิดข้อมูล
console.log("15" !== 15); // true เปรียบเทียบแบบสนใจชนิดข้อมูล
console.log('-----------------------------');

// Logical operator ตัวดำเนินการทางตรรกะ
// ! คือ not, && คือ and, || คือ or
// Exclamation, & ampersand, | คือ Pipe
// true/false กระทำกับ true/false ได้ค่าเป็น true/false
console.log(! true); // false
console.log(! false); // true
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
console.log('-----------------------------');

// Ternary operator ตัวดำเนินการแบบมีเงื่อนไข (เงื่อนไข คือ พิสูจน์/ตรวจสอบ)
// เงื่อนไข ? ทำเมื่อจริง : ทำเมื่อเท็จ
// ______ ? _____ : ______
console.log(25 >= 52 ? "wow...." : "Hum....");
console.log('-----------------------------');

// Nullish coalescion operator คือ ตัวดำเนินการเช็คค่า null/undefined/0/""/NaN 
// && (ต้องระวังเพราะมันเหมือนเครื่องหมาย and) || (ต้องระวังเพราะมันเหมือนเครื่องหมาย or)
let xx = 555
let yy = ""
let zz = null
console.log(xx && 'Hello');     // 555
console.log(yy && 'Hi');     // ""
console.log(zz && 'Hey');     // null
console.log('-----------------------------');

// Increment/Decrement operator ตัวดำเนินการเพิ่ม/ลดค่า ทีละ 1
// ++, --
let number = 10;
number++;
console.log(number);
++number;
console.log(number);
number--;
console.log(number);
--number;
console.log(number);
console.log('-----------------------------');


// Assignment operator ตัวดำเนินการกำหนดค่า (ทำทางขวาของเครื่องหมายให้เสร็จ แล้วเอาไปใส่ทางซ้าย)
// =, +=, -=, *=, /=, %=, **=
let a = 10;
console.log(a);
a = a + 15 - 3
console.log(a);
let b = 100;
b += 30 // มันย่อมาจาก b = b + 30
console.log("B is " , b);
let c = 5
c *= b + 10 - 2 // มันย่อมาจาก c = c * (b + 10 - 2)
//****** กรณีใช้เครื่องหมายอย่างย่อ ต้องทำไอ้ที่ไม่ย่อก่อน ถึงจะได้ค่าที่ถูกต้อง */
console.log("C is " , c)
console.log('-----------------------------');