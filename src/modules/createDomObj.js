// jshint esversion:6
import createTableObj from "./createTableObj.js";
let p;
let nums = [];
let objs = [];
let q =
  objs[
    Math.floor(
      Math.random() * nums.length * document.querySelector("#range").value
    )
  ];
let count = -1;
class createDomObj {
  createShow(query) {
    p = document.createElement("p");
    p.innerHTML = "";
    let arr = [];
    objs.map((obj) => {
      if (obj.result === query.result) {
        arr.push({ first: obj.first, second: obj.second });
      }
    });
    arr.map((thing) => {
      p.innerHTML += `<br>`;
      p.innerHTML = p.innerHTML + `${thing.first} X ${thing.second}`;
    });
    p.append(document.createElement("hr"));
    arr = [];
  }
  createCheck(query) {
    nums = [];
    objs = [];
    p = document.createElement("p");
    p.innerHTML = "";
    p.innerHTML = query.result;
  }
  createLists() {
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
    if (count % 2 === 0) {
      q =
        objs[
          Math.floor(
            Math.random() * nums.length * document.querySelector("#range").value
          )
        ];
    }
  }
  render(bool, q) {
    if (bool) {
      this.createShow(q);
    } else {
      this.createCheck(q);
    }
    document.body.querySelector("div").append(p);
  }
}
document.querySelector("form").addEventListener("submit", (event) => {
  count++;
});
document.querySelector("form > button").addEventListener("click", (event) => {
  event.preventDefault();
  count++;
});
export { createDomObj, q };
