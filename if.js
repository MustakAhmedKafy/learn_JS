const payByBkash = false;
const payByCard = true;
const cashPayment = false;
const totalPayment = 600;

// if (totalPayment >= 500 && (payByBkash || payByCard)) {
//   console.log("You will get Cashback");
// } else {
//   console.log("You can not get cashback");
// }

if (totalPayment > 500) {
  if (payByBkash) {
    console.log("You will get cashback");
  } else if (payByCard) {
    console.log("You will get cashback");
  } else {
    console.log("you can not get cashback");
  }
} else {
  console.log("you can not get cashback");
}
