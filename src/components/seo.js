"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var gatsby_1 = require("gatsby");
var react_1 = require("react");
var Seo = function (_a) {
    var _b, _c;
    var _d = _a.title, title = _d === void 0 ? 'Page' : _d;
    var data = (0, gatsby_1.useStaticQuery)((0, gatsby_1.graphql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query Seo {\n      site {\n        siteMetadata {\n          title\n        }\n      }\n    }\n  "], ["\n    query Seo {\n      site {\n        siteMetadata {\n          title\n        }\n      }\n    }\n  "]))));
    return (react_1.default.createElement("title", null,
        title,
        " | ", (_c = (_b = data === null || data === void 0 ? void 0 : data.site) === null || _b === void 0 ? void 0 : _b.siteMetadata) === null || _c === void 0 ? void 0 :
        _c.title));
};
exports.default = Seo;
var templateObject_1;
