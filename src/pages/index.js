"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Head = void 0;
var gatsby_plugin_image_1 = require("gatsby-plugin-image");
var react_1 = require("react");
var layout_1 = require("../components/layout");
var seo_1 = require("../components/seo");
function MainPage() {
    return (react_1.default.createElement(layout_1.default, null,
        react_1.default.createElement("div", { className: "flex items-center justify-between" },
            react_1.default.createElement("div", null,
                react_1.default.createElement(gatsby_plugin_image_1.StaticImage, { src: "../images/hero.jpg", className: "block", alt: "Hero image", layout: "fullWidth", placeholder: "dominantColor", width: 500, height: 700 }))),
        react_1.default.createElement("div", { className: "py-24 sm:py-32" },
            react_1.default.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
                react_1.default.createElement("dl", { className: "grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3" },
                    react_1.default.createElement("div", { className: "mx-auto flex max-w-xs flex-col gap-y-4" },
                        react_1.default.createElement("dt", { className: "text-base leading-7 text-gray-600" }, "Happy clients"),
                        react_1.default.createElement("dd", { className: "order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl" }, "100+")),
                    react_1.default.createElement("div", { className: "mx-auto flex max-w-xs flex-col gap-y-4" },
                        react_1.default.createElement("dt", { className: "text-base leading-7 text-gray-600" }, "makeup experience"),
                        react_1.default.createElement("dd", { className: "order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl" }, "5 years")),
                    react_1.default.createElement("div", { className: "mx-auto flex max-w-xs flex-col gap-y-4" },
                        react_1.default.createElement("dt", { className: "text-base leading-7 text-gray-600" }, "makeup certificates"),
                        react_1.default.createElement("dd", { className: "order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl" }, "3")))))));
}
exports.default = MainPage;
var Head = function () { return react_1.default.createElement(seo_1.default, { title: "Main Page" }); };
exports.Head = Head;
