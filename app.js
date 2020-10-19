!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 0));
})([
  function (e, t, n) {
    "use strict";
    n.r(t);
    class r {
      constructor(e, t) {
        (this.first = e), (this.second = t), (this.result = e * t);
      }
    }
    let o,
      u = [],
      c = [],
      l =
        c[
          Math.floor(
            Math.random() * u.length * document.querySelector("#range").value
          )
        ],
      i = -1;
    document.querySelector("form").addEventListener("submit", (e) => {
      i++;
    }),
      document.querySelector("button").addEventListener("click", (e) => {
        i++;
      });
    const s = new (class extends class {
      createShow(e) {
        (o = document.createElement("p")), (o.innerHTML = "");
        let t = [];
        c.map((n) => {
          n.result === e.result && t.push({ first: n.first, second: n.second });
        }),
          t.map((e) => {
            (o.innerHTML += "<br>"),
              (o.innerHTML = o.innerHTML + `${e.first} ${e.second}`);
          }),
          (t = []);
      }
      createCheck(e) {
        (u = []),
          (c = []),
          (o = document.createElement("p")),
          (o.innerHTML = ""),
          (o.innerHTML = e.result);
      }
      createLists() {
        for (
          let e = document.getElementById("start").value;
          e <= document.getElementById("end").value;
          e++
        )
          u.push(e);
        for (let e = 0; e < u.length; e++)
          for (let t = 0; t <= document.getElementById("range").value; t++) {
            let n = new r(u[e], t);
            c.push(n);
          }
        i % 2 == 0 &&
          (l =
            c[
              Math.floor(
                Math.random() *
                  u.length *
                  document.querySelector("#range").value
              )
            ]);
      }
      render(e, t) {
        e ? this.createShow(t) : this.createCheck(t), document.body.append(o);
      }
    } {
      init(e, t) {
        this.createLists(),
          e.preventDefault(),
          l && (t ? this.render(!0, l) : this.render(!1, l));
      }
    })();
    document.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault(), s.init(e, !1);
    }),
      document.querySelector("button").addEventListener("click", (e) => {
        s.init(e, !0);
      });
  },
]);
