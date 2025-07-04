(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [974],
    {
        555: (e, t, a) => {
            "use strict";
            a.d(t, { default: () => c });
            var s = a(3739),
                n = a(9483);
            let i = (0, a(2994).A)("ChevronDown", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]);
            var r = a(2064),
                l = a.n(r),
                o = a(5292);
            function c() {
                let [e, t] = (0, n.useState)(null);
                return (0, s.jsxs)("div", {
                    className: "overflow-hidden",
                    children: [
                        (0, s.jsx)("section", {
                            className: "relative z-10 px-6 py-10 ",
                            children: (0, s.jsxs)("div", {
                                className: "max-w-4xl mx-auto",
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: "text-center mb-16",
                                        children: [
                                            (0, s.jsx)("div", {
                                                className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-red-500/20 text-sm text-white/80 mb-6",
                                                children: (0, s.jsx)("span", { children: "\uD83D\uDCA1 Everything You Need to Know" }),
                                            }),
                                            (0, s.jsx)("h2", {
                                                className: "text-4xl md:text-5xl font-bold text-white mb-6 leading-tight",
                                                children: (0, s.jsxs)("span", {
                                                    className: "bg-gradient-to-r from-white via-gray-100 to-red-200 bg-clip-text text-transparent",
                                                    children: ["Have Questions About", (0, s.jsx)("br", {}), "Security or Our Platform?"],
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, s.jsx)("div", {
                                        className: "space-y-4",
                                        children: [
                                            {
                                                question: "How do I get started with security testing?",
                                                answer: "Just make an account, add your domain or connect your repository, and our AI Agents will do the work while you focus on what’s important to you.",
                                            },
                                            {
                                                question: "Are there any hidden fees?",
                                                answer: "No hidden fees. Our transparent pricing includes all features with no usage limits. Enterprise plans include dedicated support and custom integrations.",
                                            },
                                            {
                                                question: "Can I use IMPCE on behalf of my other clients?",
                                                answer: "Yes! We offer IMPCE for contractors and small cybersecurity agencies to help with their clients needs. <a href='/contact'> <u> Talk to us  </u></a> for more details.",
                                            },
                                            {
                                                question: "Is source code required for IMPCE to function?",
                                                answer:
                                                    "We support code source analysis, but you can run IMPCE without it too! By linking your repository you gain better results and more accurate threats that may not be visible externally.",
                                            },
                                            { question: "Do you store my code?", answer: "All code is only stored temporarily during analysis, once that's completed only vulnerabilities found and their details persist." },
                                            { question: "Do you share my data with anyone else?", answer: "No, we use AWS Bedrock so that even LLM providers don't keep your data." },
                                        ].map((a, n) =>
                                            (0, s.jsxs)(
                                                "div",
                                                {
                                                    className: "bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden",
                                                    children: [
                                                        (0, s.jsxs)("button", {
                                                            onClick: () => t(e === n ? null : n),
                                                            className: "w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors",
                                                            children: [
                                                                (0, s.jsxs)("span", { className: "text-white font-semibold md:text-lg", children: [n + 1, ". ", a.question] }),
                                                                (0, s.jsx)(i, { size: 20, className: "text-gray-400 transition-transform duration-300 ".concat(e === n ? "rotate-180" : "") }),
                                                            ],
                                                        }),
                                                        e === n && (0, s.jsx)("div", { className: "px-6 py-4", children: (0, s.jsx)("p", { className: "text-gray-300 leading-relaxed", dangerouslySetInnerHTML: { __html: a.answer } }) }),
                                                    ],
                                                },
                                                n
                                            )
                                        ),
                                    }),
                                ],
                            }),
                        }),
                        (0, s.jsxs)("section", {
                            className: "relative z-10 px-6 py-20",
                            children: [
                                (0, s.jsx)(o.GradientGridBackground, {}),
                                (0, s.jsxs)("div", {
                                    className: "max-w-4xl mx-auto text-center",
                                    children: [
                                        (0, s.jsx)("h2", {
                                            className: "text-4xl md:text-5xl font-bold text-white mb-2 leading-tight",
                                            children: (0, s.jsx)("span", { className: "bg-gradient-to-r from-white via-gray-100 to-red-200 bg-clip-text text-transparent", children: "Let it rip!" }),
                                        }),
                                        (0, s.jsx)("p", { className: "text-lg text-gray-300 mb-8", children: "- The Bear " }),
                                        (0, s.jsxs)("div", {
                                            className: "flex gap-4 justify-center mb-16",
                                            children: [
                                                (0, s.jsx)(l(), {
                                                    href: "/login",
                                                    children: (0, s.jsx)("button", {
                                                        className: "group bg-white text-black md:px-8 md:py-4 px-4 py-2 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105",
                                                        children: (0, s.jsxs)("span", {
                                                            className: "flex items-center gap-2",
                                                            children: ["Get Started", (0, s.jsx)("span", { className: "group-hover:translate-x-1 transition-transform duration-300", children: "→" })],
                                                        }),
                                                    }),
                                                }),
                                                (0, s.jsx)(l(), {
                                                    href: "/contact",
                                                    children: (0, s.jsx)("button", {
                                                        className: "border border-white/20 text-white md:px-8 md:py-4 px-4 py-2 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-xl hover:border-white/40",
                                                        children: "Talk to us",
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            }
        },
        1683: (e, t, a) => {
            "use strict";
            a.d(t, { cn: () => i });
            var s = a(5750),
                n = a(3823);
            function i() {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                return (0, n.QP)((0, s.$)(t));
            }
        },
        3227: (e, t, a) => {
            "use strict";
            a.d(t, { TestimonialsSection: () => y });
            var s = a(3739),
                n = a(9483),
                i = a(2994);
            let r = (0, i.A)("Clock", [
                    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
                    ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
                ]),
                l = (0, i.A)("CircleCheckBig", [
                    ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
                    ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
                ]),
                o = (0, i.A)("TriangleAlert", [
                    ["path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3", key: "wmoenq" }],
                    ["path", { d: "M12 9v4", key: "juzpu7" }],
                    ["path", { d: "M12 17h.01", key: "p32p05" }],
                ]);
            var c = a(6208),
                d = a(4096);
            let m = (0, i.A)("Globe", [
                    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
                    ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
                    ["path", { d: "M2 12h20", key: "9i4pu4" }],
                ]),
                x = (0, i.A)("Monitor", [
                    ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
                    ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
                    ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }],
                ]);
            var p = a(8200);
            let u = () =>
                    (0, s.jsxs)("span", { className: "inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30", children: [(0, s.jsx)(r, { size: 12 }), "72h"] }),
                h = (e) => {
                    let { type: t, originalType: a, shouldAnimate: i } = e,
                        [r, c] = (0, n.useState)("original"),
                        [d, m] = (0, n.useState)(!1),
                        [x, p] = (0, n.useState)(!1);
                    return (
                        (0, n.useEffect)(() => {
                            if (i && !x) {
                                let e = setTimeout(() => {
                                    m(!0),
                                        setTimeout(() => {
                                            c("safe"), m(!1), p(!0);
                                        }, 300);
                                }, 1e3);
                                return () => clearTimeout(e);
                            }
                        }, [i, x]),
                        (0, s.jsxs)("span", {
                            className: "\n        inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border \n        "
                                .concat(
                                    { critical: "bg-red-500/20 text-red-400 border-red-500/30", high: "bg-orange-500/20 text-orange-400 border-orange-500/30", safe: "bg-green-500/20 text-green-400 border-green-500/30" }[
                                        "safe" === r ? "safe" : t
                                    ],
                                    "\n        \n        transition-all duration-500 ease-in-out\n        relative overflow-hidden\n        "
                                )
                                .concat(d ? "scale-105" : "scale-100", "\n      "),
                            children: [
                                (0, s.jsx)("div", {
                                    className: "flex items-center gap-2 transition-all duration-500 ".concat(d ? "opacity-70" : "opacity-100"),
                                    children:
                                        "safe" === r
                                            ? (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(l, { size: 12, className: "relative z-10" }), (0, s.jsx)("span", { className: "relative z-10", children: "Currently: Safe" })] })
                                            : (0, s.jsxs)(s.Fragment, {
                                                  children: [
                                                      (0, s.jsx)(o, { size: 12, className: "relative z-10" }),
                                                      (0, s.jsx)("div", {
                                                          className: "relative w-6 h-3 flex items-center",
                                                          children: (0, s.jsxs)("div", {
                                                              className: "absolute inset-0",
                                                              children: [
                                                                  (0, s.jsx)("div", { className: "absolute left-0 top-0.5 w-1.5 h-2 bg-current opacity-40 rounded-sm transform rotate-1 blur-[2px]" }),
                                                                  (0, s.jsx)("div", { className: "absolute left-2 top-0 w-2 h-2.5 bg-current opacity-35 rounded-sm transform -rotate-1 blur-[3px]" }),
                                                                  (0, s.jsx)("div", { className: "absolute left-3.5 top-0.5 w-1 h-2 bg-current opacity-30 rounded-sm blur-[2px]" }),
                                                                  (0, s.jsx)("div", { className: "absolute inset-0 bg-current opacity-20 blur-[4px] rounded" }),
                                                                  (0, s.jsx)("div", { className: "absolute inset-0 bg-current opacity-15 blur-[6px] scale-110 rounded" }),
                                                                  (0, s.jsx)("div", { className: "absolute inset-0 bg-black/25 mix-blend-multiply rounded backdrop-blur-[2px]" }),
                                                              ],
                                                          }),
                                                      }),
                                                      (0, s.jsx)("span", { className: "relative z-10 capitalize", children: "".concat(a || t, "s Found") }),
                                                  ],
                                              }),
                                }),
                                d && (0, s.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse" }),
                            ],
                        })
                    );
                },
                b = (e) => {
                    let { type: t, label: a } = e,
                        n = { pentest: (0, s.jsx)(c.A, { size: 12 }), "code-scan": (0, s.jsx)(d.A, { size: 12 }), "domain-scan": (0, s.jsx)(m, { size: 12 }), "asset-monitor": (0, s.jsx)(x, { size: 12 }) };
                    return (0, s.jsxs)("span", { className: "inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/20", children: [n[t], a] });
                },
                g = (e) => {
                    let { testimonial: t } = e,
                        [a, i] = (0, n.useState)(!1),
                        r = (0, n.useRef)(null);
                    return (
                        (0, n.useEffect)(() => {
                            let e = new IntersectionObserver(
                                (e) => {
                                    let [t] = e;
                                    t.isIntersecting && !a && i(!0);
                                },
                                { threshold: 0.3, rootMargin: "0px 0px -50px 0px" }
                            );
                            return (
                                r.current && e.observe(r.current),
                                () => {
                                    r.current && e.unobserve(r.current);
                                }
                            );
                        }, [a]),
                        (0, s.jsxs)("div", {
                            ref: r,
                            className: "\n        ".concat(
                                { large: "md:col-span-2", medium: "md:col-span-1", small: "md:col-span-1" }[t.size],
                                "\n        group relative bg-gradient-to-br from-white/5 to-white/[0.02] \n        border border-white/10 rounded-2xl p-5 md:p-6\n        hover:border-white/20\n        transition-all duration-300 hover:shadow-xl\n        backdrop-blur-xl overflow-hidden h-full\n      "
                            ),
                            children: [
                                (0, s.jsx)("div", {
                                    className:
                                        "absolute inset-0 bg-gradient-to-br from-red-500/0 via-orange-500/0 to-red-600/0 group-hover:from-red-500/10 group-hover:via-orange-500/5 group-hover:to-red-600/10 transition-all duration-500 pointer-events-none",
                                }),
                                (0, s.jsxs)("div", {
                                    className: "relative z-10 h-full flex flex-col",
                                    children: [
                                        (0, s.jsxs)("div", { className: "flex items-center justify-between mb-4", children: [(0, s.jsx)(p.default, { src: t.logo, width: 150, height: 100, alt: t.company }), (0, s.jsx)(u, {})] }),
                                        (0, s.jsxs)("div", { className: "flex flex-wrap gap-2 mb-4", children: [(0, s.jsx)(b, { ...t.testType }), t.vulnerabilities.map((e, t) => (0, s.jsx)(h, { ...e, shouldAnimate: a }, t))] }),
                                        (0, s.jsx)("blockquote", {
                                            className: "flex-1",
                                            children: (0, s.jsxs)("p", { className: "text-white/80 leading-relaxed  ".concat("small" === t.size ? "text-sm" : "text-base"), children: ['"', t.quote, '"'] }),
                                        }),
                                        (0, s.jsx)("div", { className: "absolute top-6 right-6 text-6xl text-white/5 font-serif select-none pointer-events-none", children: '"' }),
                                    ],
                                }),
                            ],
                        })
                    );
                };
            function y() {
                return (0, s.jsxs)("section", {
                    className: "relative max-w-7xl mx-auto px-4 md:py-20 overflow-hidden",
                    children: [
                        (0, s.jsxs)("div", {
                            className: "absolute inset-0 -z-10",
                            children: [
                                (0, s.jsx)("div", {
                                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-red-500/10 via-orange-500/10 to-red-600/10 rounded-full blur-3xl animate-pulse",
                                }),
                                (0, s.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/40" }),
                                (0, s.jsx)("div", { className: "absolute inset-0 opacity-[0.02]", style: { backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "50px 50px" } }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: "text-center mb-16 relative",
                            children: [
                                (0, s.jsx)("h2", {
                                    className: "text-3xl sm:text-4xl md:text-5xl text-center font-bold text-white mb-4 sm:mb-6 leading-tight px-2",
                                    children: (0, s.jsx)("span", { className: "bg-gradient-to-r from-white via-gray-100 to-red-200 bg-clip-text text-transparent", children: "What Can IMPCE Do For You" }),
                                }),
                                (0, s.jsx)("p", {
                                    className: "text-lg text-gray-300 max-w-3xl mx-auto",
                                    children: "See how amazing startups and enterprises are preventing their breaches with no overhead, security jargon or long sales calls with us",
                                }),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch",
                            children: [
                                {
                                    id: "3",
                                    company: "Lovable",
                                    logo: "./_next/lovable_logoe5fa.jpeg",
                                    quote: "IMPCE delivered a detailed, well-documented penetration testing report. Great way to gain confidence in security.",
                                    vulnerabilities: [{ type: "high", originalType: "high" }],
                                    testType: { type: "pentest", label: "AI Pentesting" },
                                    size: "small",
                                    duration: "72",
                                },
                                {
                                    id: "4",
                                    company: "Supermaven",
                                    logo: "./_next/supermaven_logo92e9.jpeg",
                                    quote: "A lot better than we had hoped for. The findings were actionable and the team was responsive.",
                                    vulnerabilities: [{ type: "high", originalType: "high" }],
                                    testType: { type: "pentest", label: "AI Pentesting" },
                                    size: "small",
                                    duration: "72",
                                },
                                {
                                    id: "5",
                                    company: "Mailinblack",
                                    logo: "./_next/mailinblack_logofac7.png",
                                    quote: "Delivers on what it promises. The founder is great and very helpful throughout the process.",
                                    vulnerabilities: [{ type: "high", originalType: "high" }],
                                    testType: { type: "pentest", label: "AI Pentesting" },
                                    size: "small",
                                    duration: "72",
                                },
                            ].map((e) => (0, s.jsx)(g, { testimonial: e }, e.id)),
                        }),
                        (0, s.jsx)("div", { className: "text-center mt-8", children: (0, s.jsx)("p", { className: "text-white/70 text-lg font-medium", children: "...and many other testimonials we proud ourselves in receiving!" }) }),
                    ],
                });
            }
        },
        3646: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 3227)), Promise.resolve().then(a.bind(a, 555)), Promise.resolve().then(a.bind(a, 9670));
        },
        4096: (e, t, a) => {
            "use strict";
            a.d(t, { A: () => s });
            let s = (0, a(2994).A)("Code", [
                ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
                ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }],
            ]);
        },
        5292: (e, t, a) => {
            "use strict";
            a.d(t, { GradientGridBackground: () => i, GradientTitle: () => n });
            var s = a(3739);
            function n(e) {
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
            a(9483);
        },
        6208: (e, t, a) => {
            "use strict";
            a.d(t, { A: () => s });
            let s = (0, a(2994).A)("Zap", [["path", { d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z", key: "1xq2db" }]]);
        },
        7439: (e, t, a) => {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                !(function (e, t) {
                    for (var a in t) Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
                })(t, {
                    default: function () {
                        return o;
                    },
                    getImageProps: function () {
                        return l;
                    },
                });
            let s = a(5515),
                n = a(49),
                i = a(8889),
                r = s._(a(2915));
            function l(e) {
                let { props: t } = (0, n.getImgProps)(e, {
                    defaultLoader: r.default,
                    imgConf: { deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], path: "/_next/image", loader: "default", dangerouslyAllowSVG: !1, unoptimized: !1 },
                });
                for (let [e, a] of Object.entries(t)) void 0 === a && delete t[e];
                return { props: t };
            }
            let o = i.Image;
        },
        8200: (e, t, a) => {
            "use strict";
            a.d(t, { default: () => n.a });
            var s = a(7439),
                n = a.n(s);
        },
        9431: (e, t, a) => {
            "use strict";
            a.d(t, { A: () => s });
            let s = (0, a(2994).A)("Users", [
                ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
                ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
                ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
                ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
            ]);
        },
        9670: (e, t, a) => {
            "use strict";
            a.d(t, { SecurityPlatformTabs: () => S });
            var s = a(3739),
                n = a(9483),
                i = a(1683);
            let r = (e) => {
                    let { speedFactor: t } = e,
                        [a, r] = (0, n.useState)([]),
                        [l, o] = (0, n.useState)("idle"),
                        [c, d] = (0, n.useState)(!1),
                        [m, x] = (0, n.useState)(!1),
                        [p, u] = (0, n.useState)(0),
                        [h, b] = (0, n.useState)(new Set()),
                        [g, y] = (0, n.useState)(0),
                        [f, v] = (0, n.useState)(0),
                        [j, w] = (0, n.useState)(0),
                        N = (0, n.useRef)(!0),
                        k = (0, n.useRef)(null),
                        T = [
                            {
                                id: 0,
                                name: "OOB SSRF in User Profile Update",
                                severity: "HIGH",
                                status: "patched",
                                payload: {
                                    request: { title: "Request:", content: ["PATCH /api/v1/user HTTP/1.1", "Content-Type: application/json", "", '!{"email": "[REDACTED]",', '!"avatar_url": "http://attacker-owned-site.com/image.jpg"}'] },
                                    impact: { title: "Impact:", content: ["!Attacker can exflitrate data"] },
                                    mitigation: { title: "Mitigation:", content: ["!Implement a proxy service that fetches external", "!images and stores them on your servers."] },
                                },
                            },
                            {
                                id: 1,
                                name: "Authorization bypass in Login Form",
                                severity: "CRITICAL",
                                status: "unpatched",
                                payload: {
                                    request: { title: "Request:", content: ["POST /login HTTP/1.1", "Host: company.com", "Content-Type: application/x-www-form-urlencoded", "", "!username=admin' OR '1'='1&password=test"] },
                                    response: { title: "Response:", content: ["HTTP/1.1 302 Found", "Location: /dashboard", "Set-Cookie: session=abc123", "", "!Authentication bypassed - logged in as admin"] },
                                },
                            },
                            {
                                id: 2,
                                name: "IDOR on /api/users/{id}",
                                severity: "CRITICAL",
                                status: "unpatched",
                                payload: {
                                    request: { title: "Request:", content: ["GET /api/users/1337 HTTP/1.1", "Host: company.com", "Authorization: Bearer user123_token"] },
                                    response: { title: "Response:", content: ["HTTP/1.1 200 OK", "Content-Type: application/json", "", '!{"id": 1337, "email": "admin@company.com",', '!"role": "admin", "api_keys": [...]}'] },
                                },
                            },
                            {
                                id: 3,
                                name: "Directory Traversal",
                                severity: "HIGH",
                                status: "unpatched",
                                payload: {
                                    request: { title: "Request:", content: ["GET /download?file=../../../etc/passwd HTTP/1.1", "Host: company.com", "Cookie: session=user123"] },
                                    response: {
                                        title: "Response:",
                                        content: ["HTTP/1.1 200 OK", "Content-Type: text/plain", "Content-Disposition: attachment", "", "!root:x:0:0:root:/root:/bin/bash", "!daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin"],
                                    },
                                },
                            },
                            {
                                id: 4,
                                name: "Insecure Deserialization",
                                severity: "CRITICAL",
                                status: "unpatched",
                                payload: {
                                    request: { title: "Request:", content: ["POST /api/user/update HTTP/1.1", "Host: company.com", "Content-Type: application/json", "", '!{"name": "user", "__proto__": {"isAdmin": true}}'] },
                                    response: { title: "Response:", content: ["HTTP/1.1 200 OK", "Content-Type: application/json", "", '{"status": "success",', '!"user": {"name": "user", "isAdmin": true}}'] },
                                },
                            },
                            {
                                id: 5,
                                name: "CSRF on /api/transfer endpoint",
                                severity: "HIGH",
                                status: "patched",
                                payload: {
                                    request: {
                                        title: "Request:",
                                        content: ["POST /api/transfer HTTP/1.1", "Host: company.com", "Origin: http://evil.com", "Cookie: session=victim_session", "", "!to=attacker&amount=10000&csrf_token=missing"],
                                    },
                                    response: { title: "Response:", content: ["HTTP/1.1 200 OK", "Content-Type: application/json", "", '!{"status": "success",', '!"message": "Transfer completed"}'] },
                                },
                            },
                            {
                                id: 6,
                                name: "Open Redirect",
                                severity: "MEDIUM",
                                status: "unpatched",
                                payload: {
                                    request: { title: "Request:", content: ["GET /logout?redirect=http://phishing.com HTTP/1.1", "Host: company.com", "Cookie: session=user123"] },
                                    response: { title: "Response:", content: ["HTTP/1.1 302 Found", "!Location: http://phishing.com", "Set-Cookie: session=; expires=Thu, 01 Jan 1970", "", "!User redirected to malicious site"] },
                                },
                            },
                        ],
                        z = (e) => new Promise((a) => setTimeout(a, e / t)),
                        A = async (e) => {
                            let t = e.payload.request.content.length,
                                a = e.payload.impact.content.length,
                                s = e.payload.mitigation.content.length;
                            for (let e = 0; e <= t && (y(e), await z(100), N.current); e++);
                            for (let e = 0; e <= a && (v(e), await z(100), N.current); e++);
                            for (let e = 0; e <= s && (w(e), await z(100), N.current); e++);
                        },
                        C = async () => {
                            for (; N.current && (await z(250), N.current); ) {
                                o("scanning"), d(!0), r([]), b(new Set()), y(0), v(0), w(0), u(0);
                                let e = Math.floor(320 / 56);
                                for (let t = 0; t < T.length && (await z(600), N.current); t++)
                                    r((e) => [...e, t]), t >= e - 1 && u(t - (e - 1)), 0 === t && A(T[0]), "patched" === T[t].status && (await z(300), b((e) => new Set([...e, t])));
                                if (!N.current || (await z(1500), d(!1), o("complete"), x(!0), await z(3e3), !N.current) || (o("fading"), x(!1), await z(1e3), !N.current)) break;
                                o("idle"), r([]), b(new Set()), y(0), v(0), w(0), u(0), x(!1), await z(300);
                            }
                        };
                    (0, n.useEffect)(
                        () => (
                            (N.current = !0),
                            C(),
                            () => {
                                (N.current = !1), o("idle"), d(!1), r([]), b(new Set()), y(0), v(0), w(0);
                            }
                        ),
                        [t]
                    );
                    let S = a.length > 0 ? T[a[0]] : null;
                    return (0, s.jsxs)("div", {
                        className: "relative mx-auto w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/80 to-black/80 shadow-2xl border-b-0 border-r-0",
                        children: [
                            (0, s.jsx)("div", {
                                className: "border-b border-white/5 p-4",
                                children: (0, s.jsxs)("div", {
                                    className: "flex justify-between",
                                    children: [
                                        (0, s.jsxs)("div", {
                                            className: "flex items-baseline gap-3",
                                            children: [
                                                (0, s.jsx)("span", { className: "text-base text-zinc-300", children: "Company.com" }),
                                                (0, s.jsx)("div", {
                                                    className: (0, i.cn)(
                                                        "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs transition-all duration-500",
                                                        m ? "border-red-700 bg-red-900 text-red-300 opacity-100" : "opacity-0",
                                                        "fading" === l && "opacity-0"
                                                    ),
                                                    children: "5 unpatched critical",
                                                }),
                                            ],
                                        }),
                                        (0, s.jsx)("div", {
                                            className: (0, i.cn)("inline-flex items-center gap-1 rounded-full border px-3 py-0.75 text-xs transition-all duration-500", "border-zinc-700 bg-zinc-900 text-zinc-300"),
                                            children: c
                                                ? (0, s.jsxs)(s.Fragment, {
                                                      children: [
                                                          (0, s.jsxs)("svg", {
                                                              className: "animate-spin h-3 w-3 mr-1",
                                                              viewBox: "0 0 24 24",
                                                              children: [
                                                                  (0, s.jsx)("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4", fill: "none" }),
                                                                  (0, s.jsx)("path", {
                                                                      className: "opacity-75",
                                                                      fill: "currentColor",
                                                                      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                                                                  }),
                                                              ],
                                                          }),
                                                          "Scanning",
                                                      ],
                                                  })
                                                : "Scan",
                                        }),
                                    ],
                                }),
                            }),
                            (0, s.jsxs)("div", {
                                className: "flex h-80",
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: "w-1/2 border-r border-white/5 relative overflow-hidden",
                                        children: [
                                            (0, s.jsx)("div", {
                                                ref: k,
                                                className: "absolute inset-0 p-4 transition-all duration-500 ease-out",
                                                style: { transform: "translateY(".concat(-(56 * p), "px)"), opacity: "idle" === l && 0 === a.length ? 0 : +("fading" !== l) },
                                                children: T.map((e, t) =>
                                                    (0, s.jsxs)(
                                                        "div",
                                                        {
                                                            className: (0, i.cn)(
                                                                "flex items-center justify-between text-xs py-3 rounded-lg mb-2 h-12 transition-all duration-500",
                                                                a.includes(t) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
                                                                t === a[0] && ""
                                                            ),
                                                            style: { transitionDelay: (a.includes(t), "0ms") },
                                                            children: [
                                                                (0, s.jsx)("span", { className: "text-zinc-400 flex items-center gap-3", children: (0, s.jsx)("span", { className: "font-medium", children: e.name }) }),
                                                                (0, s.jsx)("span", {
                                                                    className: (0, i.cn)(
                                                                        "font-bold text-xs transition-all duration-300 rounded px-2 py-0.5",
                                                                        h.has(t) ? "bg-green-900/50 text-green-400" : "CRITICAL" === e.severity ? "text-red-400" : "HIGH" === e.severity ? "text-orange-400" : "text-yellow-400"
                                                                    ),
                                                                    children: h.has(t) ? "PATCHED" : e.severity,
                                                                }),
                                                            ],
                                                        },
                                                        e.id
                                                    )
                                                ),
                                            }),
                                            ("scanning" === l || "complete" === l || "fading" === l) &&
                                                (0, s.jsx)("div", {
                                                    className: "absolute bottom-4 left-4 right-4 transition-opacity duration-500",
                                                    style: { opacity: +("fading" !== l) },
                                                    children: (0, s.jsx)("div", {
                                                        className: "h-1 bg-white/10 rounded-full overflow-hidden",
                                                        children: (0, s.jsx)("div", {
                                                            className: (0, i.cn)("h-full bg-red-500 rounded-full", c && ""),
                                                            style: { width: "".concat((a.length / T.length) * 100, "%"), transition: "width 0.5s ease-out" },
                                                        }),
                                                    }),
                                                }),
                                        ],
                                    }),
                                    (0, s.jsxs)("div", {
                                        className: "w-1/2 flex flex-col relative overflow-hidden",
                                        children: [
                                            S &&
                                                (0, s.jsxs)("div", {
                                                    className: "absolute inset-0 transition-all duration-400 overflow-y-auto",
                                                    style: { opacity: +(a.length > 0 && "fading" !== l), transform: "translateY(0)" },
                                                    children: [
                                                        (0, s.jsxs)("div", {
                                                            className: "p-4 pb-2",
                                                            children: [
                                                                (0, s.jsx)("div", { className: "font-medium text-xs text-zinc-100 mb-2", children: S.payload.request.title }),
                                                                (0, s.jsx)("div", {
                                                                    className: "font-mono text-xs text-zinc-300 space-y-1",
                                                                    children: S.payload.request.content.map((e, t) => {
                                                                        let a = e.startsWith("!"),
                                                                            n = t < g;
                                                                        return a
                                                                            ? (0, s.jsx)(
                                                                                  "div",
                                                                                  {
                                                                                      className: (0, i.cn)("transition-all duration-300", n ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"),
                                                                                      style: { transitionDelay: "".concat(50 * t, "ms") },
                                                                                      children: (0, s.jsx)("span", { className: "bg-red-900/40 text-red-300", children: e.replace("!", "") || "\xa0" }),
                                                                                  },
                                                                                  "req-".concat(t, "-").concat(e.substring(0, 10))
                                                                              )
                                                                            : (0, s.jsx)(
                                                                                  "div",
                                                                                  {
                                                                                      className: (0, i.cn)("transition-all duration-300", n ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"),
                                                                                      style: { transitionDelay: "".concat(50 * t, "ms") },
                                                                                      children: e || "\xa0",
                                                                                  },
                                                                                  "req-".concat(t, "-").concat(e.substring(0, 10))
                                                                              );
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                        (0, s.jsx)("div", { className: "mx-4 border-t border-white/10" }),
                                                        (0, s.jsxs)("div", {
                                                            className: "p-4 pt-2 pb-2",
                                                            children: [
                                                                (0, s.jsx)("div", { className: "font-medium text-xs text-zinc-100 mb-2", children: S.payload.impact.title }),
                                                                (0, s.jsx)("div", {
                                                                    className: "font-mono text-xs text-zinc-300 space-y-1",
                                                                    children: S.payload.impact.content.map((e, t) => {
                                                                        let a = e.startsWith("!"),
                                                                            n = t < f;
                                                                        return a
                                                                            ? (0, s.jsx)(
                                                                                  "div",
                                                                                  {
                                                                                      className: (0, i.cn)("transition-all duration-300", n ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"),
                                                                                      style: { transitionDelay: "".concat(50 * t, "ms") },
                                                                                      children: (0, s.jsx)("span", { className: "bg-red-900/40 text-red-300", children: e.replace("!", "") || "\xa0" }),
                                                                                  },
                                                                                  "impact-".concat(t, "-").concat(e.substring(0, 10))
                                                                              )
                                                                            : (0, s.jsx)(
                                                                                  "div",
                                                                                  {
                                                                                      className: (0, i.cn)("transition-all duration-300", n ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"),
                                                                                      style: { transitionDelay: "".concat(50 * t, "ms") },
                                                                                      children: e || "\xa0",
                                                                                  },
                                                                                  "impact-".concat(t, "-").concat(e.substring(0, 10))
                                                                              );
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                        (0, s.jsx)("div", { className: "mx-4 border-t border-white/10" }),
                                                        (0, s.jsxs)("div", {
                                                            className: "p-4 pt-2",
                                                            children: [
                                                                (0, s.jsx)("div", { className: "font-medium text-xs text-zinc-100 mb-2", children: S.payload.mitigation.title }),
                                                                (0, s.jsx)("div", {
                                                                    className: "font-mono text-xs text-zinc-300 space-y-1",
                                                                    children: S.payload.mitigation.content.map((e, t) => {
                                                                        let a = e.startsWith("!"),
                                                                            n = t < j;
                                                                        return a
                                                                            ? (0, s.jsx)(
                                                                                  "div",
                                                                                  {
                                                                                      className: (0, i.cn)("transition-all duration-300", n ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"),
                                                                                      style: { transitionDelay: "".concat(50 * t, "ms") },
                                                                                      children: (0, s.jsx)("span", { className: "bg-green-900/40 text-green-300", children: e.replace("!", "") || "\xa0" }),
                                                                                  },
                                                                                  "mitigation-".concat(t, "-").concat(e.substring(0, 10))
                                                                              )
                                                                            : (0, s.jsx)(
                                                                                  "div",
                                                                                  {
                                                                                      className: (0, i.cn)("transition-all duration-300", n ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"),
                                                                                      style: { transitionDelay: "".concat(50 * t, "ms") },
                                                                                      children: e || "\xa0",
                                                                                  },
                                                                                  "mitigation-".concat(t, "-").concat(e.substring(0, 10))
                                                                              );
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            c &&
                                                (0, s.jsx)("div", {
                                                    className: "absolute inset-0 pointer-events-none",
                                                    children: (0, s.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-red-900/5 to-transparent animate-pulse" }),
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                l = (e) => {
                    let { speedFactor: t } = e,
                        [a, r] = (0, n.useState)([]),
                        [l, o] = (0, n.useState)("idle"),
                        [c, d] = (0, n.useState)(!1),
                        [m, x] = (0, n.useState)(!1),
                        [p, u] = (0, n.useState)(0),
                        [h, b] = (0, n.useState)(new Set()),
                        [g, y] = (0, n.useState)(0),
                        [f, v] = (0, n.useState)("request"),
                        [j, w] = (0, n.useState)(!1),
                        N = (0, n.useRef)(!0),
                        k = (0, n.useRef)(null),
                        T = [
                            {
                                id: 0,
                                name: "OOB SSRF in User Profile Update",
                                severity: "HIGH",
                                status: "patched",
                                payload: {
                                    request: { title: "Request:", content: ["PATCH /api/v1/user HTTP/1.1", "Content-Type: application/json", "", '!{"email": "[REDACTED]",', '!"avatar_url": "http://attacker-owned-site.com/image.jpg"}'] },
                                    impact: { title: "Impact:", content: ["!Server makes HTTP requests to arbitrary domains,", "!allowing attackers to access internal services", "!or exfiltrate data."] },
                                    mitigation: { title: "Mitigation:", content: ["!Implement a proxy service that fetches external", "!images and stores them on your servers."] },
                                },
                            },
                            {
                                id: 1,
                                name: "Authorization bypass in Login Form",
                                severity: "CRITICAL",
                                status: "unpatched",
                                payload: {
                                    request: { title: "Request:", content: ["POST /login HTTP/1.1", "Host: company.com", "Content-Type: application/x-www-form-urlencoded", "", "!username=admin' OR '1'='1&password=test"] },
                                    response: { title: "Response:", content: ["HTTP/1.1 302 Found", "Location: /dashboard", "Set-Cookie: session=abc123", "", "!Authentication bypassed - logged in as admin"] },
                                },
                            },
                            {
                                id: 2,
                                name: "IDOR on /api/users/{id}",
                                severity: "CRITICAL",
                                status: "unpatched",
                                payload: {
                                    request: { title: "Request:", content: ["GET /api/users/1337 HTTP/1.1", "Host: company.com", "Authorization: Bearer user123_token"] },
                                    response: { title: "Response:", content: ["HTTP/1.1 200 OK", "Content-Type: application/json", "", '!{"id": 1337, "email": "admin@company.com",', '!"role": "admin", "api_keys": [...]}'] },
                                },
                            },
                            {
                                id: 3,
                                name: "Directory Traversal",
                                severity: "HIGH",
                                status: "unpatched",
                                payload: {
                                    request: { title: "Request:", content: ["GET /download?file=../../../etc/passwd HTTP/1.1", "Host: company.com", "Cookie: session=user123"] },
                                    response: {
                                        title: "Response:",
                                        content: ["HTTP/1.1 200 OK", "Content-Type: text/plain", "Content-Disposition: attachment", "", "!root:x:0:0:root:/root:/bin/bash", "!daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin"],
                                    },
                                },
                            },
                            {
                                id: 4,
                                name: "Insecure Deserialization",
                                severity: "CRITICAL",
                                status: "unpatched",
                                payload: {
                                    request: { title: "Request:", content: ["POST /api/user/update HTTP/1.1", "Host: company.com", "Content-Type: application/json", "", '!{"name": "user", "__proto__": {"isAdmin": true}}'] },
                                    response: { title: "Response:", content: ["HTTP/1.1 200 OK", "Content-Type: application/json", "", '{"status": "success",', '!"user": {"name": "user", "isAdmin": true}}'] },
                                },
                            },
                            {
                                id: 5,
                                name: "CSRF on /api/transfer endpoint",
                                severity: "HIGH",
                                status: "patched",
                                payload: {
                                    request: {
                                        title: "Request:",
                                        content: ["POST /api/transfer HTTP/1.1", "Host: company.com", "Origin: http://evil.com", "Cookie: session=victim_session", "", "!to=attacker&amount=10000&csrf_token=missing"],
                                    },
                                    response: { title: "Response:", content: ["HTTP/1.1 200 OK", "Content-Type: application/json", "", '!{"status": "success",', '!"message": "Transfer completed"}'] },
                                },
                            },
                            {
                                id: 6,
                                name: "Open Redirect",
                                severity: "MEDIUM",
                                status: "unpatched",
                                payload: {
                                    request: { title: "Request:", content: ["GET /logout?redirect=http://phishing.com HTTP/1.1", "Host: company.com", "Cookie: session=user123"] },
                                    response: { title: "Response:", content: ["HTTP/1.1 302 Found", "!Location: http://phishing.com", "Set-Cookie: session=; expires=Thu, 01 Jan 1970", "", "!User redirected to malicious site"] },
                                },
                            },
                        ],
                        z = (e) => new Promise((a) => setTimeout(a, e / t));
                    (0, n.useEffect)(
                        () => (
                            k.current && clearInterval(k.current),
                            (k.current = setInterval(() => {
                                w(!0),
                                    setTimeout(() => {
                                        v((e) => ("request" === e ? "impact-mitigation" : "request")),
                                            setTimeout(() => {
                                                w(!1);
                                            }, 50);
                                    }, 150);
                            }, 3e3)),
                            () => {
                                k.current && clearInterval(k.current);
                            }
                        ),
                        [t]
                    );
                    let A = async () => {
                        for (; N.current && (await z(250), N.current); ) {
                            o("scanning"), d(!0), r([]), b(new Set()), u(0);
                            let e = Math.floor(208 / 44);
                            for (let t = 0; t < T.length && (await z(500), N.current); t++) r((e) => [...e, t]), 0 === t && y(0), t >= e - 1 && u(t - (e - 1)), "patched" === T[t].status && (await z(200), b((e) => new Set([...e, t])));
                            if (!N.current || (await z(1e3), d(!1), o("complete"), x(!0), await z(2500), !N.current) || (o("fading"), x(!1), await z(1e3), !N.current)) break;
                            o("idle"), r([]), b(new Set()), u(0), y(0), x(!1), await z(300);
                        }
                    };
                    (0, n.useEffect)(
                        () => (
                            (N.current = !0),
                            A(),
                            () => {
                                (N.current = !1), o("idle"), d(!1), r([]), b(new Set());
                            }
                        ),
                        [t]
                    );
                    let C = T.find((e) => e.id === g);
                    return (0, s.jsxs)("div", {
                        className: "relative mx-auto w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/80 to-black/80 shadow-2xl border-b-0 border-r-0 mb-12",
                        children: [
                            (0, s.jsx)("div", {
                                className: "border-b border-white/5 p-3",
                                children: (0, s.jsx)("div", {
                                    className: "flex flex-col gap-2",
                                    children: (0, s.jsxs)("div", {
                                        className: "flex justify-between",
                                        children: [
                                            (0, s.jsxs)("div", {
                                                className: "flex items-baseline gap-2",
                                                children: [
                                                    (0, s.jsx)("span", { className: "text-sm text-zinc-300", children: "Company.com" }),
                                                    (0, s.jsx)("div", {
                                                        className: (0, i.cn)(
                                                            "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs transition-all duration-500",
                                                            m ? "border-red-700 bg-red-900 text-red-300 opacity-100" : "opacity-0",
                                                            "fading" === l && "opacity-0"
                                                        ),
                                                        children: "5 unpatched critical",
                                                    }),
                                                ],
                                            }),
                                            (0, s.jsx)("div", {
                                                className: (0, i.cn)("inline-flex items-center gap-1 rounded-full border px-2 py-0.75 text-xs transition-all duration-500 self-start", "border-zinc-700 bg-zinc-900 text-zinc-300"),
                                                children: c
                                                    ? (0, s.jsxs)(s.Fragment, {
                                                          children: [
                                                              (0, s.jsxs)("svg", {
                                                                  className: "animate-spin h-3 w-3 mr-1",
                                                                  viewBox: "0 0 24 24",
                                                                  children: [
                                                                      (0, s.jsx)("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4", fill: "none" }),
                                                                      (0, s.jsx)("path", {
                                                                          className: "opacity-75",
                                                                          fill: "currentColor",
                                                                          d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                                                                      }),
                                                                  ],
                                                              }),
                                                              (0, s.jsx)("span", { children: "Scanning" }),
                                                          ],
                                                      })
                                                    : "Scan",
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                            (0, s.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: "border-b border-white/5 relative overflow-hidden h-52",
                                        children: [
                                            (0, s.jsx)("div", {
                                                className: "absolute inset-0 p-3 transition-all duration-500 ease-out",
                                                style: { transform: "translateY(".concat(-(44 * p), "px)"), opacity: "idle" === l && 0 === a.length ? 0 : +("fading" !== l) },
                                                children: T.map((e, t) =>
                                                    (0, s.jsxs)(
                                                        "button",
                                                        {
                                                            type: "button",
                                                            className: (0, i.cn)(
                                                                "flex items-center justify-between text-xs cursor-pointer rounded-lg w-full mb-1 h-10 transition-all duration-500",
                                                                (e.id, ""),
                                                                a.includes(t) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                                                            ),
                                                            onClick: () => y(e.id),
                                                            "aria-pressed": g === e.id,
                                                            style: { transitionDelay: (a.includes(t), "0ms") },
                                                            children: [
                                                                (0, s.jsx)("span", { className: "text-zinc-400 flex items-center gap-2", children: (0, s.jsx)("span", { className: "font-medium text-left", children: e.name }) }),
                                                                (0, s.jsx)("span", {
                                                                    className: (0, i.cn)(
                                                                        "font-bold text-xs whitespace-nowrap transition-all duration-300 rounded px-1.5 py-0.5",
                                                                        h.has(t) ? "bg-green-900/50 text-green-400" : "CRITICAL" === e.severity ? "text-red-400" : "HIGH" === e.severity ? "text-orange-400" : "text-yellow-400"
                                                                    ),
                                                                    children: h.has(t) ? "PATCHED" : e.severity,
                                                                }),
                                                            ],
                                                        },
                                                        e.id
                                                    )
                                                ),
                                            }),
                                            ("scanning" === l || "complete" === l || "fading" === l) &&
                                                (0, s.jsx)("div", {
                                                    className: "absolute bottom-2 left-3 right-3 transition-opacity duration-500",
                                                    style: { opacity: +("fading" !== l) },
                                                    children: (0, s.jsx)("div", {
                                                        className: "h-0.5 bg-white/10 rounded-full overflow-hidden",
                                                        children: (0, s.jsx)("div", {
                                                            className: (0, i.cn)("h-full bg-red-500 rounded-full", c && ""),
                                                            style: { width: "".concat((a.length / T.length) * 100, "%"), transition: "width 0.5s ease-out" },
                                                        }),
                                                    }),
                                                }),
                                        ],
                                    }),
                                    (0, s.jsx)("div", {
                                        className: "flex flex-col h-48 overflow-hidden",
                                        children:
                                            C &&
                                            (0, s.jsx)("div", {
                                                className: "p-3",
                                                children: (0, s.jsxs)("div", {
                                                    className: "relative",
                                                    children: [
                                                        (0, s.jsx)("div", {
                                                            className: "transition-all duration-300 ease-out",
                                                            style: { opacity: "request" !== f || j ? 0 : 1, transform: "request" !== f || j ? "translateY(10px)" : "translateY(0)" },
                                                            children: (0, s.jsxs)("div", {
                                                                children: [
                                                                    (0, s.jsx)("span", { className: "font-medium text-xs text-zinc-100", children: C.payload.request.title }),
                                                                    (0, s.jsx)("div", {
                                                                        className: "font-mono text-[10px] text-zinc-300 space-y-0.5 mt-1",
                                                                        children: C.payload.request.content.map((e, t) =>
                                                                            e.startsWith("!")
                                                                                ? (0, s.jsx)(
                                                                                      "div",
                                                                                      {
                                                                                          className: "break-all",
                                                                                          children: (0, s.jsx)("span", { className: "bg-red-900/40 text-red-300 px-0.5 rounded text-[10px]", children: e.replace("!", "") || "\xa0" }),
                                                                                      },
                                                                                      "req-".concat(t, "-").concat(e.substring(0, 10))
                                                                                  )
                                                                                : (0, s.jsx)("div", { className: "break-all", children: e || "\xa0" }, "req-".concat(t, "-").concat(e.substring(0, 10)))
                                                                        ),
                                                                    }),
                                                                ],
                                                            }),
                                                        }),
                                                        (0, s.jsx)("div", {
                                                            className: "transition-all duration-300 ease-out absolute top-0 left-0 right-0",
                                                            style: { opacity: "impact-mitigation" !== f || j ? 0 : 1, transform: "impact-mitigation" !== f || j ? "translateY(10px)" : "translateY(0)" },
                                                            children: (0, s.jsxs)("div", {
                                                                className: "space-y-3",
                                                                children: [
                                                                    (0, s.jsxs)("div", {
                                                                        children: [
                                                                            (0, s.jsx)("span", { className: "font-medium text-xs text-zinc-100", children: C.payload.impact.title }),
                                                                            (0, s.jsx)("div", {
                                                                                className: "font-mono text-[10px] text-zinc-300 space-y-0.5 mt-1",
                                                                                children: C.payload.impact.content.map((e, t) =>
                                                                                    e.startsWith("!")
                                                                                        ? (0, s.jsx)(
                                                                                              "div",
                                                                                              {
                                                                                                  className: "break-all",
                                                                                                  children: (0, s.jsx)("span", { className: "bg-red-900/40 text-red-300 px-0.5 rounded text-[10px]", children: e.replace("!", "") || "\xa0" }),
                                                                                              },
                                                                                              "impact-".concat(t, "-").concat(e.substring(0, 10))
                                                                                          )
                                                                                        : (0, s.jsx)("div", { className: "break-all", children: e || "\xa0" }, "impact-".concat(t, "-").concat(e.substring(0, 10)))
                                                                                ),
                                                                            }),
                                                                        ],
                                                                    }),
                                                                    (0, s.jsx)("div", { className: "border-t border-white/10" }),
                                                                    (0, s.jsxs)("div", {
                                                                        children: [
                                                                            (0, s.jsx)("span", { className: "font-medium text-xs text-zinc-100", children: C.payload.mitigation.title }),
                                                                            (0, s.jsx)("div", {
                                                                                className: "font-mono text-[10px] text-zinc-300 space-y-0.5 mt-1",
                                                                                children: C.payload.mitigation.content.map((e, t) =>
                                                                                    e.startsWith("!")
                                                                                        ? (0, s.jsx)(
                                                                                              "div",
                                                                                              {
                                                                                                  className: "break-all",
                                                                                                  children: (0, s.jsx)("span", { className: "bg-green-900/40 text-green-300 text-[10px]", children: e.replace("!", "") || "\xa0" }),
                                                                                              },
                                                                                              "mitigation-".concat(t, "-").concat(e.substring(0, 10))
                                                                                          )
                                                                                        : (0, s.jsx)("div", { className: "break-all", children: e || "\xa0" }, "mitigation-".concat(t, "-").concat(e.substring(0, 10)))
                                                                                ),
                                                                            }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            }),
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                o = (e) => {
                    let { speedFactor: t = 2 } = e;
                    return (0, s.jsxs)("div", {
                        children: [(0, s.jsx)("div", { className: "hidden md:block", children: (0, s.jsx)(r, { speedFactor: t }) }), (0, s.jsx)("div", { className: "block md:hidden", children: (0, s.jsx)(l, { speedFactor: t }) })],
                    });
                },
                c = [
                    {
                        id: 0,
                        name: "Certificate Verification Disabled",
                        severity: "HIGH",
                        payload: {
                            vulnerable: [
                                "src/api/client.py:37-43",
                                "",
                                "37: response = requests.get(",
                                "38:     url,",
                                "39:     params=data,",
                                "40:     headers=headers,",
                                "41:     verify=False,  # ! Dangerous!",
                                "42:     proxies=config.proxies",
                                "43: )",
                            ],
                            patched: ["src/api/client.py:37-43", "", "37: response = requests.get(", "38:     url,", "39:     params=data,", "40:     headers=headers,", "41:     verify=True,", "42:     proxies=config.proxies", "43: )"],
                        },
                    },
                    {
                        id: 1,
                        name: "Insecure Hash Algorithm (SHA1)",
                        severity: "MEDIUM",
                        payload: {
                            vulnerable: [
                                "src/utils/crypto.py:15-18",
                                "",
                                "15: import hashlib",
                                "16: ",
                                "17: def hash_password(password):",
                                "18:     return hashlib.sha1(password.encode()).hexdigest()",
                                "! SHA1 is cryptographically broken",
                                "! Use SHA-256 or bcrypt instead",
                            ],
                            patched: [
                                "src/utils/crypto.py:15-18",
                                "",
                                "15: import bcrypt",
                                "16: ",
                                "17: def hash_password(password):",
                                "18:     return bcrypt.hashpw(password.encode(), bcrypt.gensalt())",
                                "✓ Fixed: Using bcrypt for secure hashing",
                            ],
                        },
                    },
                    {
                        id: 2,
                        name: "Hardcoded Secret in Code",
                        severity: "CRITICAL",
                        payload: {
                            vulnerable: [
                                "src/config/settings.py:23",
                                "",
                                "22: # Database configuration",
                                "23: API_KEY = 'sk_live_51H3bWjKCRQs76D8j...'",
                                "24: DATABASE_URL = 'postgresql://...'",
                                "",
                                "! API key should be in environment variables",
                                "! Rotate this key immediately",
                            ],
                            patched: [
                                "src/config/settings.py:23",
                                "",
                                "22: # Database configuration",
                                "23: API_KEY = os.getenv('API_KEY')",
                                "24: DATABASE_URL = os.getenv('DATABASE_URL')",
                                "",
                                "✓ Fixed: Using environment variables",
                                "✓ Key rotated and secured",
                            ],
                        },
                    },
                ];
            function d(e) {
                let { variant: t, speedFactor: a } = e,
                    { stage: r, selectedVuln: l, setSelectedVuln: o, patched: d, showPR: u, isPatching: h } = (function (e) {
                        let { speedFactor: t, variant: a } = e,
                            [s, i] = (0, n.useState)("idle"),
                            [r, l] = (0, n.useState)(0),
                            [o, d] = (0, n.useState)(new Set()),
                            [m, x] = (0, n.useState)(!1),
                            p = (0, n.useRef)(!0),
                            u = "desktop" === a ? { firstDelay: 2e3, perPatch: 800, afterPatch: 1e3, beforeReset: 5e3 } : { firstDelay: 1e3, perPatch: 500, afterPatch: 800, beforeReset: 3e3 },
                            h = (e) => new Promise((a) => setTimeout(a, e / t)),
                            b = async () => {
                                for (; p.current && (await h(u.firstDelay), p.current); ) {
                                    i("patching"), d(new Set()), x(!1);
                                    for (let e = 0; e < c.length && (await h(u.perPatch), p.current); e++) d((t) => new Set([...t, e]));
                                    if (!p.current || (await h(u.afterPatch), i("pr-created"), x(!0), await h(u.beforeReset), !p.current) || (i("fading"), await h(1e3), !p.current)) break;
                                    i("idle"), d(new Set()), x(!1), await h(300);
                                }
                            };
                        return (
                            (0, n.useEffect)(
                                () => (
                                    (p.current = !0),
                                    b(),
                                    () => {
                                        p.current = !1;
                                    }
                                ),
                                [t, a]
                            ),
                            { stage: s, selectedVuln: r, setSelectedVuln: l, patched: o, showPR: m, isPatching: "patching" === s }
                        );
                    })({ speedFactor: a, variant: t }),
                    b = c.find((e) => e.id === l),
                    g = "desktop" === t,
                    y = (0, i.cn)("relative mx-auto w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/80 to-black/80 shadow-2xl border-b-0 border-r-0", !g && "mb-12"),
                    f = "px-2 py-3",
                    v = "text-xs";
                return (0, s.jsxs)("div", {
                    className: y,
                    children: [
                        (0, s.jsx)("div", {
                            className: (0, i.cn)("border-b border-white/5", g ? "p-4" : "p-3"),
                            children: (0, s.jsxs)("div", {
                                className: "flex justify-between flex-wrap gap-2",
                                children: [
                                    (0, s.jsx)("div", { className: "flex items-baseline gap-2", children: (0, s.jsx)("span", { className: (0, i.cn)(g ? "text-base" : "text-sm", "text-zinc-300"), children: "company-repo/backend" }) }),
                                    (0, s.jsx)("div", {
                                        className: (0, i.cn)("inline-flex items-center gap-1 rounded-full border px-3 py-0.5 text-xs transition-all duration-500", "border-zinc-700 bg-zinc-900 text-zinc-300"),
                                        children: h ? (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(m, { className: "h-3 w-3 mr-1" }), g ? "Patching..." : "Patching"] }) : (0, s.jsx)(s.Fragment, { children: "Patch" }),
                                    }),
                                ],
                            }),
                        }),
                        (0, s.jsxs)("div", {
                            className: (0, i.cn)(g ? "flex" : "", g ? "h-80" : void 0),
                            children: [
                                (0, s.jsxs)("div", {
                                    className: (0, i.cn)(g ? "w-1/2" : "", "border-r border-white/5 overflow-y-auto relative"),
                                    children: [
                                        (0, s.jsx)("div", {
                                            className: (0, i.cn)(f, "space-y-2", !g && "max-h-60", "transition-opacity duration-1000", "fading" === r ? "opacity-0" : "opacity-100"),
                                            children: c.map((e, t) => {
                                                let a = d.has(t),
                                                    n = l === e.id,
                                                    r = a ? "text-green-400" : "CRITICAL" === e.severity ? "text-red-400/70" : "HIGH" === e.severity ? "text-orange-400/70" : "text-zinc-400";
                                                return (0, s.jsxs)(
                                                    "button",
                                                    {
                                                        type: "button",
                                                        className: (0, i.cn)("flex items-center justify-between cursor-pointer transition-all duration-500 w-full", f, "", a && "opacity-50"),
                                                        onClick: () => o(e.id),
                                                        "aria-pressed": n,
                                                        children: [
                                                            (0, s.jsx)("span", {
                                                                className: (0, i.cn)("gap-3 text-zinc-400", v),
                                                                children: (0, s.jsx)("span", { className: (0, i.cn)("font-medium transition-all duration-300 text-left", a && "line-through"), children: e.name }),
                                                            }),
                                                            (0, s.jsxs)("div", {
                                                                className: "relative",
                                                                children: [
                                                                    !a && (0, s.jsx)("span", { className: (0, i.cn)("font-bold transition-all duration-500 animate-fade-up", v, r, h && "animate-fade-out"), children: e.severity }),
                                                                    a && (0, s.jsx)("span", { className: (0, i.cn)("font-bold animate-fade-up animate-fade-in", v, r), children: "PATCHED" }),
                                                                ],
                                                            }),
                                                        ],
                                                    },
                                                    e.id
                                                );
                                            }),
                                        }),
                                        u && g && (0, s.jsx)("div", { className: (0, i.cn)("transition-opacity duration-1000", "fading" === r ? "opacity-0" : "opacity-100"), children: (0, s.jsx)(p, { variant: t }) }),
                                    ],
                                }),
                                (0, s.jsxs)("div", {
                                    className: (0, i.cn)(g ? "w-1/2" : "", "flex flex-col min-h-[200px] relative", "transition-opacity duration-1000 px-3", "fading" === r ? "opacity-0" : "opacity-100"),
                                    children: [
                                        (0, s.jsxs)("span", { className: (0, i.cn)(f.replace("p-", "px-") + " mt-4 font-medium", "text-xs"), children: [" ", d.has(b.id) ? "Patched code" : "Vulnerable line"] }),
                                        (0, s.jsx)("div", {
                                            className: (0, i.cn)("flex-1 overflow-y-auto", f),
                                            children: (0, s.jsx)("div", {
                                                className: (0, i.cn)("font-mono space-y-1 text-zinc-300", v),
                                                children: (d.has(b.id) ? b.payload.patched : b.payload.vulnerable).map((e, t) => {
                                                    let a = e.startsWith("!") || e.includes("verify=False") || e.includes("API_KEY") || e.includes("sha1"),
                                                        n = d.has(b.id) && (e.startsWith("✓") || e.includes("verify=True") || e.includes("bcrypt") || e.includes("os.getenv")),
                                                        i = "".concat(t, "-").concat(e.slice(0, 10));
                                                    return n ? (0, s.jsx)(x, { type: "fixed", line: e }, i) : a && !d.has(b.id) ? (0, s.jsx)(x, { type: "highlight", line: e }, i) : (0, s.jsx)(x, { type: "normal", line: e }, i);
                                                }),
                                            }),
                                        }),
                                        u && !g && (0, s.jsx)("div", { className: (0, i.cn)("transition-opacity duration-1000", "fading" === r ? "opacity-0" : "opacity-100"), children: (0, s.jsx)(p, { variant: t }) }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            }
            function m(e) {
                let { className: t } = e;
                return (0, s.jsxs)("svg", {
                    className: (0, i.cn)("animate-spin", t),
                    viewBox: "0 0 24 24",
                    children: [
                        (0, s.jsx)("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4", fill: "none" }),
                        (0, s.jsx)("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" }),
                    ],
                });
            }
            function x(e) {
                let { line: t, type: a } = e,
                    n = (0, i.cn)("fixed" === a && "bg-green-900/40 text-green-300/70 animate-fade-in", "highlight" === a && "bg-red-900/40 text-red-300/70", "normal" === a && "");
                return (0, s.jsxs)("div", { className: (0, i.cn)("normal" !== a && "break-all"), children: [" ", (0, s.jsx)("span", { className: n, children: t || "\xa0" })] });
            }
            function p(e) {
                let { variant: t } = e,
                    a = "desktop" === t;
                return (0, s.jsx)("div", {
                    className: (0, i.cn)("absolute z-30 animate-fade-in", "bottom-4 left-4 right-4"),
                    children: (0, s.jsxs)("div", {
                        className: "bg-green-900/90 border border-green-700 rounded-lg p-3 shadow-lg backdrop-blur-sm",
                        children: [
                            (0, s.jsxs)("div", {
                                className: (0, i.cn)("flex items-center gap-2 text-green-300", a ? "text-xs" : "text-[11px]"),
                                children: [(0, s.jsx)(u, { className: a ? "w-4 h-4" : "w-3 h-3" }), (0, s.jsx)("span", { className: "font-medium", children: "PR #1247" })],
                            }),
                            (0, s.jsx)("div", { className: (0, i.cn)("mt-1 text-green-400", a ? "text-xs truncate" : "text-[10px] truncate"), children: "github.com/company-repo/backend/pull/1247" }),
                        ],
                    }),
                });
            }
            function u(e) {
                let { className: t } = e;
                return (0, s.jsx)("svg", {
                    className: (0, i.cn)(t),
                    fill: "currentColor",
                    viewBox: "0 0 16 16",
                    children: (0, s.jsx)("path", {
                        d:
                            "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z",
                    }),
                });
            }
            let h = (e) => {
                    let { speedFactor: t = 2 } = e;
                    return (0, s.jsxs)("div", {
                        children: [
                            (0, s.jsx)("div", { className: "hidden md:block", children: (0, s.jsx)(d, { variant: "desktop", speedFactor: t }) }),
                            (0, s.jsx)("div", { className: "block md:hidden", children: (0, s.jsx)(d, { variant: "mobile", speedFactor: t }) }),
                        ],
                    });
                },
                b = [
                    { email: "alice@company.com", role: "Admin", domains: ["company.com", "api.company.com"] },
                    { email: "bob@company.com", role: "Member", domains: ["company.com"] },
                    { email: "charlie@company.com", role: "Member", domains: ["api.company.com"] },
                    { email: "diana@company.com", role: "Pending", domains: [] },
                ];
            function g(e) {
                let [t, a] = (0, n.useState)("idle"),
                    [s, i] = (0, n.useState)(!1),
                    [r, l] = (0, n.useState)([]),
                    o = (0, n.useRef)(!1),
                    c = (0, n.useRef)(!1),
                    d = (t) => new Promise((a) => setTimeout(a, t / e));
                return (
                    (0, n.useEffect)(() => {
                        if (!c.current)
                            return (
                                (c.current = !0),
                                (o.current = !0),
                                (async () => {
                                    for (; o.current; ) {
                                        for (let [e, t] of (a("idle"), l([]), await d(400), a("building"), i(!0), b.entries())) {
                                            if (!o.current) return;
                                            0 === e ? l([t]) : l((e) => (e.some((e) => e.email === t.email) ? e : [...e, t])), await d(800);
                                        }
                                        i(!1), a("complete"), await d(2e3), a("fading"), await d(1e3);
                                    }
                                })(),
                                () => {
                                    (o.current = !1), (c.current = !1);
                                }
                            );
                    }, [e]),
                    { animationStage: t, isBuilding: s, teamMembers: r }
                );
            }
            let y = (e) => {
                    let { member: t, desktop: a = !0 } = e;
                    return (0, s.jsxs)("div", {
                        className: "transition-opacity duration-500 animate-fade-in",
                        children: [
                            (0, s.jsxs)("div", {
                                className: "flex items-center justify-between mb-".concat(a ? "1" : "2"),
                                children: [
                                    (0, s.jsx)("span", { className: "".concat(a ? "text-sm" : "text-xs", " text-zinc-300 break-all"), children: t.email }),
                                    (0, s.jsx)("span", {
                                        className: "text-xs font-medium px-2 py-0.5 rounded-full transition-colors duration-500 ".concat("Admin" === t.role ? "bg-yellow-900 text-yellow-300" : "bg-zinc-800 text-zinc-300"),
                                        children: t.role,
                                    }),
                                ],
                            }),
                            (0, s.jsx)("div", {
                                className: "".concat(a ? "text-xs" : "text-[11px]", " text-zinc-500"),
                                children: t.domains.length
                                    ? (0, s.jsxs)(s.Fragment, {
                                          children: [
                                              (0, s.jsx)("span", { className: "text-zinc-600", children: "Access: " }),
                                              (0, s.jsx)("div", {
                                                  className: "inline-flex flex-wrap gap-1",
                                                  children: t.domains.map((e) => (0, s.jsx)("span", { className: "text-xs bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded-full", children: e }, e)),
                                              }),
                                          ],
                                      })
                                    : (0, s.jsx)("span", { className: "italic", children: "Invitation pending" }),
                            }),
                        ],
                    });
                },
                f = (e) => {
                    let { speedFactor: t } = e,
                        { animationStage: a, isBuilding: n, teamMembers: i } = g(t);
                    return (0, s.jsxs)("div", {
                        className: "relative mx-auto w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/80 to-black/80 shadow-2xl border-b-0 border-r-0",
                        children: [
                            (0, s.jsxs)("div", {
                                className: "p-4 border-b border-white/5 flex justify-between items-center",
                                children: [
                                    (0, s.jsx)("div", { className: "flex items-baseline gap-3", children: (0, s.jsx)("span", { className: "text-base text-zinc-300", children: "Team Members" }) }),
                                    (0, s.jsx)("button", {
                                        type: "button",
                                        className: "inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs cursor-pointer transition-all duration-500 ".concat(
                                            n ? "border-zinc-700 bg-zinc-900 text-zinc-300" : "complete" === a ? "border-green-600 bg-green-900 text-green-300" : "border-zinc-700 bg-zinc-900 text-zinc-300 hover:bg-zinc-800"
                                        ),
                                        children: n
                                            ? (0, s.jsxs)(s.Fragment, {
                                                  children: [
                                                      (0, s.jsxs)("svg", {
                                                          className: "animate-spin h-3 w-3 mr-1",
                                                          viewBox: "0 0 24 24",
                                                          children: [
                                                              (0, s.jsx)("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4", fill: "none" }),
                                                              (0, s.jsx)("path", {
                                                                  className: "opacity-75",
                                                                  fill: "currentColor",
                                                                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                                                              }),
                                                          ],
                                                      }),
                                                      "Adding Members...",
                                                  ],
                                              })
                                            : "Add Team Member",
                                    }),
                                ],
                            }),
                            (0, s.jsx)("div", {
                                className: "p-4 h-80 overflow-y-hidden",
                                children: (0, s.jsx)("div", { className: "space-y-5 transition-opacity duration-1000 ".concat("fading" === a ? "opacity-0" : "opacity-100"), children: i.map((e) => (0, s.jsx)(y, { member: e }, e.email)) }),
                            }),
                        ],
                    });
                },
                v = (e) => {
                    let { speedFactor: t } = e,
                        { animationStage: a, isBuilding: n, teamMembers: i } = g(t);
                    return (0, s.jsxs)("div", {
                        className: "relative h-[20rem] mx-auto w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/80 to-black/80 shadow-2xl border-b-0 border-r-0 mb-2 md:mb-12",
                        children: [
                            (0, s.jsxs)("div", {
                                className: "p-3 border-b border-white/5 flex justify-between flex-wrap",
                                children: [
                                    (0, s.jsx)("div", { className: "flex items-baseline gap-2", children: (0, s.jsx)("span", { className: "text-sm text-zinc-300", children: "Team Members" }) }),
                                    (0, s.jsx)("button", {
                                        type: "button",
                                        className: "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs cursor-pointer transition-all duration-500 self-start ".concat(
                                            n ? "border-zinc-700 bg-zinc-900 text-zinc-300" : "complete" === a ? "bg-green-900 text-green-300" : "border-zinc-700 bg-zinc-900 text-zinc-300 hover:bg-zinc-800"
                                        ),
                                        children: n
                                            ? (0, s.jsxs)(s.Fragment, {
                                                  children: [
                                                      (0, s.jsxs)("svg", {
                                                          className: "animate-spin h-3 w-3 mr-1",
                                                          viewBox: "0 0 24 24",
                                                          children: [
                                                              (0, s.jsx)("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4", fill: "none" }),
                                                              (0, s.jsx)("path", {
                                                                  className: "opacity-75",
                                                                  fill: "currentColor",
                                                                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                                                              }),
                                                          ],
                                                      }),
                                                      (0, s.jsx)("span", { children: "Adding..." }),
                                                  ],
                                              })
                                            : "Add Member",
                                    }),
                                ],
                            }),
                            (0, s.jsx)("div", {
                                className: "p-3",
                                children: (0, s.jsx)("div", {
                                    className: "space-y-4 transition-opacity duration-1000 ".concat("fading" === a ? "opacity-0" : "opacity-100"),
                                    children: i.map((e) => (0, s.jsx)(y, { member: e, desktop: !1 }, e.email)),
                                }),
                            }),
                        ],
                    });
                },
                j = (e) => {
                    let { speedFactor: t = 2 } = e;
                    return (0, s.jsxs)("div", {
                        children: [(0, s.jsx)("div", { className: "hidden md:block", children: (0, s.jsx)(f, { speedFactor: t }) }), (0, s.jsx)("div", { className: "block md:hidden", children: (0, s.jsx)(v, { speedFactor: t }) })],
                    });
                };
            var w = a(6208),
                N = a(4096),
                k = a(9431);
            let T = (0, a(2994).A)("CircleCheck", [
                ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
                ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
            ]);
            var z = a(2064),
                A = a.n(z);
            let C = (e) => {
                let { options: t, value: a, onChange: i } = e,
                    [r, l] = (0, n.useState)({}),
                    o = (0, n.useRef)([]),
                    c = (0, n.useRef)(null);
                return (
                    (0, n.useEffect)(() => {
                        if (o.current[a] && c.current) {
                            let e = o.current[a],
                                t = c.current,
                                s = e.getBoundingClientRect(),
                                n = t.getBoundingClientRect();
                            l({ left: "".concat(s.left - n.left, "px"), width: "".concat(s.width, "px") });
                        }
                    }, [a]),
                    (0, s.jsxs)("div", {
                        ref: c,
                        className: "relative inline-flex items-center gap-1 p-1.5 border border-white/20 rounded-2xl bg-gradient-to-r from-black/60 via-gray-900/60 to-black/60 backdrop-blur-2xl shadow-2xl shadow-black/20",
                        children: [
                            (0, s.jsx)("div", {
                                className: "absolute bg-gradient-to-r from-red-500/30 via-orange-500/25 to-red-500/30 rounded-xl transition-all duration-300 ease-out backdrop-blur-sm shadow-lg shadow-red-500/20 border border-red-500/20",
                                style: { ...r, top: "6px", bottom: "6px" },
                            }),
                            (0, s.jsx)("div", {
                                className: "absolute bg-gradient-to-r from-red-500/30 via-orange-500/25 to-red-600/30 rounded-xl transition-all duration-300 ease-out blur-sm",
                                style: { ...r, top: "2px", bottom: "2px", left: r.left ? "calc(".concat(r.left, " - 2px)") : "0px", width: r.width ? "calc(".concat(r.width, " + 4px)") : "0px" },
                            }),
                            t.map((e, t) =>
                                (0, s.jsxs)(
                                    "button",
                                    {
                                        ref: (e) => (o.current[t] = e),
                                        onClick: () => i(t),
                                        className: "\n            relative z-10 px-6 py-3 md:px-6 lg:px-4 xl:px-6 md:py-3 text-sm font-semibold rounded-xl transition-all duration-300 hover:scale-[102%]\n            ".concat(
                                            a === t ? "text-white shadow-lg" : "text-white/60 hover:text-white/90 hover:bg-white/5",
                                            "\n          "
                                        ),
                                        title: e.label,
                                        children: [
                                            (0, s.jsx)("span", {
                                                className: "relative z-10 flex items-center justify-center",
                                                children: (0, s.jsxs)("div", { className: "flex items-center gap-2 text-xs md:text-base", children: [(0, s.jsx)(e.icon, { size: 16 }), e.label] }),
                                            }),
                                            a === t && (0, s.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-xl" }),
                                        ],
                                    },
                                    e.id
                                )
                            ),
                        ],
                    })
                );
            };
            function S() {
                let [e, t] = (0, n.useState)(0),
                    a = [
                        {
                            id: "automated-pentesting",
                            label: "AI Penetration Testing",
                            title: "Test Your Apps As a Hacker Would",
                            mobtitle: "Test Your Apps <br/> As a Hacker Would",
                            description: "AI junior pentester at your hand that can spot business logic flaws and complex vulnerabilities.",
                            icon: w.A,
                            features: ["Start on-demand, monthly or ad-hoc", "No jargon reporting and valid penetration testing attestation for your compliance", "Human-in-the-Loop Expert Penetration Testing — Optional SOC 2-Ready Add-On"],
                            component: (0, s.jsx)(o, {}),
                        },
                        {
                            id: "repo-scan",
                            label: "Code Analysis",
                            title: "Catch And Fix Issues With Every Commit",
                            description: "Run quick security checks on your codebase. Connect your GitHub repositories, and let IMPCE do the rest.",
                            icon: N.A,
                            features: ["Find secret keys lingering in your codebase", "Spot logic bugs that leads to insecurity", "Auto-patch vulnerabilities instantly"],
                            component: (0, s.jsx)(h, {}),
                        },
                        {
                            id: "team-management",
                            label: "Team Management",
                            title: "Move Faster With Your Team",
                            description: "Add teammates so every stakeholder gets access to the assets they own.",
                            icon: k.A,
                            features: ["Onboard and collaborate with your teammates", "Control visibility by domain", "Manage roles and permissions"],
                            component: (0, s.jsx)(j, {}),
                        },
                    ];
                return (0, s.jsxs)("section", {
                    className: "relative max-w-7xl mx-auto px-4 py-10 md:py-20 overflow-hidden",
                    children: [
                        (0, s.jsxs)("div", {
                            className: "absolute inset-0 -z-10",
                            children: [
                                (0, s.jsx)("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-red-500/25 via-orange-500/20 to-red-600/15 rounded-full blur-3xl animate-pulse" }),
                                (0, s.jsx)("div", { className: "absolute top-40 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-red-600/20 to-orange-500/25 rounded-full blur-3xl animate-pulse delay-1000" }),
                                (0, s.jsx)("div", { className: "absolute bottom-20 left-1/4 w-[350px] h-[350px] bg-gradient-to-r from-orange-500/20 to-red-500/15 rounded-full blur-3xl animate-pulse delay-2000" }),
                                (0, s.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/40" }),
                                (0, s.jsx)("div", { className: "absolute inset-0 opacity-[0.02]", style: { backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "50px 50px" } }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: "text-center mb-10 md:mb-20 relative",
                            children: [
                                (0, s.jsx)("h1", {
                                    className: "text-4xl md:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-normal",
                                    children: (0, s.jsxs)("span", {
                                        className: "bg-gradient-to-r from-white via-gray-100 to-red-200 bg-clip-text text-transparent",
                                        children: [
                                            (0, s.jsxs)("span", { className: "inline md:hidden ", children: ["Security you can", (0, s.jsx)("br", {}), "set up in", (0, s.jsx)("br", {}), "5 minutes"] }),
                                            (0, s.jsxs)("span", { className: "hidden md:inline", children: ["Security you can set", (0, s.jsx)("br", {}), "up in 5 minutes"] }),
                                        ],
                                    }),
                                }),
                                (0, s.jsx)("p", {
                                    className: "text-base md:text-xl text-gray-300 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed",
                                    children: "AI-native security platform that does not disrupt your existing development flow.",
                                }),
                                (0, s.jsxs)("div", {
                                    className: "flex gap-4 justify-center mb-10 md:mb-16",
                                    children: [
                                        (0, s.jsx)(A(), {
                                            href: "/login",
                                            children: (0, s.jsx)("button", {
                                                className: "group bg-white text-black md:px-8 md:py-4 px-4 py-2 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105",
                                                children: (0, s.jsxs)("span", {
                                                    className: "flex items-center gap-2",
                                                    children: ["Get Started", (0, s.jsx)("span", { className: "group-hover:translate-x-1 transition-transform duration-300", children: "→" })],
                                                }),
                                            }),
                                        }),
                                        (0, s.jsx)(A(), {
                                            href: "/contact",
                                            children: (0, s.jsx)("button", {
                                                className: "border border-white/20 text-white md:px-8 md:py-4 px-4 py-2 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-xl hover:border-white/40",
                                                children: "Talk to us",
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: "md:hidden space-y-12",
                            children: a.map((e, t) =>
                                (0, s.jsxs)(
                                    "div",
                                    {
                                        children: [
                                            (0, s.jsx)("div", {
                                                className: "w-full flex justify-center",
                                                children: (0, s.jsxs)("div", {
                                                    className:
                                                        "\n      relative inline-flex items-center gap-2 px-3 py-2 my-4\n      border border-white/20 rounded-xl \n      bg-gradient-to-r from-black/60 via-gray-900/60 to-black/60 \n      backdrop-blur-2xl shadow-2xl shadow-black/20\n\n    ",
                                                    children: [
                                                        (0, s.jsx)("div", {
                                                            className: "absolute inset-0 bg-gradient-to-r from-red-500/30 via-orange-500/25 to-red-500/30 rounded-xl backdrop-blur-sm shadow-lg shadow-red-500/20 border border-red-500/20",
                                                        }),
                                                        (0, s.jsx)("div", { className: "absolute -inset-0.5 bg-gradient-to-r from-red-500/30 via-orange-500/25 to-red-600/30 rounded-xl blur-sm" }),
                                                        (0, s.jsx)("span", {
                                                            className: "relative z-10 flex items-center justify-center",
                                                            children: (0, s.jsxs)("div", { className: "flex items-center gap-2 text-xs font-semibold text-white", children: [(0, s.jsx)(e.icon, { size: 10 }), e.label] }),
                                                        }),
                                                        (0, s.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-xl" }),
                                                    ],
                                                }),
                                            }),
                                            (0, s.jsxs)("div", {
                                                className: "space-y-4 text-center",
                                                children: [
                                                    (0, s.jsx)("h3", { className: "text-2xl font-bold text-white", dangerouslySetInnerHTML: { __html: e.mobtitle || e.title } }),
                                                    (0, s.jsx)("p", { className: "text-gray-400 leading-relaxed", children: e.description }),
                                                ],
                                            }),
                                            (0, s.jsx)("div", { className: "mt-6", children: e.component }),
                                        ],
                                    },
                                    e.id
                                )
                            ),
                        }),
                        (0, s.jsxs)("div", {
                            className: "hidden md:block",
                            children: [
                                (0, s.jsx)("div", { className: "flex justify-center mb-16", children: (0, s.jsx)(C, { options: a, value: e, onChange: t }) }),
                                (0, s.jsxs)("div", {
                                    className: "grid lg:grid-cols-5 p-2 gap-16 items-start",
                                    children: [
                                        (0, s.jsxs)("div", {
                                            className: "space-y-8 lg:col-span-2",
                                            children: [
                                                (0, s.jsxs)("div", {
                                                    className: "text-center lg:text-left",
                                                    children: [
                                                        (0, s.jsx)("h2", { className: "text-3xl font-bold text-white mb-6 leading-tight", children: a[e].title }),
                                                        (0, s.jsx)("p", { className: "text-lg text-gray-300 leading-relaxed", children: a[e].description }),
                                                    ],
                                                }),
                                                (0, s.jsx)("div", {
                                                    className: "flex justify-center lg:justify-start",
                                                    children: (0, s.jsx)("div", {
                                                        className: "space-y-4",
                                                        children: a[e].features.map((t, a) =>
                                                            (0, s.jsxs)(
                                                                "div",
                                                                {
                                                                    className: "flex items-center gap-4",
                                                                    children: [(0, s.jsx)(T, { size: 17, className: "text-gray-300 flex-shrink-0" }), (0, s.jsx)("span", { className: "text-gray-300 font-medium", children: t })],
                                                                },
                                                                "feature".concat(a).concat(e)
                                                            )
                                                        ),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, s.jsx)("div", { className: "w-full lg:col-span-3", children: (0, s.jsx)("div", { className: "transform transition-all duration-500 hover:scale-[1.02]", children: a[e].component }) }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            }
        },
    },
    (e) => {
        var t = (t) => e((e.s = t));
        e.O(0, [647, 64, 889, 857, 344, 358], () => t(3646)), (_N_E = e.O());
    },
]);
