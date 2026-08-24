//section1
const workshopRaw = 48 ;
const attendance = 9;
const project = 17;
const midterm = 15;
const final = 24;

//section2
const workshopScore = (workshopRaw / 60 ) * 20;
console.log("Workshop =",workshopScore.toFixed(2));

    //คำนวณคะแนนรวมทั้งหมด
const totalScore = workshopScore + attendance + project + midterm + final;
console.log("คะแนนทั้งหมด =", totalScore.toFixed(2))

    //คำนวณว่าคะแนนรวมคิดเป็นกี่เปอร์เซ็นต์ของคะแนนเต็ม 100
const percent = (totalScore / 100) * 100;
console.log("คะแนนรวม =", totalScore.toFixed(2));
console.log("คิดเป็นเปอร์เซ็นต์ =", percent.toFixed(2) + "%");

    //คำนวณว่ายังขาดอีกกี่คะแนนจึงจะได้ 80 คะแนน (ถ้าเกินแล้วแสดงเป็นเลขติดลบไปก่อน)
const gaptotarget = 80 - totalScore;
console.log("คะแนนยังขาดอีก =", gaptotarget.toFixed(2), "คะแนนเพื่อที่จะถึง 80")


//section3



console.log(`===== ใบสรุปคะแนน =====
-------------------------
Workshop : ${workshopScore.toFixed(2)} / ${workshopRaw}
attendance : ${attendance}
Project : ${project}
Midteerm : ${midterm}
Final : ${final}
--------------------------
คะแนนรวม : ${totalScore.toFixed(2)}
คิดเป็นเปอร์เซ็นต์ : ${percent.toFixed(2)}%
คะแนนยังขาดอีก : ${gaptotarget.toFixed(2)}
========================`);