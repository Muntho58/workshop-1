//ประกาศตัวแปร
const nickname =  "Bas"
const studentId = "67111814"
const age = "22"
const major = "ComputerEngenieer"
const enrolledCourses = 6;
const graduationYear = 2;

//ใช้ Template Literal แสดงผลบัตรแนะนำตัวพร้อมกับคำนวณปีที่จะจบในช่องแสดงผล
console.log(`===== บัตรแนะนำตัว =====
ชื่อเล่น       : ${nickname}
รหัสนักศึกษา : ${studentId}
อายุ         : อายุ ${age} ปี
สาขาวิชา     : ${major}
ลงทะเบียน   : ${enrolledCourses} วิชา
ปีที่จะจบ     : ${2569 + graduationYear}
========================`);