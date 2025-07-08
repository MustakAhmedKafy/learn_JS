const today = new Date();
console.log("Today is", today);

const dd = today.getDate();
console.log("dd", dd);

const mm = today.getMonth() + 1;
console.log("MM", mm);

const yyyy = today.getFullYear();
console.log("yyyy", yyyy);


todayIS= dd + "." + mm + "." + yyyy
console.log("Today is", todayIS);