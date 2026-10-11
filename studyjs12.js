// function (EXTRA ^_^)
// funtion แบบ Callback function (ใช้ได้ทั้ง anonynus/arrow function)

function sauIeIe (data1, data2, wow, hi){
        let result = data1 + data2;
        console.log(`result of ${data1} + ${data2} = ${result}`);

        wow();

        console.log(`hi... ${hi('Airin', 'Numjai') }`);
}

sauIeIe(
        100, 
        200, 
        function(){
                console.log('Wow wowo wow');
        },
        (fname, lname) => {
                return `${fname} ${lname} ^0^`
        }
)