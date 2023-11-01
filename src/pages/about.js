"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Head = void 0;
var gatsby_plugin_image_1 = require("gatsby-plugin-image");
var react_1 = require("react");
var layout_1 = require("../components/layout");
var seo_1 = require("../components/seo");
var About = function () {
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
        react_1.default.createElement("div", { className: "mx-auto max-w-screen-xl items-center gap-16 px-4 py-8 lg:grid lg:grid-cols-2 lg:px-6 lg:py-16" },
            react_1.default.createElement("div", { className: "text-base leading-7 text-slate-700 [&>p]:py-3" },
                react_1.default.createElement("h2", { className: "mb-8 text-4xl font-extrabold tracking-tight text-gray-900" },
                    "Hey there! I'm ",
                    react_1.default.createElement("span", { className: "text-rose-600" }, "Dominika")),
                react_1.default.createElement("p", null,
                    "Welcome to my world of beauty and artistry! I'm Dominika, a passionate beauty therapist, makeup artist, and qualified skin care therapist. With a",
                    ' ',
                    react_1.default.createElement("span", { className: "font-semibold" }, "3-year beautician school education"),
                    ' ',
                    "and a ",
                    react_1.default.createElement("span", { className: "font-semibold" }, "level 3 makeup course"),
                    ' ',
                    "under my belt, I specialize in bridal, stage, prom, photo session, party and evening makeups."),
                react_1.default.createElement("p", null, "As a qualified skin care therapist, I'm also dedicated to helping clients achieve healthy, glowing skin. With personalized treatments and expert advice, I'll guide you towards your skincare goals."),
                react_1.default.createElement("p", null, "My goal is to enhance your natural beauty while providing a comfortable and empowering experience. From exquisite bridal looks to captivating stage makeups, I'm committed to creating unforgettable beauty experiences."),
                react_1.default.createElement("p", null, "Join me on this journey of self-care, where we can celebrate your unique style and let your inner radiance shine. I can't wait to be a part of your beauty story."),
                react_1.default.createElement("span", { className: "my-8 block text-xl font-extrabold italic leading-6 tracking-tight text-slate-700" },
                    "\"Aging is a fact of life. Looking your age is not\"",
                    react_1.default.createElement("p", { className: "mt-4 text-base font-bold" }, "Dr. Howard Murad"))),
            react_1.default.createElement("div", null,
                react_1.default.createElement(gatsby_plugin_image_1.StaticImage, { className: "img-wrap", src: "../images/main.jpg", placeholder: "dominantColor", alt: "Dominika" })))));
};
exports.default = About;
var Head = function () { return react_1.default.createElement(seo_1.default, { title: "About me" }); };
exports.Head = Head;
