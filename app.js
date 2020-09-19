// jshint esversion:6
const startValue = document.getElementById("start").value;
const endValue = document.getElementById("end").value;
let objs = [];
class createTableObj {
  constructor(num1, num2) {
    this.first = num1;
    this.second = num2;
    this.result = num1 * num2;
  }
}
let nums = [];
let query;
document.querySelector("form").addEventListener("submit", (event) => {
  nums = [];
  objs = [];
  event.preventDefault();
  for (
    let i = document.getElementById("start").value;
    i <= document.getElementById("end").value;
    i++
  ) {
    nums.push(i);
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j <= document.getElementById("range").value; j++) {
      let obj = new createTableObj(nums[i], j);
      objs.push(obj);
    }
  }
  query = objs[Math.floor(Math.random() * (nums.length * 20))];
  document.querySelector("p").textContent = `${query.result}`;
});
document.querySelector("button").addEventListener("click", (event) => {
  let arr = [];
  objs.map((obj) => {
    if (obj.result === query.result) {
      arr.push({ first: obj.first, second: obj.second });
    }
  });
  arr.map((thing) => {
    document.querySelector("p").innerHTML += `<br>`;
    document.querySelector("p").innerHTML =
      document.querySelector("p").innerHTML +
      `${thing.first} ${thing.second}`;
  });
  arr = [];
});
