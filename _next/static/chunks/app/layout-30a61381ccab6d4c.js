try {
  let e =
      "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof self
        ? self
        : {},
    t = new e.Error().stack;
  t &&
    ((e._sentryDebugIds = e._sentryDebugIds || {}),
    (e._sentryDebugIds[t] = "2d27036d-78ad-4780-aa32-96a27a1d5497"),
    (e._sentryDebugIdIdentifier =
      "sentry-dbid-2d27036d-78ad-4780-aa32-96a27a1d5497"));
} catch (e) {}
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [177],
  {
    157: (e, t, f) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "workAsyncStorage", {
          enumerable: !0,
          get: function () {
            return i.workAsyncStorageInstance;
          },
        });
      let i = f(3091);
    },
    580: (e, t, f) => {
      Promise.resolve().then(f.t.bind(f, 9736, 23)),
        Promise.resolve().then(f.bind(f, 8791)),
        Promise.resolve().then(f.bind(f, 8418)),
        Promise.resolve().then(f.bind(f, 885)),
        Promise.resolve().then(f.t.bind(f, 1093, 23)),
        Promise.resolve().then(f.t.bind(f, 2090, 23)),
        Promise.resolve().then(f.t.bind(f, 9311, 23));
    },
    885: (e, t, f) => {
      "use strict";
      f.d(t, { default: () => n });
      var i = f(3400),
        l = f(8276),
        r = f(1093),
        s = f.n(r),
        d = f(3602);
        function h() {
            return (0, i.jsx)("img", {
              src: "/_next/static/media/aiko-long-kata.9da95927.svg",
              alt: "SpoodyQue Logo"
            });
          }          
      let n = () => {
        let [e, t] = (0, l.useState)(!1),
          f = (0, l.useRef)(null),
          r = (0, l.useRef)(null),
          n = [
            { name: "Pricing", href: "/pricing" },
            { name: "Contact", href: "/contact" },
          ];
        return (0, i.jsxs)("header", {
          className: "sticky top-0 z-50 bg-black/50 backdrop-blur-xs",
          children: [
            (0, i.jsxs)("div", {
              className:
                "flex items-center justify-between w-full mx-auto py-4 px-4 sm:px-6 md:px-4 max-w-6xl",
              children: [
                (0, i.jsx)(s(), {
                  href: "/",
                  className: "text-2xl w-[10rem] sm:w-[12rem] z-10 block",
                  onClick: () => t(!1),
                  children: (0, i.jsx)(h, {}),
                }),
                (0, i.jsx)("button", {
                  ref: r,
                  type: "button",
                  className: "sm:hidden z-50 p-2 focus:outline-none",
                  onClick: () => {
                    t(!e);
                  },
                  "aria-label": "Toggle menu",
                  children: (0, i.jsxs)("div", {
                    className: "relative w-6 h-5",
                    children: [
                      (0, i.jsx)("span", {
                        className:
                          "absolute h-0.5 w-full bg-primary transform transition-all duration-300 ease-in-out ".concat(
                            e ? "rotate-45 top-2" : "rotate-0 top-0"
                          ),
                      }),
                      (0, i.jsx)("span", {
                        className:
                          "absolute h-0.5 bg-primary transform transition-all duration-300 ease-in-out ".concat(
                            e
                              ? "w-0 opacity-0 left-1/2"
                              : "w-full opacity-100 top-2"
                          ),
                      }),
                      (0, i.jsx)("span", {
                        className:
                          "absolute h-0.5 w-full bg-primary transform transition-all duration-300 ease-in-out ".concat(
                            e ? "-rotate-45 top-2" : "rotate-0 top-4"
                          ),
                      }),
                    ],
                  }),
                }),
                (0, i.jsxs)("nav", {
                  className:
                    "hidden sm:flex items-center space-x-8 font-mono text-base",
                  children: [
                    n.map((e) =>
                      (0, i.jsx)(
                        s(),
                        {
                          href: e.href,
                          className: "hover:underline",
                          children: e.name,
                        },
                        e.name
                      )
                    ),
                    (0, i.jsx)(d.$, {
                      variant: "default",
                      asChild: !0,
                      children: (0, i.jsx)(s(), {
                        href: "/login",
                        children: "Login",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, i.jsx)("div", {
              ref: f,
              className:
                "\n          absolute left-0 right-0 z-40 bg-black/85 backdrop-blur-xs w-full\n          ".concat(
                  e ? "block" : "hidden",
                  "\n          sm:hidden\n        "
                ),
              children: (0, i.jsx)("div", {
                className: "p-4 h-screen",
                children: (0, i.jsxs)("nav", {
                  className: "flex flex-col space-y-4 font-mono text-base",
                  children: [
                    n.map((e) =>
                      (0, i.jsx)(
                        s(),
                        {
                          href: e.href,
                          className: "py-2 block",
                          onClick: () => t(!1),
                          children: e.name,
                        },
                        e.name
                      )
                    ),
                    (0, i.jsx)(s(), {
                      href: "/login",
                      className: "py-2 block",
                      onClick: () => t(!1),
                      children: "Login",
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      };
    },
    1814: (e, t, f) => {
      "use strict";
      function i(e) {
        let { moduleIds: t } = e;
        return null;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "PreloadChunks", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }),
        f(3400),
        f(2453),
        f(157),
        f(5588);
    },
    2065: (e, t, f) => {
      "use strict";
      f.d(t, { cn: () => r });
      var i = f(2800),
        l = f(1484);
      function r() {
        for (var e = arguments.length, t = Array(e), f = 0; f < e; f++)
          t[f] = arguments[f];
        return (0, l.QP)((0, i.$)(t));
      }
    },
    2713: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var f in t)
            Object.defineProperty(e, f, { enumerable: !0, get: t[f] });
        })(t, {
          bindSnapshot: function () {
            return s;
          },
          createAsyncLocalStorage: function () {
            return r;
          },
          createSnapshot: function () {
            return d;
          },
        });
      let f = Object.defineProperty(
        Error(
          "Invariant: AsyncLocalStorage accessed in runtime where it is not available"
        ),
        "__NEXT_ERROR_CODE",
        { value: "E504", enumerable: !1, configurable: !0 }
      );
      class i {
        disable() {
          throw f;
        }
        getStore() {}
        run() {
          throw f;
        }
        exit() {
          throw f;
        }
        enterWith() {
          throw f;
        }
        static bind(e) {
          return e;
        }
      }
      let l = "undefined" != typeof globalThis && globalThis.AsyncLocalStorage;
      function r() {
        return l ? new l() : new i();
      }
      function s(e) {
        return l ? l.bind(e) : i.bind(e);
      }
      function d() {
        return l
          ? l.snapshot()
          : function (e, ...t) {
              return e(...t);
            };
      }
    },
    2892: (e, t, f) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return h;
          },
        });
      let i = f(3400),
        l = f(8276),
        r = f(3083);
      function s(e) {
        return { default: e && "default" in e ? e.default : e };
      }
      f(1814);
      let d = {
          loader: () => Promise.resolve(s(() => null)),
          loading: null,
          ssr: !0,
        },
        h = function (e) {
          let t = { ...d, ...e },
            f = (0, l.lazy)(() => t.loader().then(s)),
            h = t.loading;
          function n(e) {
            let s = h
                ? (0, i.jsx)(h, { isLoading: !0, pastDelay: !0, error: null })
                : null,
              d = !t.ssr || !!t.loading,
              n = d ? l.Suspense : l.Fragment,
              a = t.ssr
                ? (0, i.jsxs)(i.Fragment, {
                    children: [null, (0, i.jsx)(f, { ...e })],
                  })
                : (0, i.jsx)(r.BailoutToCSR, {
                    reason: "next/dynamic",
                    children: (0, i.jsx)(f, { ...e }),
                  });
            return (0, i.jsx)(n, {
              ...(d ? { fallback: s } : {}),
              children: a,
            });
          }
          return (n.displayName = "LoadableComponent"), n;
        };
    },
    3083: (e, t, f) => {
      "use strict";
      function i(e) {
        let { reason: t, children: f } = e;
        return f;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BailoutToCSR", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }),
        f(6863);
    },
    3091: (e, t, f) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "workAsyncStorageInstance", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let i = (0, f(2713).createAsyncLocalStorage)();
    },
    3602: (e, t, f) => {
      "use strict";
      f.d(t, { $: () => h });
      var i = f(3400);
      f(8276);
      var l = f(8069),
        r = f(8466),
        s = f(2065);
      let d = (0, r.F)(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-base font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:cursor-pointer",
        {
          variants: {
            variant: {
              default:
                "bg-gradient-to-b from-accent/70 to-primary text-black hover:from-accent hover:to-primary border border-primary/20 font-mono",
              destructive:
                "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 font-mono",
              secondary:
                "bg-white/5 backdrop-blur-xs border border-white/30 hover:bg-white/10 hover:border-white/40 text-primary",
              outline:
                "font-mono border border-white/30 text-primary hover:bg-white/10 hover:border-white/40 bg-none",
              ghost:
                "text-accent hover:text-accent/80 font-mono underline underline-offset-2",
              link: "text-primary underline-offset-4 hover:underline font-mono",
            },
            size: {
              default: "h-9 px-4 py-2 has-[>svg]:px-3",
              sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5 text-sm",
              lg: "h-10 px-6 has-[>svg]:px-4 text-lg",
              icon: "size-9",
            },
          },
          defaultVariants: { variant: "default", size: "default" },
        }
      );
      function h(e) {
        let { className: t, variant: f, size: r, asChild: h = !1, ...n } = e,
          a = h ? l.DX : "button";
        return (0, i.jsx)(a, {
          "data-slot": "button",
          className: (0, s.cn)(d({ variant: f, size: r, className: t })),
          ...n,
        });
      }
    },
    4476: (e, t, f) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let i = f(8489)._(f(2892));
      function l(e, t) {
        var f;
        let l = {};
        "function" == typeof e && (l.loader = e);
        let r = { ...l, ...t };
        return (0, i.default)({
          ...r,
          modules: null == (f = r.loadableGenerated) ? void 0 : f.modules,
        });
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    8418: (e, t, f) => {
      "use strict";
      f.d(t, { default: () => h });
      var i = f(3400),
        l = f(4476),
        r = f.n(l),
        s = f(8276);
      let d = r()(() => f.e(112).then(f.bind(f, 1112)), {
        loadableGenerated: { webpack: () => [1112] },
        ssr: !1,
      });
      function h() {
        return (0, i.jsx)(s.Suspense, {
          fallback: null,
          children: (0, i.jsx)(d, {}),
        });
      }
    },
    8791: (e, t, f) => {
      "use strict";
      f.d(t, { Provider: () => w });
      var i = f(3400),
        l = f(8276),
        r = (e, t, f, i, l, r, s, d) => {
          let h = document.documentElement,
            n = ["light", "dark"];
          function a(t) {
            var f;
            (Array.isArray(e) ? e : [e]).forEach((e) => {
              let f = "class" === e,
                i = f && r ? l.map((e) => r[e] || e) : l;
              f
                ? (h.classList.remove(...i),
                  h.classList.add(r && r[t] ? r[t] : t))
                : h.setAttribute(e, t);
            }),
              (f = t),
              d && n.includes(f) && (h.style.colorScheme = f);
          }
          if (i) a(i);
          else
            try {
              let e = localStorage.getItem(t) || f,
                i =
                  s && "system" === e
                    ? window.matchMedia("(prefers-color-scheme: dark)").matches
                      ? "dark"
                      : "light"
                    : e;
              a(i);
            } catch (e) {}
        },
        s = ["light", "dark"],
        d = "(prefers-color-scheme: dark)",
        h = "undefined" == typeof window,
        n = l.createContext(void 0),
        a = (e) =>
          l.useContext(n)
            ? l.createElement(l.Fragment, null, e.children)
            : l.createElement(c, { ...e }),
        o = ["light", "dark"],
        c = (e) => {
          let {
              forcedTheme: t,
              disableTransitionOnChange: f = !1,
              enableSystem: i = !0,
              enableColorScheme: r = !0,
              storageKey: h = "theme",
              themes: a = o,
              defaultTheme: c = i ? "system" : "light",
              attribute: w = "data-theme",
              value: m,
              children: j,
              nonce: b,
              scriptProps: p,
            } = e,
            [v, k] = l.useState(() => u(h, c)),
            [_, S] = l.useState(() => ("system" === v ? y() : v)),
            P = m ? Object.values(m) : a,
            C = l.useCallback(
              (e) => {
                let t = e;
                if (!t) return;
                "system" === e && i && (t = y());
                let l = m ? m[t] : t,
                  d = f ? g(b) : null,
                  h = document.documentElement,
                  n = (e) => {
                    "class" === e
                      ? (h.classList.remove(...P), l && h.classList.add(l))
                      : e.startsWith("data-") &&
                        (l ? h.setAttribute(e, l) : h.removeAttribute(e));
                  };
                if ((Array.isArray(w) ? w.forEach(n) : n(w), r)) {
                  let e = s.includes(c) ? c : null,
                    f = s.includes(t) ? t : e;
                  h.style.colorScheme = f;
                }
                null == d || d();
              },
              [b]
            ),
            N = l.useCallback(
              (e) => {
                let t = "function" == typeof e ? e(v) : e;
                k(t);
                try {
                  localStorage.setItem(h, t);
                } catch (e) {}
              },
              [v]
            ),
            E = l.useCallback(
              (e) => {
                S(y(e)), "system" === v && i && !t && C("system");
              },
              [v, t]
            );
          l.useEffect(() => {
            let e = window.matchMedia(d);
            return e.addListener(E), E(e), () => e.removeListener(E);
          }, [E]),
            l.useEffect(() => {
              let e = (e) => {
                e.key === h && (e.newValue ? k(e.newValue) : N(c));
              };
              return (
                window.addEventListener("storage", e),
                () => window.removeEventListener("storage", e)
              );
            }, [N]),
            l.useEffect(() => {
              C(null != t ? t : v);
            }, [t, v]);
          let O = l.useMemo(
            () => ({
              theme: v,
              setTheme: N,
              forcedTheme: t,
              resolvedTheme: "system" === v ? _ : v,
              themes: i ? [...a, "system"] : a,
              systemTheme: i ? _ : void 0,
            }),
            [v, N, t, _, i, a]
          );
          return l.createElement(
            n.Provider,
            { value: O },
            l.createElement(x, {
              forcedTheme: t,
              storageKey: h,
              attribute: w,
              enableSystem: i,
              enableColorScheme: r,
              defaultTheme: c,
              value: m,
              themes: a,
              nonce: b,
              scriptProps: p,
            }),
            j
          );
        },
        x = l.memo((e) => {
          let {
              forcedTheme: t,
              storageKey: f,
              attribute: i,
              enableSystem: s,
              enableColorScheme: d,
              defaultTheme: h,
              value: n,
              themes: a,
              nonce: o,
              scriptProps: c,
            } = e,
            x = JSON.stringify([i, f, h, t, a, n, s, d]).slice(1, -1);
          return l.createElement("script", {
            ...c,
            suppressHydrationWarning: !0,
            nonce: "undefined" == typeof window ? o : "",
            dangerouslySetInnerHTML: {
              __html: "(".concat(r.toString(), ")(").concat(x, ")"),
            },
          });
        }),
        u = (e, t) => {
          let f;
          if (!h) {
            try {
              f = localStorage.getItem(e) || void 0;
            } catch (e) {}
            return f || t;
          }
        },
        g = (e) => {
          let t = document.createElement("style");
          return (
            e && t.setAttribute("nonce", e),
            t.appendChild(
              document.createTextNode(
                "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
              )
            ),
            document.head.appendChild(t),
            () => {
              window.getComputedStyle(document.body),
                setTimeout(() => {
                  document.head.removeChild(t);
                }, 1);
            }
          );
        },
        y = (e) => (
          e || (e = window.matchMedia(d)), e.matches ? "dark" : "light"
        );
      function w(e) {
        let { children: t, ...f } = e;
        return (0, i.jsx)(a, {
          attribute: "class",
          defaultTheme: "dark",
          forcedTheme: "dark",
          enableSystem: !1,
          ...f,
          children: t,
        });
      }
    },
    9311: (e) => {
      e.exports = {
        style: {
          fontFamily: "'Kode Mono', 'Kode Mono Fallback'",
          fontStyle: "normal",
        },
        className: "__className_fa65a6",
        variable: "__variable_fa65a6",
      };
    },
    9736: () => {},
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [743, 547, 93, 90, 144, 921, 388, 358], () => t(580)),
      (_N_E = e.O());
  },
]);
