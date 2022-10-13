const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const autoclicker = document.getElementById("autoclicker");
const clickupgrade = document.getElementById("clickupgrade");
let numbers = 0;

let autoclickerPrice = 100;
let autoclickerIncrease = 0;
let clickupgradePrice = 50;
let clickupgradeIncrease = 1;

//arrow function
cookie.onclick = () => {
  numbers+= clickupgradeIncrease;
  counter.innerHTML = numbers;
};
clickupgrade.onclick = () => {
    if (numbers >= clickupgradePrice){
        numbers -= clickupgradePrice;
        counter.innerHTML = numbers;
        clickupgradePrice *= 2;
        clickupgrade.innerHTML = `buy click upgrade: ${clickupgradePrice}`;  }
        clickupgradeIncrease++;
}

autoclicker.onclick = () => {
  if (numbers >= autoclickerPrice) {
    numbers -= autoclickerPrice;
    counter.innerHTML = numbers;
    autoclickerPrice *= 2;
    autoclicker.innerHTML = `buy autoclicker: ${autoclickerPrice}`;
    if (autoclickerIncrease == 0) {
      //spustim interval
      setInterval(() => {
        numbers += autoclickerIncrease;
        counter.innerHTML = numbers;
      }, 1000);
    }
    autoclickerIncrease++;
  }
};
