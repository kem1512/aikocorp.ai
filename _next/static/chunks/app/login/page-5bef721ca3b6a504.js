(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [520],
    {
        952: (e, t, r) => {
            "use strict";
            r.d(t, { p: () => i });
            var s = r(3739);
            r(9483);
            var a = r(1683);
            function i(e) {
                let { className: t, type: r, ...i } = e;
                return (0, s.jsx)("input", {
                    type: r,
                    "data-slot": "input",
                    className: (0, a.cn)(
                        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex w-full min-w-0 rounded-md bg-transparent px-3 py-1 shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 text-foreground rounded-sm h-9 sm:h-10 text-sm sm:text-base",
                        "bg-white/5 backdrop-blur-xs border border-white/30",
                        "focus-visible:border-white/30 focus-visible:ring-white/20 focus-visible:ring-[3px]",
                        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                        t
                    ),
                    ...i,
                });
            }
        },
        1683: (e, t, r) => {
            "use strict";
            r.d(t, { cn: () => i });
            var s = r(5750),
                a = r(3823);
            function i() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return (0, a.QP)((0, s.$)(t));
            }
        },
        2233: (e, t, r) => {
            "use strict";
            r.d(t, { A: () => s });
            let s = (0, r(2994).A)("LoaderCircle", [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]]);
        },
        2613: (e, t, r) => {
            "use strict";
            var s = r(1649);
            r.o(s, "usePathname") &&
                r.d(t, {
                    usePathname: function () {
                        return s.usePathname;
                    },
                }),
                r.o(s, "useSearchParams") &&
                    r.d(t, {
                        useSearchParams: function () {
                            return s.useSearchParams;
                        },
                    });
        },
        2720: (e, t, r) => {
            "use strict";
            r.d(t, { DX: () => n, Dc: () => c, TL: () => l });
            var s = r(9483),
                a = r(4696),
                i = r(3739);
            function l(e) {
                let t = (function (e) {
                        let t = s.forwardRef((e, t) => {
                            let { children: r, ...i } = e;
                            if (s.isValidElement(r)) {
                                var l;
                                let e, n;
                                let o =
                                        ((l = r),
                                        (n = (e = Object.getOwnPropertyDescriptor(l.props, "ref")?.get) && "isReactWarning" in e && e.isReactWarning)
                                            ? l.ref
                                            : (n = (e = Object.getOwnPropertyDescriptor(l, "ref")?.get) && "isReactWarning" in e && e.isReactWarning)
                                            ? l.props.ref
                                            : l.props.ref || l.ref),
                                    c = (function (e, t) {
                                        let r = { ...t };
                                        for (let s in t) {
                                            let a = e[s],
                                                i = t[s];
                                            /^on[A-Z]/.test(s)
                                                ? a && i
                                                    ? (r[s] = (...e) => {
                                                          let t = i(...e);
                                                          return a(...e), t;
                                                      })
                                                    : a && (r[s] = a)
                                                : "style" === s
                                                ? (r[s] = { ...a, ...i })
                                                : "className" === s && (r[s] = [a, i].filter(Boolean).join(" "));
                                        }
                                        return { ...e, ...r };
                                    })(i, r.props);
                                return r.type !== s.Fragment && (c.ref = t ? (0, a.t)(t, o) : o), s.cloneElement(r, c);
                            }
                            return s.Children.count(r) > 1 ? s.Children.only(null) : null;
                        });
                        return (t.displayName = `${e}.SlotClone`), t;
                    })(e),
                    r = s.forwardRef((e, r) => {
                        let { children: a, ...l } = e,
                            n = s.Children.toArray(a),
                            o = n.find(d);
                        if (o) {
                            let e = o.props.children,
                                a = n.map((t) => (t !== o ? t : s.Children.count(e) > 1 ? s.Children.only(null) : s.isValidElement(e) ? e.props.children : null));
                            return (0, i.jsx)(t, { ...l, ref: r, children: s.isValidElement(e) ? s.cloneElement(e, void 0, a) : null });
                        }
                        return (0, i.jsx)(t, { ...l, ref: r, children: a });
                    });
                return (r.displayName = `${e}.Slot`), r;
            }
            var n = l("Slot"),
                o = Symbol("radix.slottable");
            function c(e) {
                let t = ({ children: e }) => (0, i.jsx)(i.Fragment, { children: e });
                return (t.displayName = `${e}.Slottable`), (t.__radixId = o), t;
            }
            function d(e) {
                return s.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === o;
            }
        },
        4696: (e, t, r) => {
            "use strict";
            r.d(t, { s: () => l, t: () => i });
            var s = r(9483);
            function a(e, t) {
                if ("function" == typeof e) return e(t);
                null != e && (e.current = t);
            }
            function i(...e) {
                return (t) => {
                    let r = !1,
                        s = e.map((e) => {
                            let s = a(e, t);
                            return r || "function" != typeof s || (r = !0), s;
                        });
                    if (r)
                        return () => {
                            for (let t = 0; t < s.length; t++) {
                                let r = s[t];
                                "function" == typeof r ? r() : a(e[t], null);
                            }
                        };
                };
            }
            function l(...e) {
                return s.useCallback(i(...e), e);
            }
        },
        4872: (e, t, r) => {
            "use strict";
            r.d(t, { F: () => l });
            var s = r(5750);
            let a = (e) => ("boolean" == typeof e ? `${e}` : 0 === e ? "0" : e),
                i = s.$,
                l = (e, t) => (r) => {
                    var s;
                    if ((null == t ? void 0 : t.variants) == null) return i(e, null == r ? void 0 : r.class, null == r ? void 0 : r.className);
                    let { variants: l, defaultVariants: n } = t,
                        o = Object.keys(l).map((e) => {
                            let t = null == r ? void 0 : r[e],
                                s = null == n ? void 0 : n[e];
                            if (null === t) return null;
                            let i = a(t) || a(s);
                            return l[e][i];
                        }),
                        c =
                            r &&
                            Object.entries(r).reduce((e, t) => {
                                let [r, s] = t;
                                return void 0 === s || (e[r] = s), e;
                            }, {});
                    return i(
                        e,
                        o,
                        null == t
                            ? void 0
                            : null === (s = t.compoundVariants) || void 0 === s
                            ? void 0
                            : s.reduce((e, t) => {
                                  let { class: r, className: s, ...a } = t;
                                  return Object.entries(a).every((e) => {
                                      let [t, r] = e;
                                      return Array.isArray(r) ? r.includes({ ...n, ...c }[t]) : { ...n, ...c }[t] === r;
                                  })
                                      ? [...e, r, s]
                                      : e;
                              }, []),
                        null == r ? void 0 : r.class,
                        null == r ? void 0 : r.className
                    );
                };
        },
        5292: (e, t, r) => {
            "use strict";
            r.d(t, { GradientGridBackground: () => i, GradientTitle: () => a });
            var s = r(3739);
            function a(e) {
                let { children: t } = e;
                return (0, s.jsx)("h1", {
                    className: "text-4xl sm:text-6xl lg:text-7xl font-bold text-white text-center mb-6 sm:mb-8 leading-[0.9] tracking-tight animate-fade-in",
                    style: { animationDelay: "200ms" },
                    children: (0, s.jsx)("span", { className: "bg-gradient-to-r from-white  via-gray-100 to-red-200 bg-clip-text text-transparent", children: t }),
                });
            }
            function i() {
                return (0, s.jsxs)("div", {
                    className: "absolute inset-0 -z-10",
                    children: [
                        (0, s.jsx)("div", { className: "absolute top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-gradient-to-r from-red-500/15 to-orange-500/10 rounded-full blur-3xl" }),
                        (0, s.jsx)("div", { className: "absolute bottom-40 right-1/4 w-[400px] h-[300px] bg-red-500/8 rounded-full blur-3xl" }),
                        (0, s.jsx)("div", { className: "absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-orange-500/6 rounded-full blur-3xl" }),
                        (0, s.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/40" }),
                        (0, s.jsx)("div", { className: "absolute inset-0 opacity-[0.01]", style: { backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "50px 50px" } }),
                    ],
                });
            }
            r(9483);
        },
        7439: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                !(function (e, t) {
                    for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
                })(t, {
                    default: function () {
                        return o;
                    },
                    getImageProps: function () {
                        return n;
                    },
                });
            let s = r(5515),
                a = r(49),
                i = r(8889),
                l = s._(r(2915));
            function n(e) {
                let { props: t } = (0, a.getImgProps)(e, {
                    defaultLoader: l.default,
                    imgConf: { deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], path: "/_next/image", loader: "default", dangerouslyAllowSVG: !1, unoptimized: !1 },
                });
                for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
                return { props: t };
            }
            let o = i.Image;
        },
        8036: (e, t, r) => {
            "use strict";
            r.d(t, { $: () => o });
            var s = r(3739);
            r(9483);
            var a = r(2720),
                i = r(4872),
                l = r(1683);
            let n = (0,
            i.F)(
                "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
                {
                    variants: {
                        variant: {
                            default: "bg-primary text-primary-foreground hover:bg-primary/90",
                            destructive: "bg-destructive text-white hover:bg-destructive/90",
                            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
                            ghost: "hover:bg-accent hover:text-accent-foreground",
                            link: "text-primary underline-offset-4 hover:underline",
                        },
                        size: { default: "h-9 px-4 py-2 has-[>svg]:px-3", sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5", lg: "h-10 px-6 has-[>svg]:px-4", icon: "size-9" },
                    },
                    defaultVariants: { variant: "default", size: "default" },
                }
            );
            function o(e) {
                let { className: t, variant: r, size: i, asChild: o = !1, ...c } = e,
                    d = o ? a.DX : "button";
                return (0, s.jsx)(d, { "data-slot": "button", className: (0, l.cn)(n({ variant: r, size: i, className: t })), ...c });
            }
        },
        8200: (e, t, r) => {
            "use strict";
            r.d(t, { default: () => a.a });
            var s = r(7439),
                a = r.n(s);
        },
        9487: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 9945));
        },
        9639: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                !(function (e, t) {
                    for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
                })(t, {
                    callServer: function () {
                        return s.callServer;
                    },
                    createServerReference: function () {
                        return i;
                    },
                    findSourceMapURL: function () {
                        return a.findSourceMapURL;
                    },
                });
            let s = r(7276),
                a = r(8320),
                i = r(4363).createServerReference;
        },
        9945: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, { default: () => b });
            var s = r(3739),
                a = r(5292),
                i = r(8036),
                l = r(952),
                n = r(9639);
            let o = (0, n.createServerReference)("604c8269a6acd16949887c6db1b4a1f1d73c7126f2", n.callServer, void 0, n.findSourceMapURL, "useLogin");
            var c = r(2233),
                d = r(8200),
                u = r(2064),
                m = r.n(u),
                x = r(2613),
                p = r(9483),
                h = r(7834);
            function f(e) {
                let { state: t, isVerified: r } = e,
                    { pending: a } = (0, h.useFormStatus)();
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)("div", {
                            className: "flex justify-between items-center w-full",
                            children: [
                                (0, s.jsx)(m(), { href: "/signup", className: "text-sm sm:text-base", children: "Create an account" }),
                                (0, s.jsx)(i.$, {
                                    type: "button",
                                    disabled: a,
                                    onclick: (e) => { alert('123') },
                                    className: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5 text-sm sm:h-9 sm:px-4 sm:text-base sm:has-[>svg]:px-3",
                                    children: a ? (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(c.A, { className: "mr-2 h-4 w-4 animate-spin" }), "Logging in..."] }) : "Login",
                                }),
                            ],
                        }),
                        r && (0, s.jsx)("p", { className: "text-sm sm:text-base text-green-500 mt-4", children: "Email verified successfully! You can now log in." }),
                        t.message && !a && (0, s.jsx)("p", { className: "text-sm sm:text-base mt-4 ".concat(t.success ? "" : "text-red-500"), children: t.message }),
                    ],
                });
            }
            function g() {
                return (0, s.jsx)("section", {
                    className: "max-w-xl mx-auto mt-16 relative py-16",
                    children: (0, s.jsxs)("div", {
                        className: "mx-auto px-4",
                        children: [
                            (0, s.jsx)("h1", { className: "text-4xl sm:text-5xl font-extrabold leading-tight text-white mb-6 text-center", children: (0, s.jsx)(a.GradientTitle, { children: "Login" }) }),
                            (0, s.jsxs)("form", {
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: "space-y-5",
                                        children: [
                                            (0, s.jsx)(l.p, { type: "email", id: "email", name: "email", placeholder: "Email", required: !0, autoComplete: "email", className: "placeholder:text-white/50 text-sm sm:text-base" }),
                                            (0, s.jsx)(l.p, {
                                                type: "password",
                                                id: "password",
                                                name: "password",
                                                placeholder: "Password",
                                                required: !0,
                                                autoComplete: "current-password",
                                                className: "placeholder:text-white/50 text-sm sm:text-base",
                                            }),
                                        ],
                                    }),
                                    (0, s.jsxs)("div", {
                                        className: "flex justify-between items-center w-full mt-5",
                                        children: [
                                            (0, s.jsx)(m(), { href: "/signup", className: "text-sm sm:text-base", children: "Create an account" }),
                                            (0, s.jsx)(i.$, { type: "button", className: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5 text-sm sm:h-9 sm:px-4 sm:text-base sm:has-[>svg]:px-3", children: "Login" }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, s.jsxs)("div", {
                                className: "relative flex items-center my-8",
                                children: [
                                    (0, s.jsx)("div", { className: "flex-grow border-t border-white/25" }),
                                    (0, s.jsx)("span", { className: "flex-shrink mx-4 text-sm sm:text-base", children: "or" }),
                                    (0, s.jsx)("div", { className: "flex-grow border-t border-white/25" }),
                                ],
                            }),
                            (0, s.jsxs)("div", {
                                className: "flex gap-4",
                                children: [
                                    (0, s.jsx)(m(), {
                                        href: "#",
                                        className: "w-full",
                                        children: (0, s.jsxs)(i.$, {
                                            variant: "outline",
                                            className: "w-full relative overflow-hidden",
                                            children: [
                                                (0, s.jsx)("span", { className: "relative z-10", children: "Login with Google" }),
                                                (0, s.jsx)("div", {
                                                    className: "absolute inset-0 z-0 opacity-80 flex items-center justify-center",
                                                    children: (0, s.jsx)(d.default, { src: "/google.svg", alt: "Google logo with blur effect", width: 24, height: 24, className: "object-cover blur-[2px] opacity-60" }),
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, s.jsx)(m(), {
                                        href: "#",
                                        className: "w-full",
                                        children: (0, s.jsxs)(i.$, {
                                            variant: "outline",
                                            className: "w-full relative overflow-hidden",
                                            children: [
                                                (0, s.jsx)("span", { className: "relative z-10", children: "Login with GitHub" }),
                                                (0, s.jsx)("div", {
                                                    className: "absolute inset-0 z-0 opacity-80 flex items-center justify-center",
                                                    children: (0, s.jsx)(d.default, { src: "/github.svg", alt: "GitHub logo with blur effect", width: 24, height: 24, className: "object-cover blur-[2px] opacity-60" }),
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            }
            function v() {
                let e = (0, x.useSearchParams)().get("verified"),
                    [t, r] = (0, p.useActionState)(o, { success: !1, message: null }),
                    [i, n] = (0, p.useState)(""),
                    [c, d] = (0, p.useState)("");
                return (
                    (0, p.useEffect)(() => {
                        t.success && (window.location.href = "https://app.aikocorp.ai");
                    }, [t.success]),
                    (0, s.jsx)("section", {
                        className: "max-w-xl mx-auto mt-16 overflow-hidden relative py-16",
                        children: (0, s.jsxs)("div", {
                            className: "mx-auto px-4",
                            children: [
                                (0, s.jsx)(a.GradientGridBackground, {}),
                                (0, s.jsx)(a.GradientTitle, { children: "Login" }),
                                (0, s.jsxs)("form", {
                                    action: r,
                                    onKeyDown: (e) => {
                                        if ((e.metaKey || e.ctrlKey) && "Enter" === e.key) {
                                            e.preventDefault();
                                            let t = e.currentTarget.closest("form");
                                            t && t.requestSubmit();
                                        }
                                    },
                                    className: "space-y-5 mt-20",
                                    children: [
                                        (0, s.jsxs)("div", {
                                            className: "space-y-5",
                                            children: [
                                                (0, s.jsx)(l.p, {
                                                    type: "email",
                                                    id: "email",
                                                    name: "email",
                                                    placeholder: "Email",
                                                    required: !0,
                                                    autoComplete: "email",
                                                    className: "placeholder:text-white/50 text-sm sm:text-base",
                                                    value: i,
                                                    onChange: (e) => n(e.target.value),
                                                }),
                                                (0, s.jsx)(l.p, {
                                                    type: "password",
                                                    id: "password",
                                                    name: "password",
                                                    placeholder: "Password",
                                                    required: !0,
                                                    autoComplete: "current-password",
                                                    className: "placeholder:text-white/50 text-sm sm:text-base",
                                                    value: c,
                                                    onChange: (e) => d(e.target.value),
                                                }),
                                            ],
                                        }),
                                        (0, s.jsx)(f, { state: t, isVerified: "true" === e }),
                                    ],
                                }),
                                (0, s.jsxs)("div", {
                                    className: "relative flex items-center my-8",
                                    children: [
                                        (0, s.jsx)("div", { className: "flex-grow border-t border-white/25" }),
                                        (0, s.jsx)("span", { className: "flex-shrink mx-4 text-sm sm:text-base", children: "or" }),
                                        (0, s.jsx)("div", { className: "flex-grow border-t border-white/25" }),
                                    ],
                                }),
                                (0, s.jsxs)("div", {
                                    className: "flex flex-col md:flex-row gap-4 justify-center",
                                    children: [
                                        (0, s.jsx)(m(), {
                                            href: "",
                                            className:
                                                "flex items-center justify-center space-x-2 px-4 py-2 sm:px-5 sm:py-3 bg-red-500/15 border border-red-500/25 rounded-lg text-white hover:bg-red-500/25 hover:border-red-500/40 transition-all duration-300 group/apply hover:scale-105 text-sm font-semibold hover:shadow-lg hover:shadow-red-500/20",
                                            children: (0, s.jsxs)("div", {
                                                className: "flex gap-4 justify-between  items-center",
                                                children: [
                                                    (0, s.jsx)("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        width: "24",
                                                        height: "24",
                                                        fill: "currentColor",
                                                        viewBox: "0 0 16 16",
                                                        children: (0, s.jsx)("path", {
                                                            d:
                                                                "M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z",
                                                        }),
                                                    }),
                                                    (0, s.jsx)("span", { children: " Login with Google " }),
                                                ],
                                            }),
                                        }),
                                        (0, s.jsx)(m(), {
                                            href: "",
                                            className:
                                                "flex items-center justify-center space-x-2 px-4 py-2 sm:px-5 sm:py-3 bg-red-500/15 border border-red-500/25 rounded-lg text-white hover:bg-red-500/25 hover:border-red-500/40 transition-all duration-300 group/apply hover:scale-105 text-sm font-semibold hover:shadow-lg hover:shadow-red-500/20",
                                            children: (0, s.jsxs)("div", {
                                                className: "flex gap-4 justify-between items-center",
                                                children: [
                                                    (0, s.jsx)("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        width: "24",
                                                        height: "24",
                                                        fill: "currentColor",
                                                        viewBox: "0 0 16 16",
                                                        children: (0, s.jsx)("path", {
                                                            d:
                                                                "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8",
                                                        }),
                                                    }),
                                                    (0, s.jsx)("span", { children: " Login with GitHub " }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    })
                );
            }
            function b() {
                return (0, s.jsx)(p.Suspense, { fallback: (0, s.jsx)(g, {}), children: (0, s.jsx)(v, {}) });
            }
        },
    },
    (e) => {
        var t = (t) => e((e.s = t));
        e.O(0, [647, 64, 889, 857, 344, 358], () => t(9487)), (_N_E = e.O());
    },
]);
