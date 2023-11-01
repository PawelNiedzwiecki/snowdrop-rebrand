"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var hi2_1 = require("react-icons/hi2");
function Banner() {
    var _a = (0, react_1.useState)(true), show = _a[0], setShow = _a[1];
    return (react_1.default.createElement("div", { className: "".concat(show ? 'flex' : 'hidden', " fixed inset-x-0 bottom-0 isolate  items-center gap-x-6 overflow-hidden bg-white bg-opacity-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1") },
        react_1.default.createElement("div", { className: "absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl", "aria-hidden": "true" },
            react_1.default.createElement("div", { className: "aspect-[577/310] w-[36.0625rem]", style: {
                    clipPath: 'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
                } })),
        react_1.default.createElement("div", { className: "absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl", "aria-hidden": "true" },
            react_1.default.createElement("div", { className: "aspect-[577/310] w-[36.0625rem]", style: {
                    clipPath: 'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
                } })),
        react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-x-4 gap-y-2" },
            react_1.default.createElement("p", { className: "flex items-center text-sm leading-6 text-gray-900" },
                react_1.default.createElement("strong", { className: "font-semibold" }, "Get free makeup"),
                react_1.default.createElement(hi2_1.HiStar, { className: "text- mx-2 h-3 w-3" }),
                "Experience the Magic of Free Makeup"),
            react_1.default.createElement("a", { href: "#", className: "duration-400 flex-none rounded-full bg-rose-600 px-3.5 py-1 text-sm font-semibold text-white shadow-sm transition  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900" },
                "Enroll now ",
                react_1.default.createElement("span", { "aria-hidden": "true" }, "\u2192"))),
        react_1.default.createElement("div", { className: "flex flex-1 justify-end" },
            react_1.default.createElement("button", { type: "button", onClick: function () { return setShow(false); }, className: "-m-3 p-3 focus-visible:outline-offset-[-4px]" },
                react_1.default.createElement("span", { className: "sr-only" }, "Dismiss"),
                react_1.default.createElement(hi2_1.HiOutlineXMark, { className: "h-5 w-5 text-gray-900", "aria-hidden": "true" })))));
}
exports.default = Banner;
