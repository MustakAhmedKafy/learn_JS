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

const hello = () => {
  console.log("Hellow World");
};

hello();

const asyncFunc = async () => {
  try {
    console.log("This is async funtion");
    const res = await axios.get(`${apiBase}/login`, getToken());
  } catch (error) {
    console.log(error);
  }
};

asyncFunc();
