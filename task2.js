// section1
const str = "Hello";
console.log("ค่า", str, "| ชนิด:", typeof str);

const num = 20;
console.log("ค่า", num, "| ชนิด:", typeof num);

const bool = true;
console.log("ค่า", bool, "| ชนิด:", typeof bool);

const undef = undefined
console.log("ค่า", undef, "| ชนิด:", typeof undef);

const mynull = null;
console.log("ค่า", null, "| ชนิด:", typeof null);




// section2
console.log("typeof null ได้ผลว่า:", typeof null);
console.log("ผลถูกต้องหรือไม่:ไม่ถูกต้องตามความเป็นจริงแต่ว่าเป็นข้อจำกัดทางภาษา java ");


const notANumber = Number("abc");
console.log("ค่า:", notANumber, "| typeof:", typeof notANumber);
// ตรวจสอบว่าเป็น NaN จริง ๆ หรือไม่
console.log("เป็น NaN หรือไม่:", Number.isNaN(notANumber));


//section3
const inputAge = "20"; 
const inputScore = "85.5"

    //แปลง inputAge เป็นตัวเลขแล้วบวก 5 ให้ได้ 25
const ageNumber = Number(inputAge);
console.log("Age + 5 =", ageNumber + 5);

const scoreNumber = Number(inputScore);
console.log("Scoer =", scoreNumber.toFixed(1))

// เปรียบเทียบแบบไม่แปลงชนิด
console.log("inputAge === 20 :", inputAge === 20);

// เปรียบเทียบหลังแปลงเป็นตัวเลข
console.log("Number(inputAge) === 20 :", Number(inputAge) === 20);