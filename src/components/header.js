"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@headlessui/react");
var gatsby_1 = require("gatsby");
var gatsby_plugin_image_1 = require("gatsby-plugin-image");
var react_2 = require("react");
var hi2_1 = require("react-icons/hi2");
var Header = function () {
    var _a, _b;
    var _c = (0, react_2.useState)(false), mobileMenuOpen = _c[0], setMobileMenuOpen = _c[1];
    var data = (0, gatsby_1.useStaticQuery)((0, gatsby_1.graphql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query Header {\n      site {\n        siteMetadata {\n          menuLinks {\n            name\n            href\n          }\n        }\n      }\n    }\n  "], ["\n    query Header {\n      site {\n        siteMetadata {\n          menuLinks {\n            name\n            href\n          }\n        }\n      }\n    }\n  "]))));
    var navigation = (_b = (_a = data === null || data === void 0 ? void 0 : data.site) === null || _a === void 0 ? void 0 : _a.siteMetadata) === null || _b === void 0 ? void 0 : _b.menuLinks;
    return (react_2.default.createElement(react_2.default.Fragment, null,
        react_2.default.createElement("header", { className: "relative z-50" },
            react_2.default.createElement("nav", { className: "flex items-center justify-between pb-2 pt-4 lg:px-8", "aria-label": "Global" },
                react_2.default.createElement("div", { className: "flex lg:flex-1" },
                    react_2.default.createElement(gatsby_1.Link, { to: "#" },
                        react_2.default.createElement("span", { className: "sr-only" }, "Snowdrop"),
                        react_2.default.createElement(gatsby_plugin_image_1.StaticImage, { src: "../images/Snowdrop_SVG.svg", placeholder: "tracedSVG", alt: "Logo", width: 200, style: { filter: 'invert(90%)' } }))),
                react_2.default.createElement("div", { className: "flex lg:hidden" },
                    react_2.default.createElement("button", { type: "button", className: "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700", onClick: function () { return setMobileMenuOpen(true); } },
                        react_2.default.createElement("span", { className: "sr-only" }, "Open main menu"),
                        react_2.default.createElement(hi2_1.HiBars3, { className: "h-6 w-6", "aria-hidden": "true" }))),
                react_2.default.createElement("div", { className: "hidden lg:flex lg:gap-x-12" }, navigation.map(function (_a) {
                    var name = _a.name, href = _a.href;
                    return (react_2.default.createElement(gatsby_1.Link, { key: name, to: href, activeClassName: "text-rose-600", className: "duration-400 text-sm font-semibold leading-6 text-gray-900 transition" }, name));
                })),
                react_2.default.createElement("div", { className: "relative hidden pr-3 lg:flex lg:flex-1 lg:justify-end" },
                    react_2.default.createElement("span", { className: "absolute right-0 top-0 flex h-2 w-2" },
                        react_2.default.createElement("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75" }),
                        react_2.default.createElement("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-rose-500" })),
                    react_2.default.createElement("a", { href: "#", className: "duration-400 text-sm font-semibold leading-6 text-rose-600 transition hover:text-rose-900", onClick: function () { return setMobileMenuOpen(true); } }, "Free makeup!"))),
            react_2.default.createElement(react_1.Dialog, { as: "div", className: "lg:hidden", open: mobileMenuOpen, onClose: setMobileMenuOpen },
                react_2.default.createElement("div", { className: "fixed inset-0 z-50" }),
                react_2.default.createElement(react_1.Dialog.Panel, { className: "fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10" },
                    react_2.default.createElement("div", { className: "flex items-center justify-between" },
                        react_2.default.createElement("a", { href: "#", className: "-m-1.5 p-1.5" },
                            react_2.default.createElement("span", { className: "sr-only" }, "Snowdrop"),
                            react_2.default.createElement("img", { className: "h-8 w-auto", src: "https://tailwindui.com/img/logos/mark.svg?color=rose&shade=600", alt: "" })),
                        react_2.default.createElement("button", { type: "button", className: "-m-2.5 rounded-md p-2.5 text-gray-700", onClick: function () { return setMobileMenuOpen(false); } },
                            react_2.default.createElement("span", { className: "sr-only" }, "Close menu"),
                            react_2.default.createElement(hi2_1.HiOutlineXMark, { className: "h-6 w-6", "aria-hidden": "true" }))),
                    react_2.default.createElement("div", { className: "mt-6 flow-root" },
                        react_2.default.createElement("div", { className: "-my-6 divide-y divide-gray-500/10" },
                            react_2.default.createElement("div", { className: "space-y-2 py-6" }, navigation.map(function (item) { return (react_2.default.createElement("a", { key: item.name, href: item.href, className: "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" }, item.name)); })),
                            react_2.default.createElement("div", { className: "py-6" },
                                react_2.default.createElement("a", { href: "#", className: "-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" }, "Log in")))))))));
};
exports.default = Header;
var templateObject_1;
