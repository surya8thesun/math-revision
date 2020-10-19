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
