(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [879],
    {
        952: (e, t, s) => {
            "use strict";
            s.d(t, { p: () => i });
            var r = s(3739);
            s(9483);
            var a = s(1683);
            function i(e) {
                let { className: t, type: s, ...i } = e;
                return (0, r.jsx)("input", {
                    type: s,
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
        1683: (e, t, s) => {
            "use strict";
            s.d(t, { cn: () => i });
            var r = s(5750),
                a = s(3823);
            function i() {
                for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                return (0, a.QP)((0, r.$)(t));
            }
        },
        3932: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, { default: () => f });
            var r = s(3739),
                a = s(1230),
                i = s(5292),
                n = s(8036),
                l = s(952),
                o = s(9639);
            let d = (0, o.createServerReference)("60c1ad7e552c9d9cda79622e3dd23192cf81b92b05", o.callServer, void 0, o.findSourceMapURL, "useSignup");
            var c = s(2233),
                x = s(8200),
                u = s(2064),
                m = s.n(u),
                h = s(9483),
                p = s(7834);
            function g(e) {
                let { isOpen: t, onClose: s } = e;
                return t
                    ? (0, r.jsx)("div", {
                          className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm",
                          children: (0, r.jsxs)("div", {
                              className: "bg-black/90 border border-red-500/25 rounded-lg p-8 max-w-md mx-4 relative overflow-hidden",
                              children: [
                                  (0, r.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent" }),
                                  (0, r.jsxs)("div", {
                                      className: "relative z-10",
                                      children: [
                                          (0, r.jsx)("h3", { className: "text-xl font-bold mb-4 text-center text-white", children: "Success!" }),
                                          (0, r.jsx)("p", { className: "text-white/90 mb-6 text-center", children: "A verification email has been sent to your inbox." }),
                                          (0, r.jsxs)("div", {
                                              className: "flex flex-col items-center mb-6",
                                              children: [
                                                  (0, r.jsx)(x.default, { src: "/discord.svg", alt: "Discord", width: 32, height: 32, className: "mb-2" }),
                                                  (0, r.jsxs)("p", {
                                                      className: "text-white/90 text-center",
                                                      children: [
                                                          "You can join us in the meantime on Discord, we're a small team, we don't bite!",
                                                          " ",
                                                          (0, r.jsx)("a", {
                                                              href: "https://discord.gg/aikocorp",
                                                              target: "_blank",
                                                              rel: "noreferrer",
                                                              className: "text-red-400 hover:text-red-300 underline underline-offset-2 transition-colors",
                                                              children: "discord.gg/aikocorp",
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                          (0, r.jsx)("button", {
                                              onClick: s,
                                              className: "w-full px-4 py-2 bg-red-500/20 border border-red-500/40 rounded-lg text-white hover:bg-red-500/30 hover:border-red-500/60 transition-all duration-300",
                                              children: "Close",
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                      })
                    : null;
            }
            function b(e) {
                let { state: t } = e,
                    { pending: s } = (0, p.useFormStatus)();
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: "flex justify-between items-center w-full",
                            children: [
                                (0, r.jsx)(m(), { href: "/login", className: "text-sm sm:text-base", children: "Already have an account" }),
                                (0, r.jsx)(n.$, {
                                    type: "submit",
                                    className: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5 text-sm sm:h-9 sm:px-4 sm:text-base sm:has-[>svg]:px-3",
                                    children: s ? (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(c.A, { className: "mr-2 h-4 w-4 animate-spin" }), "Signing up..."] }) : "Sign up",
                                }),
                            ],
                        }),
                        t.message && !s && !t.success && (0, r.jsx)("p", { className: "text-sm sm:text-base mt-4 text-red-500", children: t.message }),
                    ],
                });
            }
            function f() {
                let [e, t] = (0, h.useActionState)(d, { success: !1, message: null }),
                    [s, n] = (0, h.useState)(""),
                    [o, c] = (0, h.useState)(""),
                    [x, u] = (0, h.useState)(null),
                    [p, f] = (0, h.useState)(!1),
                    v = (0, h.useRef)(null),
                    w = async (s) => {
                        if (!x) {
                            (e.success = !1), (e.message = "Please complete the captcha verification.");
                            return;
                        }
                        if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/.test(o)) {
                            (e.success = !1), (e.message = "Password must be at least 8 characters long and contain one uppercase letter and one symbol.");
                            return;
                        }
                        let r = new FormData();
                        for (let [e, t] of s.entries()) r.append(e, t);
                        r.append("captcha", x), t(r);
                    };
                return (
                    (0, h.useEffect)(() => {
                        e.success ? (f(!0), u(null), v.current && v.current.resetCaptcha()) : e.message && (u(null), v.current && v.current.resetCaptcha());
                    }, [e]),
                    (0, r.jsxs)("section", {
                        className: "max-w-xl mx-auto overflow-hidden mt-16 relative py-16",
                        children: [
                            (0, r.jsxs)("div", {
                                className: "mx-auto px-4",
                                children: [
                                    (0, r.jsx)(i.GradientGridBackground, {}),
                                    (0, r.jsx)(i.GradientTitle, { children: "Sign up" }),
                                    (0, r.jsxs)("form", {
                                        action: w,
                                        onKeyDown: (e) => {
                                            if ((e.metaKey || e.ctrlKey) && "Enter" === e.key) {
                                                e.preventDefault();
                                                let t = e.currentTarget.closest("form");
                                                t && t.requestSubmit();
                                            }
                                        },
                                        className: "space-y-5 mt-20",
                                        children: [
                                            (0, r.jsxs)("div", {
                                                className: "space-y-5",
                                                children: [
                                                    (0, r.jsx)(l.p, {
                                                        type: "email",
                                                        id: "email",
                                                        name: "email",
                                                        placeholder: "Email",
                                                        required: !0,
                                                        autoComplete: "email",
                                                        className: "placeholder:text-white/50 text-sm sm:text-base",
                                                        value: s,
                                                        onChange: (e) => n(e.target.value),
                                                    }),
                                                    (0, r.jsx)(l.p, {
                                                        type: "password",
                                                        id: "password",
                                                        name: "password",
                                                        placeholder: "Password",
                                                        required: !0,
                                                        autoComplete: "new-password",
                                                        className: "placeholder:text-white/50 text-sm sm:text-base",
                                                        value: o,
                                                        onChange: (e) => c(e.target.value),
                                                    }),
                                                    (0, r.jsx)("div", {
                                                        className: "w-full h-20 bg-transparent",
                                                        children: (0, r.jsx)(a.A, {
                                                            sitekey: "a2e68f96-5458-4646-a2aa-cbf4d5545f10",
                                                            onVerify: (t) => {
                                                                u(t), "Please complete the captcha verification." === e.message && (e.message = null);
                                                            },
                                                            onExpire: () => {
                                                                u(null);
                                                            },
                                                            ref: v,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsx)(b, { state: e }),
                                        ],
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: "relative flex items-center my-8",
                                        children: [
                                            (0, r.jsx)("div", { className: "flex-grow border-t border-white/25" }),
                                            (0, r.jsx)("span", { className: "flex-shrink mx-4 text-sm sm:text-base", children: "or" }),
                                            (0, r.jsx)("div", { className: "flex-grow border-t border-white/25" }),
                                        ],
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: "flex flex-col md:flex-row gap-4 justify-center",
                                        children: [
                                            (0, r.jsx)(m(), {
                                                href: "",
                                                className:
                                                    "flex items-center justify-center space-x-2 px-4 py-2 sm:px-5 sm:py-3 bg-red-500/15 border border-red-500/25 rounded-lg text-white hover:bg-red-500/25 hover:border-red-500/40 transition-all duration-300 group/apply hover:scale-105 text-sm font-semibold hover:shadow-lg hover:shadow-red-500/20",
                                                children: (0, r.jsxs)("div", {
                                                    className: "flex gap-4 justify-between  items-center",
                                                    children: [
                                                        (0, r.jsx)("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            width: "24",
                                                            height: "24",
                                                            fill: "currentColor",
                                                            viewBox: "0 0 16 16",
                                                            children: (0, r.jsx)("path", {
                                                                d:
                                                                    "M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z",
                                                            }),
                                                        }),
                                                        (0, r.jsx)("span", { children: " Login with Google " }),
                                                    ],
                                                }),
                                            }),
                                            (0, r.jsx)(m(), {
                                                href: "",
                                                className:
                                                    "flex items-center justify-center space-x-2 px-4 py-2 sm:px-5 sm:py-3 bg-red-500/15 border border-red-500/25 rounded-lg text-white hover:bg-red-500/25 hover:border-red-500/40 transition-all duration-300 group/apply hover:scale-105 text-sm font-semibold hover:shadow-lg hover:shadow-red-500/20",
                                                children: (0, r.jsxs)("div", {
                                                    className: "flex gap-4 justify-between items-center",
                                                    children: [
                                                        (0, r.jsx)("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            width: "24",
                                                            height: "24",
                                                            fill: "currentColor",
                                                            viewBox: "0 0 16 16",
                                                            children: (0, r.jsx)("path", {
                                                                d:
                                                                    "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8",
                                                            }),
                                                        }),
                                                        (0, r.jsx)("span", { children: " Login with GitHub " }),
                                                    ],
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsx)(g, { isOpen: p, onClose: () => f(!1) }),
                        ],
                    })
                );
            }
        },
        5292: (e, t, s) => {
            "use strict";
            s.d(t, { GradientGridBackground: () => i, GradientTitle: () => a });
            var r = s(3739);
            function a(e) {
                let { children: t } = e;
                return (0, r.jsx)("h1", {
                    className: "text-4xl sm:text-6xl lg:text-7xl font-bold text-white text-center mb-6 sm:mb-8 leading-[0.9] tracking-tight animate-fade-in",
                    style: { animationDelay: "200ms" },
                    children: (0, r.jsx)("span", { className: "bg-gradient-to-r from-white  via-gray-100 to-red-200 bg-clip-text text-transparent", children: t }),
                });
            }
            function i() {
                return (0, r.jsxs)("div", {
                    className: "absolute inset-0 -z-10",
                    children: [
                        (0, r.jsx)("div", { className: "absolute top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-gradient-to-r from-red-500/15 to-orange-500/10 rounded-full blur-3xl" }),
                        (0, r.jsx)("div", { className: "absolute bottom-40 right-1/4 w-[400px] h-[300px] bg-red-500/8 rounded-full blur-3xl" }),
                        (0, r.jsx)("div", { className: "absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-orange-500/6 rounded-full blur-3xl" }),
                        (0, r.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/40" }),
                        (0, r.jsx)("div", { className: "absolute inset-0 opacity-[0.01]", style: { backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "50px 50px" } }),
                    ],
                });
            }
            s(9483);
        },
        6144: (e, t, s) => {
            Promise.resolve().then(s.bind(s, 3932));
        },
        8036: (e, t, s) => {
            "use strict";
            s.d(t, { $: () => o });
            var r = s(3739);
            s(9483);
            var a = s(2720),
                i = s(4872),
                n = s(1683);
            let l = (0,
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
                let { className: t, variant: s, size: i, asChild: o = !1, ...d } = e,
                    c = o ? a.DX : "button";
                return (0, r.jsx)(c, { "data-slot": "button", className: (0, n.cn)(l({ variant: s, size: i, className: t })), ...d });
            }
        },
    },
    (e) => {
        var t = (t) => e((e.s = t));
        e.O(0, [647, 64, 889, 451, 857, 344, 358], () => t(6144)), (_N_E = e.O());
    },
]);
