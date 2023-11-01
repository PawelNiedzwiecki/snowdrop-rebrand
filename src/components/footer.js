"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gatsby_plugin_image_1 = require("gatsby-plugin-image");
var react_1 = require("react");
var ai_1 = require("react-icons/ai");
var bs_1 = require("react-icons/bs");
function Footer() {
    var currentYear = new Date().getFullYear();
    var contactInfo = {
        name: 'Dominika Stawicka',
        phone: '07462161101',
        email: 'contact@snowdrop.pl',
    };
    var socialLinks = [
        {
            name: 'Instagram',
            link: 'https://www.instagram.com/snowdropmakeup',
            Component: bs_1.BsInstagram,
        },
        {
            name: 'Facebook',
            link: 'https://www.instagram.com/snowdropmakeup',
            Component: bs_1.BsFacebook,
        },
    ];
    return (react_1.default.createElement("div", { className: "px-6 py-8" },
        react_1.default.createElement("div", null,
            react_1.default.createElement("div", { className: "flex flex-col items-center justify-between px-2" },
                react_1.default.createElement("div", { className: "my-4" },
                    react_1.default.createElement(gatsby_plugin_image_1.StaticImage, { src: "../images/Snowdrop_SVG.svg", placeholder: "tracedSVG", alt: "Logo", width: 150, style: { filter: 'invert(100%)', opacity: 0.2 } })),
                react_1.default.createElement("div", { id: "social-icons", className: "mb-4 flex items-center justify-center" }, socialLinks.map(function (_a) {
                    var name = _a.name, link = _a.link, Component = _a.Component;
                    return (react_1.default.createElement("div", { key: name, className: "px-2" },
                        react_1.default.createElement("a", { href: link, title: name, target: "_blank", rel: "noopener noreferrer" },
                            react_1.default.createElement(Component, { size: "1.5rem", title: name, className: "hover:text-rose-600" }))));
                })),
                react_1.default.createElement("div", { className: "mb-4 flex align-middle [&>p]:ml-3" },
                    react_1.default.createElement("p", null, contactInfo.name),
                    react_1.default.createElement("p", null,
                        react_1.default.createElement("a", { href: "tel: ".concat(contactInfo.phone), title: "phone" }, contactInfo.phone)),
                    react_1.default.createElement("p", null,
                        react_1.default.createElement("a", { href: "mailto: ".concat(contactInfo.email), title: "email" }, contactInfo.email)))),
            react_1.default.createElement("hr", { className: "mx-auto h-1 w-48 rounded bg-slate-600" }),
            react_1.default.createElement("p", { className: "pt-8 text-center text-xs font-light text-slate-500" },
                "Copyright by Snowdrop ",
                currentYear,
                ". Created with",
                ' ',
                react_1.default.createElement(ai_1.AiFillHeart, { className: "inline-block align-text-top" }),
                " by",
                ' ',
                react_1.default.createElement("a", { href: "https://github.com/PawelNiedzwiecki", target: "_blank", rel: "noreferrer" }, "Pawel Niedzwiecki")))));
}
exports.default = Footer;
