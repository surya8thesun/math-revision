// jshint esversion:6
import App from "./modules/App.js";
const app = new App();
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  app.init(event, false);
});
document.querySelector("button").addEventListener("click", (event) => {
  app.init(event, true);
});
let num = Math.floor(Math.random() * 100);
document
  .querySelector("#square-roots>button")
  .addEventListener("click", (event) => {
    console.log(num);
    const p = (document.createElement("p").innerHTML = num ** 2);
    document.querySelector("div:last-of-type > section").append(p);
  });
document
  .querySelector("#square-roots>button:last-of-type")
  .addEventListener("click", (event) => {
    console.log(num);
    const p = (document.createElement("p").innerHTML = num);
    document
      .querySelector("div:last-of-type > section")
      .append(document.createElement("br"));
    document.querySelector("div:last-of-type > section").append(p);
    document
      .querySelector("div:last-of-type > section")
      .append(document.createElement("br"));
    document
      .querySelector("div:last-of-type > section")
      .append(document.createElement("br"));
    document
      .querySelector("div:last-of-type > section")
      .append(document.createElement("br"));
    document
      .querySelector("div:last-of-type > section")
      .append(document.createElement("hr"));
    num = Math.floor(Math.random() * 100);
  });
