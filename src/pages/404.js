"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Head = void 0;
var gatsby_1 = require("gatsby");
var React = require("react");
var seo_1 = require("../components/seo");
var pageStyles = {
    color: '#232129',
    padding: '96px',
    fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
var headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
};
var paragraphStyles = {
    marginBottom: 48,
};
var codeStyles = {
    color: '#8A6534',
    padding: 4,
    backgroundColor: '#FFF4DB',
    fontSize: '1.25rem',
    borderRadius: 4,
};
var NotFoundPage = function () {
    return (React.createElement("main", { style: pageStyles },
        React.createElement("h1", { style: headingStyles }, "Page not found"),
        React.createElement("p", { style: paragraphStyles },
            "Sorry \uD83D\uDE14, we couldn\u2019t find what you were looking for.",
            React.createElement("br", null),
            process.env.NODE_ENV === 'development' ? (React.createElement(React.Fragment, null,
                React.createElement("br", null),
                "Try creating a page in ",
                React.createElement("code", { style: codeStyles }, "src/pages/"),
                ".",
                React.createElement("br", null))) : null,
            React.createElement("br", null),
            React.createElement(gatsby_1.Link, { to: "/" }, "Go home"),
            ".")));
};
exports.default = NotFoundPage;
var Head = function () { return React.createElement(seo_1.default, { title: "Page not found" }); };
exports.Head = Head;
