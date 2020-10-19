// jshint esversion:6
import { createDomObj, q } from "./createDomObj.js";
export default class App extends createDomObj {
  init(event, bool) {
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
if (q) {
  const db = indexedDB.open("myFirstDB");
  db.onsuccess = (event) => {
    console.log("succeeded");
  };
  db.onerror = (event) => {
    console.log("failed");
  };
  db.onupgradeneeded = (event) => {
    const db = event.target.result;
    const store = db.createObjectStore("queries", { keyPath: "id" });
    store.transaction.oncomplete = (event) => {
      const name = db
        .transaction("queries", "readwrite")
        .objectStore("queries");
      name.add({
        id: Math.random(),
        num1: q.first,
        num2: q.second,
        result: q.result,
      });
    };
  };
}
