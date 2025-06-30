(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [177],
    {
        753: (e, t, s) => {
            "use strict";
            s.d(t, { a: () => o, default: () => d });
            var a = s(3739),
                r = s(9483),
                n = s(2064),
                l = s.n(n),
                i = s(8036);
            let o = () =>
                (0, a.jsx)("img", {
                    src: "../../../_next/impce.png",
                    width: "140",
                    height: "auto",
                    alt: "Spooodyque Logo"
                }),
                d = () => {
                    let [e, t] = (0, r.useState)(!1),
                        s = (0, r.useRef)(null),
                        n = (0, r.useRef)(null),
                        d = [
                            { name: "Pricing", href: "/pricing" },
                            { name: "Careers", href: "/careers" },
                            { name: "Contact", href: "/contact" },
                        ];
                    return (0, a.jsxs)("header", {
                        className: "sticky top-0 z-50 bg-black/50 backdrop-blur-xs",
                        children: [
                            (0, a.jsxs)("div", {
                                className: "flex items-center justify-between w-full mx-auto py-4 px-4 sm:px-6 md:px-4 max-w-6xl",
                                children: [
                                    (0, a.jsx)(l(), { href: "/", className: "text-2xl w-[10rem] sm:w-[12rem] z-10 block", onClick: () => t(!1), children: (0, a.jsx)(o, {}) }),
                                    (0, a.jsx)("button", {
                                        ref: n,
                                        type: "button",
                                        className: "sm:hidden z-50 p-2 focus:outline-none",
                                        onClick: () => {
                                            t(!e);
                                        },
                                        "aria-label": "Toggle menu",
                                        children: (0, a.jsxs)("div", {
                                            className: "relative w-6 h-5",
                                            children: [
                                                (0, a.jsx)("span", { className: "absolute h-0.5 w-full bg-primary transform transition-all duration-300 ease-in-out ".concat(e ? "rotate-45 top-2" : "rotate-0 top-0") }),
                                                (0, a.jsx)("span", { className: "absolute h-0.5 bg-primary transform transition-all duration-300 ease-in-out ".concat(e ? "w-0 opacity-0 left-1/2" : "w-full opacity-100 top-2") }),
                                                (0, a.jsx)("span", { className: "absolute h-0.5 w-full bg-primary transform transition-all duration-300 ease-in-out ".concat(e ? "-rotate-45 top-2" : "rotate-0 top-4") }),
                                            ],
                                        }),
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: "hidden sm:flex items-center gap-8",
                                        children: [
                                            (0, a.jsx)("nav", {
                                                className: "flex gap-8",
                                                children: d.map((e) =>
                                                    (0, a.jsx)(l(), { href: e.href, className: "text-sm font-medium transition-all duration-200 hover:text-white text-gray-300 hover:scale-105", children: e.name }, e.href)
                                                ),
                                            }),
                                            (0, a.jsx)(l(), { href: "/login", children: (0, a.jsx)(i.$, { variant: "outline", className: "cursor-pointer", children: "Login" }) }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, a.jsx)("div", {
                                ref: s,
                                className: "\n          absolute left-0 right-0 z-40 bg-black/85 backdrop-blur-xs w-full\n          ".concat(e ? "block" : "hidden", "\n          sm:hidden\n        "),
                                children: (0, a.jsx)("div", {
                                    className: "p-4 h-screen",
                                    children: (0, a.jsxs)("nav", {
                                        className: "flex flex-col space-y-4 font-medium text-lg",
                                        children: [
                                            d.map((e) => (0, a.jsx)(l(), { href: e.href, className: "py-2 block", onClick: () => t(!1), children: e.name }, e.name)),
                                            (0, a.jsx)(l(), { href: "/login", className: "py-2 block", onClick: () => t(!1), children: "Login" }),
                                        ],
                                    }),
                                }),
                            }),
                        ],
                    });
                };
        },
        835: (e, t, s) => {
            "use strict";
            s.d(t, { Footer: () => f });
            var a = s(3739),
                r = s(9483),
                n = s(2064),
                l = s.n(n),
                i = s(753),
                o = s(8200),
                d = s(6935),
                c = s(9796),
                h = s(1683);
            function u(e) {
                let { delayDuration: t = 0, ...s } = e;
                return (0, a.jsx)(c.Kq, { "data-slot": "tooltip-provider", delayDuration: t, ...s });
            }
            function m(e) {
                let { ...t } = e;
                return (0, a.jsx)(u, { children: (0, a.jsx)(c.bL, { "data-slot": "tooltip", ...t }) });
            }
            function x(e) {
                let { ...t } = e;
                return (0, a.jsx)(c.l9, { "data-slot": "tooltip-trigger", ...t });
            }
            function p(e) {
                let { className: t, sideOffset: s = 0, children: r, ...n } = e;
                return (0, a.jsx)(c.ZL, {
                    children: (0, a.jsxs)(c.UC, {
                        "data-slot": "tooltip-content",
                        sideOffset: s,
                        className: (0, h.cn)(
                            "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
                            t
                        ),
                        ...n,
                        children: [r, (0, a.jsx)(c.i3, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-135 rounded-[2px]" })],
                    }),
                });
            }
            function f() {
                let [e, t] = (0, r.useState)(!1);
                return (0, a.jsxs)("footer", {
                    className: "py-8 sm:py-12 px-4 sm:px-6 border-t border-[#333] relative",
                    children: [
                        (0, a.jsxs)("div", {
                            className: "max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8",
                            children: [
                                (0, a.jsxs)("div", {
                                    className: "col-span-2 sm:col-span-1 self-start mb-6 sm:mb-0",
                                    children: [
                                        (0, a.jsx)("div", { className: "w-[10rem] sm:w-[12rem]", children: (0, a.jsx)(i.a, {}) }),
                                        (0, a.jsxs)("div", {
                                            className: "flex flex-row items-center gap-4 mt-4",
                                            children: [
                                                (0, a.jsx)(l(), {
                                                    href: "https://x.com/impce",
                                                    target: "_blank",
                                                    children: (0, a.jsxs)("svg", {
                                                        width: "16",
                                                        height: "auto",
                                                        viewBox: "0 0 300 271",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        "aria-label": "X Logo",
                                                        children: [
                                                            (0, a.jsx)("title", { children: "X (formerly Twitter) Logo" }),
                                                            (0, a.jsx)("path", { fill: "white", d: "m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z" }),
                                                        ],
                                                    }),
                                                }), (0,
                                                    a.jsx)(u, {
                                                        children: (0,
                                                            a.jsxs)(m, {
                                                                children: [(0,
                                                                    a.jsx)(x, {
                                                                        asChild: !0,
                                                                        children: (0,
                                                                            a.jsx)("button", {
                                                                                onClick: () => t(!e),
                                                                                children: (0,
                                                                                    a.jsx)(o.default, {
                                                                                        src: "/discord.svg",
                                                                                        alt: "Discord Logo",
                                                                                        width: 100,
                                                                                        height: 100,
                                                                                        className: "h-6 w-auto ",
                                                                                        draggable: "false"
                                                                                    })
                                                                            })
                                                                    }), (0,
                                                                        a.jsx)(p, {
                                                                            children: "Sign up to join our Discord"
                                                                        })]
                                                            })
                                                    })
                                            ],
                                        }),
                                        e && (0, a.jsx)("p", { className: "text-xs text-gray-400 mt-2", children: "Sign up to join our Discord" }),
                                    ],
                                }),
                                (0, a.jsx)("div", { className: "hidden sm:block" }),
                                (0, a.jsxs)("div", {
                                    className: "col-span-1",
                                    children: [
                                        (0, a.jsx)("h3", { className: "text-lg sm:text-xl mb-3 sm:mb-4 text-primary", children: "Legal" }),
                                        (0, a.jsxs)("ul", {
                                            className: "space-y-2 text-xs sm:text-sm",
                                            children: [
                                                (0, a.jsx)("li", { children: (0, a.jsx)(l(), { href: "/privacy", className: "hover:text-white", children: "Privacy Policy" }) }),
                                                (0, a.jsx)("li", { children: (0, a.jsx)(l(), { href: "/terms", className: "hover:text-white", children: "Terms and Conditions" }) }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, a.jsxs)("div", {
                                    className: "col-span-1",
                                    children: [
                                        (0, a.jsx)("h3", { className: "text-lg sm:text-xl mb-3 sm:mb-4 text-primary", children: "Company" }),
                                        (0, a.jsxs)("ul", {
                                            className: "space-y-2 text-xs sm:text-sm",
                                            children: [
                                                (0, a.jsx)("li", { children: (0, a.jsx)(l(), { href: "/careers", className: "hover:text-white", children: "Careers" }) }),
                                                (0, a.jsx)("li", { children: (0, a.jsx)(l(), { href: "/contact", className: "hover:text-white", children: "Contact" }) }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsx)("div", { className: "max-w-6xl mx-auto mt-8 pt-6 sm:pt-8 text-center text-xs", children: (0, a.jsxs)("p", { children: ["\xa9 ", new Date().getFullYear(), " Spoodyque. All rights reserved."] }) }),
                    ],
                });
            }
        },
        952: (e, t, s) => {
            "use strict";
            s.d(t, { p: () => n });
            var a = s(3739);
            s(9483);
            var r = s(1683);
            function n(e) {
                let { className: t, type: s, ...n } = e;
                return (0, a.jsx)("input", {
                    type: s,
                    "data-slot": "input",
                    className: (0, r.cn)(
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
        962: () => { },
        1683: (e, t, s) => {
            "use strict";
            s.d(t, { cn: () => n });
            var a = s(5750),
                r = s(3823);
            function n() {
                for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                return (0, r.QP)((0, a.$)(t));
            }
        },
        3720: (e, t, s) => {
            "use strict";
            s.d(t, { default: () => i });
            var a = s(3739),
                r = s(3290),
                n = s(9483);
            let l = (0, r.default)(() => s.e(149).then(s.bind(s, 2149)), { loadableGenerated: { webpack: () => [2149] }, ssr: !1 });
            function i() {
                return (0, a.jsx)(n.Suspense, { fallback: null, children: (0, a.jsx)(l, {}) });
            }
        },
        5570: (e, t, s) => {
            "use strict";
            s.d(t, { Provider: () => h });
            var a = s(3739),
                r = s(9483),
                n = s(9139),
                l = s(7955),
                i = s(6241),
                o = s(2613);
            function d() {
                return (
                    (0, r.useEffect)(() => {
                        l.Ay.init("phc_BQFGE6ZPKVOpnOqX1roxaKgJisl0KwRNdwcahV1FweD", { api_host: "/ingest", ui_host: "https://eu.posthog.com", capture_pageview: "history_change", capture_pageleave: !0, capture_exceptions: !0, debug: !1 });
                    }, []),
                    null
                );
            }
            function c() {
                let e = (0, i.sf)(),
                    t = (0, o.usePathname)(),
                    s = (0, o.useSearchParams)();
                return (
                    (0, r.useEffect)(() => {
                        e && e.capture("$pageview", { path: "".concat(t).concat(s.toString() ? "?".concat(s.toString()) : "") });
                    }, [e, t, s]),
                    null
                );
            }
            function h(e) {
                let { children: t, ...s } = e;
                return (0, a.jsxs)(i.so, {
                    client: l.Ay,
                    children: [
                        (0, a.jsx)(d, {}),
                        (0, a.jsx)(r.Suspense, { fallback: null, children: (0, a.jsx)(c, {}) }),
                        (0, a.jsx)(n.N, { attribute: "class", defaultTheme: "dark", forcedTheme: "dark", enableSystem: !1, ...s, children: t }),
                    ],
                });
            }
        },
        6268: (e, t, s) => {
            Promise.resolve().then(s.t.bind(s, 962, 23)),
                Promise.resolve().then(s.bind(s, 5570)),
                Promise.resolve().then(s.bind(s, 8688)),
                Promise.resolve().then(s.bind(s, 3720)),
                Promise.resolve().then(s.bind(s, 835)),
                Promise.resolve().then(s.bind(s, 753)),
                Promise.resolve().then(s.t.bind(s, 4859, 23));
        },
        8036: (e, t, s) => {
            "use strict";
            s.d(t, { $: () => o });
            var a = s(3739);
            s(9483);
            var r = s(2720),
                n = s(4872),
                l = s(1683);
            let i = (0,
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
                let { className: t, variant: s, size: n, asChild: o = !1, ...d } = e,
                    c = o ? r.DX : "button";
                return (0, a.jsx)(c, { "data-slot": "button", className: (0, l.cn)(i({ variant: s, size: n, className: t })), ...d });
            }
        },
        8688: (e, t, s) => {
            "use strict";
            s.d(t, { default: () => f });
            var a = s(3739),
                r = s(9483),
                n = s(8543),
                l = s(8859),
                i = s(8036),
                o = s(952),
                d = s(1683),
                c = s(9639);
            let h = (0, c.createServerReference)("4001eaca7e6b7eac85846e4ce6959fe09cda2f1a2d", c.callServer, void 0, c.findSourceMapURL, "GetMessageAction"),
                u = (0, c.createServerReference)("007a5d3c2bd91bd6e6fed76c0a4dab8f01ea2df72b", c.callServer, void 0, c.findSourceMapURL, "startChatSession"),
                m = (0, c.createServerReference)("60605a1a516dd4a394aa53b8cf46af16e964c60ada", c.callServer, void 0, c.findSourceMapURL, "sendMessageAction");
            var x = s(8200);
            let p = "aiko_chat_session";
            function f() {
                let [e, t] = (0, r.useState)(null),
                    [s, c] = (0, r.useState)(""),
                    [f, g] = (0, r.useState)(!1),
                    v = (0, r.useRef)(null),
                    [b, w] = (0, r.useState)(!0),
                    j = (0, r.useRef)(null),
                    C = (0, r.useRef)(null),
                    y = (function () {
                        let [e, t] = (0, r.useState)(0);
                        return (
                            (0, r.useEffect)(() => {
                                let e = new Date(),
                                    s = 0;
                                [1, 5.5, 7, -3].forEach((t) => {
                                    let a = new Date(e.getTime() + 36e5 * t).getUTCHours();
                                    a >= 7 && a < 23 && s++;
                                }),
                                    t(s);
                            }, []),
                            e
                        );
                    })(),
                    N = (0, r.useRef)(!1),
                    k = (0, r.useRef)(null);
                (0, r.useEffect)(() => {
                    let e = localStorage.getItem(p);
                    if (e) {
                        let s = JSON.parse(e);
                        (s.messages = s.messages.map((e) => ({ ...e, timestamp: new Date(e.timestamp) }))), t({ ...s, isOpen: !1 });
                    } else {
                        let e = { threadId: null, messages: [], isOpen: !1, hasShownWelcome: !1 };
                        t(e), localStorage.setItem(p, JSON.stringify(e));
                    }
                }, []),
                    (0, r.useEffect)(() => {
                        k.current = e;
                    }, [e]),
                    (0, r.useEffect)(() => {
                        e && localStorage.setItem(p, JSON.stringify(e));
                    }, [e]),
                    (0, r.useEffect)(() => {
                        if ((null == e ? void 0 : e.isOpen) && !e.hasShownWelcome && 0 === e.messages.length) {
                            let s = { id: "aiko-welcome", content: "Our team usually responds in 2-3 minutes. How can we help you today?", sender: "aiko", author: "Impce", timestamp: new Date() };
                            t({ ...e, messages: [s], hasShownWelcome: !0 });
                        }
                    }, [null == e ? void 0 : e.isOpen, null == e ? void 0 : e.hasShownWelcome, null == e ? void 0 : e.messages.length]);
                let S = (0, r.useCallback)(() => {
                    if (!j.current) return;
                    let e = j.current;
                    w(e.scrollHeight - e.scrollTop - e.clientHeight < 50);
                }, []);
                (0, r.useEffect)(() => {
                    b && v.current && v.current.scrollIntoView({ behavior: "smooth" });
                }, [null == e ? void 0 : e.messages, b]),
                    (0, r.useEffect)(() => {
                        if (!(null == e ? void 0 : e.threadId)) return;
                        let s = async () => {
                            var e;
                            if (!N.current && (null === (e = k.current) || void 0 === e ? void 0 : e.threadId)) {
                                N.current = !0;
                                try {
                                    let e = k.current,
                                        s = [...e.messages]
                                            .slice()
                                            .reverse()
                                            .find((e) => /^\d+$/.test(e.id)),
                                        a = null == s ? void 0 : s.id;
                                    if (!e.threadId) return;
                                    let r = await h({ threadId: e.threadId, lastMessageId: a });
                                    if (200 != r.status) return;
                                    let n = (await r.messages).map((e) => ({ ...e, timestamp: new Date(e.timestamp) }));
                                    if (0 === n.length) return;
                                    t((e) => {
                                        if (!e) return e;
                                        let t = new Set(e.messages.map((e) => e.id)),
                                            s = [...e.messages],
                                            a = n.filter((e) => {
                                                if (t.has(e.id)) return !1;
                                                if ("user" === e.sender && /^\d+$/.test(e.id)) {
                                                    let t = s.findIndex((t) => "user" === t.sender && t.content === e.content && !/^\d+$/.test(t.id));
                                                    if (-1 !== t) return (s[t] = e), !1;
                                                }
                                                return !0;
                                            });
                                        if (0 === a.length && s === e.messages) return e;
                                        let r = { ...e, messages: [...s, ...a] };
                                        return e.isOpen && a.length > 0 && (r.lastReadMessageId = a[a.length - 1].id), r;
                                    });
                                } finally {
                                    N.current = !1;
                                }
                            }
                        };
                        s();
                        let a = setInterval(s, 3e3);
                        return () => clearInterval(a);
                    }, [null == e ? void 0 : e.threadId]);
                let L = (e) => {
                    t(e);
                },
                    I = (e) => {
                        C.current && clearTimeout(C.current),
                            e.messages.some((e) => "user" === e.sender) &&
                            (C.current = setTimeout(() => {
                                let e = k.current;
                                if (!e || e.hasShownNoResponseNotice || e.messages.some((e) => "support" === e.sender)) return;
                                let t = { id: "aiko-no-response", content: "Our team hasn't responded yet. Please leave your email and we'll get back to you as soon as possible!", sender: "aiko", author: "Impce", timestamp: new Date() };
                                L({ ...e, messages: [...e.messages, t], hasShownNoResponseNotice: !0 });
                            }, 12e4));
                    };
                (0, r.useEffect)(() => {
                    e && e.messages.some((e) => "support" === e.sender) && (C.current && (clearTimeout(C.current), (C.current = null)), e.hasShownNoResponseNotice && L({ ...e, hasShownNoResponseNotice: !1 }));
                }, [e]);
                let _ = async () => {
                    if (!e) return null;
                    try {
                        let e = await u();
                        if (200 !== e.status) throw Error("Failed to start chat");
                        return e.threadId;
                    } catch (e) {
                        return console.error(e), null;
                    }
                },
                    O = async () => {
                        if (!s.trim() || f || !e) return;
                        let t = s.trim();
                        c(""), g(!0), w(!0);
                        let a = { id: crypto.randomUUID(), content: t, sender: "user", author: "You", timestamp: new Date() },
                            r = { ...e, threadId: e.threadId, messages: [...e.messages, a], isOpen: !0 };
                        L(r);
                        try {
                            let s = e.threadId;
                            if (!s) {
                                if (!(s = await _())) {
                                    L(e), g(!1), c(t);
                                    return;
                                }
                                L({ ...r, threadId: s });
                            }
                            I(r), await m(s, t);
                        } catch (e) {
                            console.error(e);
                        } finally {
                            g(!1);
                        }
                    };
                if (!e) return null;
                e.messages.some((e) => "user" === e.sender), e.messages.some((e) => "support" === e.sender);
                let R = e.messages.filter((t) => {
                    if ("support" !== t.sender) return !1;
                    if (!e.lastReadMessageId) return !0;
                    let s = e.messages.findIndex((t) => t.id === e.lastReadMessageId);
                    return e.messages.findIndex((e) => e.id === t.id) > s;
                }).length;
                return (0, a.jsxs)("div", {
                    className: "fixed bottom-4 right-2 md:right-4 z-50",
                    children: [
                        !e.isOpen &&
                        (0, a.jsxs)("div", {
                            children: [
                                (0, a.jsx)("div", { className: "absolute -inset-3 bg-gradient-to-r from-red-500/30 via-orange-500/20 to-red-600/15 rounded-2xl blur-lg animate-pulse opacity-100" }),
                                (0, a.jsxs)("button", {
                                    onClick: () => {
                                        let t = e.messages[e.messages.length - 1];
                                        L({ ...e, isOpen: !0, lastReadMessageId: null == t ? void 0 : t.id });
                                    },
                                    className:
                                        "group relative bg-black/40 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:border-white/20 hover:bg-black/50",
                                    children: [
                                        (0, a.jsx)("div", { className: "absolute inset-0 rounded-xl bg-gradient-to-br from-red-500/8 via-orange-500/5 to-red-600/3 pointer-events-none" }),
                                        (0, a.jsx)("div", { className: "absolute inset-0 rounded-xl bg-gradient-to-br from-red-500/15 to-transparent opacity-30 pointer-events-none" }),
                                        R > 0 &&
                                        (0, a.jsx)("span", {
                                            className:
                                                "absolute -top-1.5 -right-1.5 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold border-2 border-gray-900 shadow-lg animate-pulse z-20",
                                            children: R,
                                        }),
                                        (0, a.jsx)("div", {
                                            className: "hidden absolute md:block left-1 bottom-0 w-18 h-22 z-10",
                                            children: (0, a.jsx)(x.default, { src: "../../../_next/Aiko_Icon_Confused_2.png", width: 60, height: 72, className: "w-full h-full object-contain object-bottom", alt: "Impce Support" }),
                                        }),
                                        (0, a.jsxs)("div", {
                                            className: "px-4 py-2.5 md:ml-3 md:pl-18 min-h-[48px] flex flex-col justify-start items-start text-left relative z-15",
                                            children: [
                                                (0, a.jsx)("div", { className: "text-white font-semibold text-sm mb-0.5", children: "Have a question?" }),
                                                (0, a.jsxs)("div", {
                                                    className: "text-gray-300 text-xs flex items-center gap-1.5",
                                                    children: [(0, a.jsx)("span", { children: "Real person here!" }), (0, a.jsx)("span", { className: "text-yellow-400 text-base", children: "\uD83D\uDC4B" })],
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)("div", {
                                            className: "absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
                                        }),
                                        (0, a.jsx)("div", {
                                            className: "absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: (0, d.cn)("transition-all duration-300 ease-in-out transform", e.isOpen ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" : "opacity-0 translate-y-4 scale-95 pointer-events-none"),
                            children:
                                e.isOpen &&
                                (0, a.jsxs)("div", {
                                    className: "bg-black/95 md:bg-black/75 backdrop-blur-xs border border-white/30 rounded-lg shadow-2xl w-[calc(100vw-2rem)] max-w-sm md:w-100 h-[80vh] max-h-[600px] flex flex-col",
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: "p-4",
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        (0, a.jsx)("h3", { className: "text-primary font-semibold", children: "Impce Support" }),
                                                        (0, a.jsxs)("div", {
                                                            className: "flex gap-4 items-center",
                                                            children: [
                                                                (0, a.jsx)("button", {
                                                                    type: "button",
                                                                    onClick: () => {
                                                                        C.current && (clearTimeout(C.current), (C.current = null)),
                                                                            t({ threadId: null, messages: [], isOpen: !0, hasShownNoResponseNotice: !1, hasShownWelcome: !1 }),
                                                                            c(""),
                                                                            g(!1),
                                                                            w(!0);
                                                                    },
                                                                    className: "text-xs text-white/40 hover:text-white/60 cursor-pointer",
                                                                    children: "Clear chat",
                                                                }),
                                                                (0, a.jsx)(i.$, {
                                                                    onClick: () => {
                                                                        e && L({ ...e, isOpen: !1 });
                                                                    },
                                                                    variant: "ghost",
                                                                    size: "sm",
                                                                    className: "h-6 w-6 p-0 text-white/60 hover:text-white ",
                                                                    children: (0, a.jsx)(n.A, { className: "h-4 w-4" }),
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                y > 0 &&
                                                (0, a.jsxs)("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        (0, a.jsx)("span", { className: "bg-green-500 rounded-full w-2 h-2 block" }),
                                                        (0, a.jsxs)("span", { className: "text-white/70 text-xs", children: [y, " team", " ", 1 === y ? "member is" : "members are", " online"] }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)("div", {
                                            ref: j,
                                            onScroll: S,
                                            className: "flex-1  overflow-y-auto p-4 pb-2 space-y-3",
                                            children:
                                                0 === e.messages.length
                                                    ? (0, a.jsxs)("div", {
                                                        className: "flex flex-col h-full",
                                                        children: [(0, a.jsx)("div", { className: "flex-1" }), (0, a.jsx)("div", { className: "text-xs text-white/70", children: "Send a message to chat with our team" })],
                                                    })
                                                    : (0, a.jsxs)(a.Fragment, {
                                                        children: [
                                                            e.messages
                                                                .filter((e) => "system" !== e.sender)
                                                                .map((e) =>
                                                                    (0, a.jsx)(
                                                                        "div",
                                                                        {
                                                                            className: (0, d.cn)("flex", "user" === e.sender ? "justify-end" : "justify-start"),
                                                                            children:
                                                                                "aiko" === e.sender
                                                                                    ? (0, a.jsxs)("div", {
                                                                                        className: "flex items-start gap-2 max-w-[80%]",
                                                                                        children: [
                                                                                            (0, a.jsx)("div", {
                                                                                                className: "flex-shrink-0",
                                                                                                children: (0, a.jsx)(x.default, { src: "/_next/Aiko_Icon_Confused_2.png", width: 32, height: 32, alt: "Impce", className: "rounded-full" }),
                                                                                            }),
                                                                                            (0, a.jsx)("div", { className: (0, d.cn)("max-w-[80%] rounded-lg p-2 text-sm", "bg-white/10 text-white"), children: e.content }),
                                                                                        ],
                                                                                    })
                                                                                    : (0, a.jsx)("div", {
                                                                                        className: (0, d.cn)("max-w-[80%] rounded-lg p-2 text-sm", "bg-white/10 text-white"),
                                                                                        children: "support" === e.sender ? "".concat(e.author, ": ").concat(e.content) : e.content,
                                                                                    }),
                                                                        },
                                                                        e.id
                                                                    )
                                                                ),
                                                            (0, a.jsx)("div", { ref: v }),
                                                        ],
                                                    }),
                                        }),
                                        (0, a.jsx)("div", {
                                            className: "p-4",
                                            children: (0, a.jsxs)("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    (0, a.jsx)(o.p, {
                                                        placeholder: "Type your message…",
                                                        value: s,
                                                        onChange: (e) => c(e.target.value),
                                                        onKeyDown: (e) => "Enter" === e.key && O(),
                                                        className: " placeholder:text-white/50 text-sm sm:text-sm text-white",
                                                    }),
                                                    (0, a.jsx)(i.$, { onClick: O, disabled: !s.trim(), variant: "secondary", className: "px-3 h-10", children: (0, a.jsx)(l.A, { className: "h-4 w-4" }) }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                        }),
                    ],
                });
            }
        },
    },
    (e) => {
        var t = (t) => e((e.s = t));
        e.O(0, [307, 718, 798, 647, 64, 889, 117, 857, 344, 358], () => t(6268)), (_N_E = e.O());
    },
]);
