"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Head = void 0;
var gatsby_1 = require("gatsby");
var react_1 = require("react");
var fa_1 = require("react-icons/fa");
var layout_1 = require("../components/layout");
var seo_1 = require("../components/seo");
var Prices = function () {
    var services = [
        {
            name: 'Makeup (any type) including lashes',
            price: 38,
            id: 1,
        },
        { name: 'Bridal trial makeup', price: 38, id: 1 },
        {
            name: 'Private makeup 1-2-1 lessons',
            price: 20,
            info: 'Price per hour',
            id: 5,
        },
        {
            name: 'Lymphatic facial massage with peeling and mask/algae',
            price: 25,
            id: 3,
        },
        {
            name: 'Facial acid peel (acid therapy not available during summer)',
            price: 43,
            id: 3,
        },
        { name: 'Eyebrows shaping + henna', price: 10, id: 4 },
    ];
    return (react_1.default.createElement(layout_1.default, null,
        react_1.default.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
            react_1.default.createElement("div", { className: "mx-auto max-w-2xl pb-6 sm:text-center" },
                react_1.default.createElement("h2", { className: "text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" }, "Simple no-tricks pricing"),
                react_1.default.createElement("p", { className: "mt-6 text-lg leading-8 text-gray-600" }, "Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.")),
            react_1.default.createElement("div", { className: "overflow-hidden rounded-lg shadow-sm" }, services.map(function (_a) {
                var id = _a.id, name = _a.name, price = _a.price, info = _a.info;
                return (react_1.default.createElement("div", { key: name, className: "group flex items-center justify-between border-l-2 border-transparent bg-white bg-opacity-40 px-4 py-2 transition-all duration-100  hover:border-rose-500" },
                    react_1.default.createElement("div", { className: "flex gap-x-4" },
                        react_1.default.createElement("h3", { className: "text-base font-medium tracking-tight text-gray-900 group-hover:text-rose-600" }, name),
                        info && (react_1.default.createElement("div", { className: "group relative flex items-center" },
                            react_1.default.createElement(fa_1.FaQuestionCircle, { className: "text-lg font-normal text-slate-800" }),
                            react_1.default.createElement("span", { className: "absolute left-1/2 m-4 mx-auto w-max -translate-x-1/2 translate-y-full rounded-md bg-gray-800\n    px-1 text-sm text-gray-100 opacity-0 transition-opacity group-hover:opacity-100" }, info)))),
                    react_1.default.createElement("div", { className: "flex items-center justify-center gap-x-2" },
                        react_1.default.createElement("p", { className: "text-base font-bold tracking-tight text-gray-900 group-hover:text-rose-600" },
                            "\u00A3 ",
                            price),
                        react_1.default.createElement(gatsby_1.Link, { to: "/contact?id=".concat(id), className: "btn" }, "Get in touch"))));
            })))));
};
exports.default = Prices;
var Head = function () { return react_1.default.createElement(seo_1.default, { title: "Prices" }); };
exports.Head = Head;
