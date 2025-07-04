(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [977],
    {
        952: (e, t, r) => {
            "use strict";
            r.d(t, { p: () => n });
            var a = r(3739);
            r(9483);
            var s = r(1683);
            function n(e) {
                let { className: t, type: r, ...n } = e;
                return (0, a.jsx)("input", {
                    type: r,
                    "data-slot": "input",
                    className: (0, s.cn)(
                        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex w-full min-w-0 rounded-md bg-transparent px-3 py-1 shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 text-foreground rounded-sm h-9 sm:h-10 text-sm sm:text-base",
                        "bg-white/5 backdrop-blur-xs border border-white/30",
                        "focus-visible:border-white/30 focus-visible:ring-white/20 focus-visible:ring-[3px]",
                        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                        t
                    ),
                    ...n,
                });
            }
        },
        1683: (e, t, r) => {
            "use strict";
            r.d(t, { cn: () => n });
            var a = r(5750),
                s = r(3823);
            function n() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return (0, s.QP)((0, a.$)(t));
            }
        },
        1816: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 6281));
        },
        5292: (e, t, r) => {
            "use strict";
            r.d(t, { GradientGridBackground: () => n, GradientTitle: () => s });
            var a = r(3739);
            function s(e) {
                let { children: t } = e;
                return (0, a.jsx)("h1", {
                    className: "text-4xl sm:text-6xl lg:text-7xl font-bold text-white text-center mb-6 sm:mb-8 leading-[0.9] tracking-tight animate-fade-in",
                    style: { animationDelay: "200ms" },
                    children: (0, a.jsx)("span", { className: "bg-gradient-to-r from-white  via-gray-100 to-red-200 bg-clip-text text-transparent", children: t }),
                });
            }
            function n() {
                return (0, a.jsxs)("div", {
                    className: "absolute inset-0 -z-10",
                    children: [
                        (0, a.jsx)("div", { className: "absolute top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-gradient-to-r from-red-500/15 to-orange-500/10 rounded-full blur-3xl" }),
                        (0, a.jsx)("div", { className: "absolute bottom-40 right-1/4 w-[400px] h-[300px] bg-red-500/8 rounded-full blur-3xl" }),
                        (0, a.jsx)("div", { className: "absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-orange-500/6 rounded-full blur-3xl" }),
                        (0, a.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/40" }),
                        (0, a.jsx)("div", { className: "absolute inset-0 opacity-[0.01]", style: { backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "50px 50px" } }),
                    ],
                });
            }
            r(9483);
        },
        6281: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, { default: () => j });
            var a = r(3739),
                s = r(4854),
                n = r.n(s),
                i = r(5292),
                l = r(8036),
                o = r(952),
                d = r(1683);
            function c(e) {
                let { className: t, ...r } = e;
                return (0, a.jsx)("textarea", {
                    "data-slot": "textarea",
                    className: (0, d.cn)(
                        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:inset-ring-ring/50 aria-invalid:inset-ring-destructive/20 dark:aria-invalid:inset-ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:inset-ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                        t
                    ),
                    ...r,
                });
            }
            var m = r(9639);
            let x = (0, m.createServerReference)("60ec13b533139e35a85df1423dcb9d500d14075348", m.callServer, void 0, m.findSourceMapURL, "useContactUs");
            var f = r(2233),
                u = r(6493),
                p = r(9431),
                b = r(4067),
                g = r(9044),
                h = r(9483),
                v = r(7834);
            function y(e) {
                let { state: t } = e,
                    { pending: r } = (0, v.useFormStatus)(),
                    s = (function () {
                        let [e, t] = (0, h.useState)(0);
                        return (
                            (0, h.useEffect)(() => {
                                let e = () => {
                                    let e = new Date(),
                                        r = 0;
                                    for (let t of [1, 5.5, 7, -3]) {
                                        let a = new Date(e.getTime() + 36e5 * t).getUTCHours();
                                        a >= 7 && a < 23 && r++;
                                    }
                                    t(r);
                                };
                                e();
                                let r = setInterval(e, 6e4);
                                return () => clearInterval(r);
                            }, []),
                            e
                        );
                    })();
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)("div", {
                            className: "flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3",
                            children: [
                                (0, a.jsxs)("div", {
                                    className: "text-xs flex items-center gap-2 text-gray-400 transition-opacity duration-300 ".concat(s <= 0 ? "opacity-0" : "opacity-100"),
                                    children: [(0, a.jsx)("span", { className: "bg-green-500 rounded-full w-1.5 h-1.5 block animate-pulse" }), (0, a.jsxs)("span", { children: [s, " team ", 1 === s ? "member" : "members", " online"] })],
                                }),
                                (0, a.jsx)(l.$, {
                                    type: "button",
                                    disabled: r,
                                    className:
                                        "group bg-red-500/15 border border-red-500/25 text-white hover:bg-red-500/25 hover:border-red-500/40 transition-all duration-300 hover:scale-105 px-6 py-3 text-sm font-semibold rounded-lg flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
                                    children: r
                                        ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(f.A, { className: "h-4 w-4 animate-spin" }), "Sending..."] })
                                        : (0, a.jsxs)(a.Fragment, { children: ["Send Message", (0, a.jsx)(u.A, { className: "h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-300" })] }),
                                }),
                            ],
                        }),
                        t.message &&
                            !r &&
                            (0, a.jsx)("div", {
                                className: "mt-4 p-3 rounded-lg border text-sm transition-all duration-300 animate-fade-in ".concat(
                                    t.success ? "bg-green-500/10 border-green-500/20 text-green-300" : "bg-red-500/10 border-red-500/20 text-red-300"
                                ),
                                children: (0, a.jsx)("p", { children: t.message }),
                            }),
                    ],
                });
            }
            function j() {
                let [e, t] = (0, h.useActionState)(x, { success: !1, message: null }),
                    [r, s] = (0, h.useState)(""),
                    [l, d] = (0, h.useState)("");
                (0, h.useEffect)(() => {
                    e.success && (s(""), d(""));
                }, [e.success]);
                let m = [
                    { icon: p.A, text: "General Enquiry" },
                    { icon: b.A, text: "Learn which plan is right for your team" },
                    { icon: g.A, text: "Technical issues or product questions" },
                ];
                return (0, a.jsxs)("section", {
                    className: "jsx-354d16f3c707883f relative min-h-screen overflow-hidden flex items-center",
                    children: [
                        (0, a.jsx)(i.GradientGridBackground, {}),
                        (0, a.jsxs)("div", {
                            className: "jsx-354d16f3c707883f relative max-w-4xl lg:max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24 w-full",
                            children: [
                                (0, a.jsxs)("div", {
                                    className: "jsx-354d16f3c707883f text-center mb-8 sm:mb-10",
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className:
                                                "jsx-354d16f3c707883f inline-flex items-center space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/5 border border-white/20 rounded-full text-red-200 font-medium mb-6 sm:mb-8 animate-fade-in text-sm sm:text-base",
                                            children: [(0, a.jsx)(p.A, { className: "w-3 h-3 sm:w-4 sm:h-4" }), (0, a.jsx)("span", { className: "jsx-354d16f3c707883f", children: "Get in touch" })],
                                        }),
                                        (0, a.jsx)(i.GradientTitle, { children: "Talk to us" }),
                                        (0, a.jsxs)("div", {
                                            style: { animationDelay: "200ms" },
                                            className: "jsx-354d16f3c707883f max-w-3xl lg:max-w-4xl mx-auto space-y-4 sm:space-y-6 animate-fade-in",
                                            children: [
                                                (0, a.jsx)("p", { className: "jsx-354d16f3c707883f text-base sm:text-lg text-gray-300 leading-relaxed font-medium px-2" }),
                                                (0, a.jsx)("p", {
                                                    className: "jsx-354d16f3c707883f text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl lg:max-w-3xl mx-auto px-2",
                                                    children: "If the time comes, we will offer you a deal you can't refuse",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, a.jsx)("div", {
                                    style: { animationDelay: "200ms" },
                                    className: "jsx-354d16f3c707883f mb-8 sm:mb-10 flex flex-col items-center animate-fade-in",
                                    children: (0, a.jsx)("div", {
                                        className: "jsx-354d16f3c707883f max-w-2xl w-full",
                                        children: (0, a.jsx)("div", {
                                            className: "jsx-354d16f3c707883f p-6 border border-white/10 rounded-xl bg-black/20 backdrop-blur-sm",
                                            children: (0, a.jsx)("div", {
                                                className: "jsx-354d16f3c707883f space-y-3",
                                                children: m.map((e, t) =>
                                                    (0, a.jsxs)(
                                                        "div",
                                                        {
                                                            className: "jsx-354d16f3c707883f flex items-center gap-3",
                                                            children: [
                                                                (0, a.jsx)("div", {
                                                                    className: "jsx-354d16f3c707883f flex-shrink-0 p-1.5 bg-red-500/10 rounded-lg border border-red-500/20",
                                                                    children: (0, a.jsx)(e.icon, { className: "w-4 h-4 text-red-300" }),
                                                                }),
                                                                (0, a.jsx)("p", { className: "jsx-354d16f3c707883f text-gray-300 text-sm", children: e.text }),
                                                            ],
                                                        },
                                                        t
                                                    )
                                                ),
                                            }),
                                        }),
                                    }),
                                }),
                                (0, a.jsxs)("div", {
                                    style: { animationDelay: "200ms" },
                                    className: "jsx-354d16f3c707883f group relative animate-fade-in",
                                    children: [
                                        (0, a.jsx)("div", {
                                            className: "jsx-354d16f3c707883f absolute inset-0 bg-gradient-to-r from-red-500/5 via-orange-500/3 to-red-500/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-700",
                                        }),
                                        (0, a.jsx)("div", {
                                            className:
                                                "jsx-354d16f3c707883f relative max-w-2xl mx-auto w-full p-6 sm:p-8 border border-white/10 rounded-2xl bg-black/40 backdrop-blur-xl group-hover:border-red-500/15 group-hover:bg-black/50 transition-all duration-500",
                                            children: (0, a.jsxs)("form", {
                                                action: t,
                                                onKeyDown: (e) => {
                                                    if ((e.metaKey || e.ctrlKey) && "Enter" === e.key) {
                                                        e.preventDefault();
                                                        let t = e.currentTarget.closest("form");
                                                        t && t.requestSubmit();
                                                    }
                                                },
                                                className: "jsx-354d16f3c707883f space-y-5 w-full",
                                                children: [
                                                    (0, a.jsx)("div", {
                                                        className: "jsx-354d16f3c707883f",
                                                        children: (0, a.jsx)(o.p, {
                                                            type: "email",
                                                            id: "email",
                                                            name: "email",
                                                            placeholder: "your@email.com",
                                                            required: !0,
                                                            autoComplete: "email",
                                                            className:
                                                                "bg-white/5 w-full border-white/10 text-white placeholder:text-white/50 focus:border-red-500/30 focus:ring-red-500/20 rounded-lg h-12 text-sm px-4 py-3 transition-all duration-300 font-normal",
                                                            value: r,
                                                            onChange: (e) => s(e.target.value),
                                                        }),
                                                    }),
                                                    (0, a.jsx)("div", {
                                                        className: "jsx-354d16f3c707883f",
                                                        children: (0, a.jsx)(c, {
                                                            id: "message",
                                                            name: "message",
                                                            rows: 5,
                                                            className:
                                                                "bg-white/5 w-full border-white/10 text-white placeholder:text-white/50 focus:border-red-500/30 focus:ring-red-500/20 rounded-lg resize-none text-sm px-4 py-3 h-32 transition-all duration-300 font-normal leading-relaxed",
                                                            placeholder: "Tell us about your security needs, demo requirements, or any questions...",
                                                            required: !0,
                                                            value: l,
                                                            onChange: (e) => d(e.target.value),
                                                            style: { minHeight: "8rem", maxHeight: "8rem", height: "8rem", lineHeight: "1.5" },
                                                        }),
                                                    }),
                                                    (0, a.jsx)("div", { className: "jsx-354d16f3c707883f pt-2", children: (0, a.jsx)(y, { state: e }) }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsx)(n(), {
                            id: "354d16f3c707883f",
                            children:
                                "@-webkit-keyframes fade-in{from{opacity:0;-webkit-transform:translatey(20px);transform:translatey(20px)}to{opacity:1;-webkit-transform:translatey(0);transform:translatey(0)}}@-moz-keyframes fade-in{from{opacity:0;-moz-transform:translatey(20px);transform:translatey(20px)}to{opacity:1;-moz-transform:translatey(0);transform:translatey(0)}}@-o-keyframes fade-in{from{opacity:0;-o-transform:translatey(20px);transform:translatey(20px)}to{opacity:1;-o-transform:translatey(0);transform:translatey(0)}}@keyframes fade-in{from{opacity:0;-webkit-transform:translatey(20px);-moz-transform:translatey(20px);-o-transform:translatey(20px);transform:translatey(20px)}to{opacity:1;-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0)}}.animate-fade-in.jsx-354d16f3c707883f{-webkit-animation:fade-in.6s ease-out forwards;-moz-animation:fade-in.6s ease-out forwards;-o-animation:fade-in.6s ease-out forwards;animation:fade-in.6s ease-out forwards}",
                        }),
                    ],
                });
            }
        },
        8036: (e, t, r) => {
            "use strict";
            r.d(t, { $: () => o });
            var a = r(3739);
            r(9483);
            var s = r(2720),
                n = r(4872),
                i = r(1683);
            let l = (0,
            n.F)(
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
                let { className: t, variant: r, size: n, asChild: o = !1, ...d } = e,
                    c = o ? s.DX : "button";
                return (0, a.jsx)(c, { "data-slot": "button", className: (0, i.cn)(l({ variant: r, size: n, className: t })), ...d });
            }
        },
    },
    (e) => {
        var t = (t) => e((e.s = t));
        e.O(0, [647, 311, 857, 344, 358], () => t(1816)), (_N_E = e.O());
    },
]);
