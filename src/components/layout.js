"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var footer_1 = require("./footer");
var header_1 = require("./header");
var Layout = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement("div", { className: "h-full bg-rose-50" },
        react_1.default.createElement(header_1.default, null),
        react_1.default.createElement("div", { className: "isolate px-6 lg:px-8" },
            react_1.default.createElement("div", { className: "absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80", "aria-hidden": "true" },
                react_1.default.createElement("div", { className: "relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#fc89a0] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]", style: {
                        clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    } })),
            children),
        react_1.default.createElement(footer_1.default, null)));
};
exports.default = Layout;
