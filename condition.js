var macPrice = 150;
var windowsPrice = 100;
var myBudget = 200; // change this value to test

if (myBudget >= macPrice) {
  console.log("I will buy a Macbook");
} else if (myBudget >= windowsPrice) {
  console.log("I will buy a Windows laptop");
} else {
  console.log("I can't buy a laptop because my budget is too low");
}

// api BaseAudioContextfunchtion write
// write async fuc, arrow fuc, api calling using  axios

// const writeAsync = async () => {
//   try {
//     const response = await axios.get(`${apiBase}/login`, getToken());
//     console.log("response", response);
//   } catch (error) {
//     console.log("error", error);
//   }
// };
// writeAsync();

const age = 100;
const hadID = true;

// const canVote = age >= 18 ? "you are voter" : "you are not voter";
// console.log("Voter status", canVote);

// if (age >= 18) {
//   console.log("You are new voter");
// } else {
//   console.log("your are not voter");
// }

if (age>=100){
  console.log('you are senior citizen');
}else if(age >= 100 && hadID) {
  console.log("you can enter the voting room");
} else {
  console.log("you can not go to voting room");
}


