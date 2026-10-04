// single line comment

/* multi 
line 
comment 
*/

//คำสั่งแสดงผลที่ Console (สำหรับ DEV. ใช้เท่านั้น)
//string 
console.log("AAAAA"); 
console.log('BBBBB'); 
console.log(`CCCCC`); 
//number
console.log(12345); //integer
console.log(123.45); //float
//boolean ตรรกะ
console.log(true);
console.log(false);
//array คือ ข้อมูลหลายๆข ข้อมูล แต่ต้องเขียนอยู่ในเครื่องหมาย [] (square brackets)
console.log([1,2,3,4,5]);
console.log(["KFC","Pizza","Macdonal"]);
console.log([ "Cat",555,true,555.4444,[10,20,30],{date: "Hello", info: 123} ]);

// object คือ ข้อมูลหลายๆ ข้อมูล
//  แต่ต้องเขียนอยู่ในเครื่องหมาย {} (curly brackets) คั่นด้วย , (comma)
//เพียงแต่ว่าแต่ละข้อมูลจะต้องมี Key กำกับ value
console.log({
        fullname: "John Doe",
        age: 30,
        food: ["KFC","Pizza","Macdonal"],
        isStudent: true,
        address: {
                city: "Bangkok",
                district: "Bang Kapi",
        }
})

//undefined คือ ค่าที่ยังไม่ได้กำหนดค่า
console.log(undefined)
//null คือ ค่าที่ไม่มีอะไรเลย
console.log(null)
//NaN คือ (Not a Number) ค่าที่ไม่ใช่ตัวเลข
console.log(NaN)
        