
function toGrade(score) {
    if ((score < 0) || (score> 100)) {  //ส่วนที่ 2 — ตรวจข้อมูลนำเข้าก่อนตัดเกรด
        return "คะแนนต้องอยู่ที่ 0 - 100";
    }
    if (score >=80 ){
        return "A"
    }
    else if (score >=75){
        return "B+"
    }
    else if (score >=70){
        return "B"
    }
    else if (score >=65){
        return "C+"
    }
    else if (score >=60){
        return "C"
    }
    else if (score >=55){
        return "D+"
    }
    else if (score >=50){
        return "D"
    }
    return "F"

}

// ทดสอบเรียกใช้หลายค่า
const Testcase = [95, 80, 79, 75, 70, 65, 60, 55, 50, 49, 0, -5, 120]
for (const s of Testcase) {
    console.log(s + " คะแนน → เกรด " + toGrade(s));
}

