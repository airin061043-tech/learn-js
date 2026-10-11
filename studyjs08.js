//function คือ การทำงานหนึ่ง จะไม่ทำงานหากไม่เรียกใช้ (call function) *****
//จะแบ่งเป็น 4 ประเภทใหญ่ๆ 
// 3. on parameter fas return
function getByebye() {
    console.log('Wow wow wow...')
    return "Bye Bye na ja..."
}


// 4. have parameters has return
function calAvg4Number(n1, n2, n3, n4) {
    console.log('Woo woo woo...')
    return (n1 + n2 + n3 + n4) / 4
}

// call function แบบ no return 
// คือ ควรเขียนอยู่กับอะไรสักอย่างเพื่อเอาค่าที่ return ไปใช้งาน

console.log(`Sombat ${getByebye() }`)

let avg = calAvg4Number(10, 20, 30, 40)
console.log(`Average of 10, 20, 30, 40 is ${avg}`)

console.log(`Somjai ${ getByebye() }`)
console.log(`Somnuk ${ getByebye() }`)