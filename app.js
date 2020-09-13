// jshint esversion:6
let nums = [];
let objs = [];
let p;
let count = 0;
let q =
  objs[
    Math.floor(
      Math.random() * nums.length * document.querySelector("#range").value
    )
  ];
class createTableObj {
  constructor(num1, num2) {
    this.first = num1;
    this.second = num2;
    this.result = num1 * num2;
  }
}
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
      p.innerHTML = p.innerHTML + `${thing.first} ${thing.second}`;
    });
    arr = [];
  }
  createCheck(query) {
    p = document.createElement("p");
    p.innerHTML = "";
    p.innerHTML = query.result;
  }
  render(bool, q) {
    if (bool) {
      this.createShow(q);
    } else {
      this.createCheck(q);
    }
    document.body.append(p);
  }
}
class App extends createDomObj {
  constructor() {
    super();
  }
  createLists() {
    nums = [];
    objs = [];
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
  init(event, bool) {
    console.log(p, this);
    this.createLists();
    event.preventDefault();
    if (q) {
      if (bool) {
        this.render(true, q);
      } else {
        this.render(false, q);
      }
    }
  }
}
const app = new App();
document.querySelector("form").addEventListener("submit", (event) => {
  count++;
  app.init(event, false);
});
document.querySelector("button").addEventListener("click", (event) => {
  count++;
  app.init(event, true);
});
