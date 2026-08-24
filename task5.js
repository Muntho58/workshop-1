//section1
function getMenuPrice(menu) {
    let price = 0;
    switch (menu) {
        case "ข้าวผัด":
        case "ข้าวมันไก่":
        case "ข้าวหมูแดง":
            return "50"
        case "ผัดไทย":
            return "60"
        case "ต้มยำกุ้ง":
            return "120"
        default: return 0;
    }
}

//section2
function getSizeMultiplier(size) {
    let multiplier;
    switch (size) {
        case "ธรรมดา":
            return 1;

        case "พิเศษ":
            return 1.5;
        case "จัมโบ้":
            return 2;
        default: return 1;
    }
}


//section3

const orders = [
    { menu: "ผัดไทย", size: "พิเศษ", qty: 2 },
    { menu: "ข้าวมันไก่", size: "ธรรมดา", qty: 1 },
    { menu: "ต้มยำกุ้ง", size: "จัมโบ้", qty: 3 },
    { menu: "ข้าวผัด", size: "พิเศษ", qty: 2 },
];


let total = 0;

for (const order of orders){
    const price = getMenuPrice(order.menu);
    const multiplier = getSizeMultiplier(order.size);
    const itemTotal = price * multiplier * order.qty;

    total += itemTotal

  console.log(
    `${order.menu} (${order.size}) x${order.qty} = ${itemTotal} บาท`)

}

console.log("รวมทั้งบิล =", total, "บาท");