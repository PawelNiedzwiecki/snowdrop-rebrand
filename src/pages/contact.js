"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Head = void 0;
var react_1 = require("react");
var layout_1 = require("../components/layout");
var select_1 = require("../components/select");
var seo_1 = require("../components/seo");
var service_map_1 = require("../components/service-map");
var Contact = function () {
    var id;
    (0, react_1.useEffect)(function () {
        var queryString = window.location.search;
        var urlParams = new URLSearchParams(queryString);
        id = parseInt(urlParams.get('id')) || 0;
    }, []);
    var boxClass = 'shadow-sm bg-gray-50 outline-none border border-gray-300 text-sm rounded-lg transition duration-300 focus:border-rose-400 block w-full p-2.5';
    var astreix = react_1.default.createElement("span", { className: "ml-0.5 text-xs" }, "*");
    var contactItems = [
        {
            id: 'name',
            name: 'Your name',
            type: 'text',
            placeholder: 'Dominika',
            required: true,
        },
        {
            id: 'email',
            name: 'Your email',
            type: 'email',
            placeholder: 'dominika@snowdrop.pl',
            required: true,
        },
        {
            id: 'phone',
            name: 'Your phone',
            type: 'tel',
            placeholder: 'Tell me your number so I can get in touch with you quicker',
            required: false,
        },
    ];
    return (react_1.default.createElement(layout_1.default, null,
        react_1.default.createElement("section", null,
            react_1.default.createElement("div", { className: "mx-auto max-w-screen-md px-4 py-8 lg:py-16" },
                react_1.default.createElement("h2", { className: "mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900" }, "Let's get in touch!"),
                react_1.default.createElement("p", { className: "mb-8 text-center font-light text-gray-900 sm:text-xl lg:mb-16" }, "Thank you for considering me for your makeup needs. Please complete the form below, and I'll respond as soon as possible."),
                react_1.default.createElement("form", { action: "#", className: "space-y-8" },
                    contactItems.map(function (_a) {
                        var id = _a.id, name = _a.name, type = _a.type, placeholder = _a.placeholder, required = _a.required;
                        return (react_1.default.createElement("div", { key: id },
                            react_1.default.createElement("label", { htmlFor: id, className: "mb-2 block text-sm font-medium text-gray-900" },
                                name,
                                required && astreix),
                            react_1.default.createElement("input", { type: type, id: id, className: boxClass, placeholder: placeholder, required: required })));
                    }),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement(select_1.default, { selectedService: id })),
                    react_1.default.createElement("div", { className: "sm:col-span-2" },
                        react_1.default.createElement("label", { htmlFor: "message", className: "mb-2 block text-sm font-medium text-gray-900 " }, "Your message"),
                        react_1.default.createElement("textarea", { id: "message", rows: 6, className: boxClass, placeholder: "Leave a comment..." })),
                    react_1.default.createElement("button", { type: "submit", className: "btn-big" }, "Send message")),
                react_1.default.createElement("p", { className: "mt-8 text-justify text-xs font-light leading-5 tracking-tight text-slate-500" }, "By submitting this form, you agree to our Privacy Policy and consent to the processing of your personal data for the purpose of responding to your inquiry. Please note that submitting this form does not guarantee an appointment. We will do our best to accommodate your request and will be in touch to discuss availability."))),
        react_1.default.createElement(service_map_1.default, null)));
};
exports.default = Contact;
var Head = function () { return react_1.default.createElement(seo_1.default, { title: "Contact" }); };
exports.Head = Head;
