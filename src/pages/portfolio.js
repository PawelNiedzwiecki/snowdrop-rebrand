"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Head = exports.query = void 0;
var gatsby_1 = require("gatsby");
var gatsby_plugin_image_1 = require("gatsby-plugin-image");
var react_1 = require("react");
var layout_1 = require("../components/layout");
var seo_1 = require("../components/seo");
var About = function (_a) {
    var _b, _c;
    var data = _a.data;
    var _d = (0, react_1.useState)(false), bigView = _d[0], setbigView = _d[1];
    // const typesOfMakeup = [
    //   {
    //     name: 'bridal',
    //   },
    //   {
    //     name: 'stage',
    //   },
    //   {
    //     name: 'prom',
    //   },
    //   {
    //     name: 'photo session',
    //   },
    //   {
    //     name: 'party',
    //   },
    //   {
    //     name: 'evening',
    //   },
    // ];
    return (react_1.default.createElement(layout_1.default, null,
        react_1.default.createElement("button", { className: "rounded-md bg-rose-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-700", onClick: function () { return setbigView(!bigView); } }, "switch cols"),
        react_1.default.createElement("div", { className: "mx-auto grid max-w-screen-xl items-stretch gap-4 px-4 py-8 ".concat(bigView ? 'grid-cols-2' : 'grid-cols-4', " lg:px-6 lg:py-16") }, (_c = (_b = data === null || data === void 0 ? void 0 : data.allFile) === null || _b === void 0 ? void 0 : _b.edges) === null || _c === void 0 ? void 0 : _c.map(function (edge) {
            var image = (0, gatsby_plugin_image_1.getImage)(edge.node);
            return (react_1.default.createElement("div", { key: image === null || image === void 0 ? void 0 : image.layout },
                react_1.default.createElement(gatsby_plugin_image_1.GatsbyImage, { className: "img-wrap h-full", image: image, alt: "Dominika" })));
        }))));
};
exports.default = About;
exports.query = (0, gatsby_1.graphql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nquery About {\n  allFile(filter: {extension: {eq: \"jpg\"}, name: {regex: \"/^DSC\\d+/\"}}) {\n    edges {\n      node {\n        childImageSharp {\n          gatsbyImageData(\n            placeholder: DOMINANT_COLOR\n            formats: [AUTO, WEBP, AVIF]\n          )\n        }\n      }\n    }\n  }\n}\n"], ["\nquery About {\n  allFile(filter: {extension: {eq: \"jpg\"}, name: {regex: \"/^DSC\\\\d+/\"}}) {\n    edges {\n      node {\n        childImageSharp {\n          gatsbyImageData(\n            placeholder: DOMINANT_COLOR\n            formats: [AUTO, WEBP, AVIF]\n          )\n        }\n      }\n    }\n  }\n}\n"])));
var Head = function () { return react_1.default.createElement(seo_1.default, { title: "Portfolio" }); };
exports.Head = Head;
var templateObject_1;
