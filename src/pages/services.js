"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Head = void 0;
var react_1 = require("react");
var gatsby_plugin_image_1 = require("gatsby-plugin-image");
var layout_1 = require("../components/layout");
var seo_1 = require("../components/seo");
// area of service map
var Services = function () { return (react_1.default.createElement(layout_1.default, null,
    react_1.default.createElement("section", null,
        react_1.default.createElement("p", null, "Your skin is an investment. Not an expense."),
        react_1.default.createElement("div", { className: "mx-auto max-w-screen-xl items-center gap-16 px-4 py-8 lg:grid lg:grid-cols-2 lg:px-6 lg:py-16" },
            react_1.default.createElement("div", { className: "font-light text-gray-900 sm:text-lg" },
                react_1.default.createElement("h2", { className: "mb-4 text-4xl font-extrabold tracking-tight text-gray-900" }, "Facial lymphatic skin treatment"),
                react_1.default.createElement("p", { className: "mb-4" }, "Experience the rejuvenating power of facial skin lymphatic massage, a luxurious treatment that combines relaxation and wellness for your skin. This gentle and soothing massage technique focuses on stimulating the lymphatic system in your face, promoting detoxification and enhancing the natural beauty of your complexion."),
                react_1.default.createElement("p", null, "As the skilled hands of our experienced estheticians glide across your skin, they utilize precise movements and rhythmic strokes to encourage lymphatic drainage. By targeting the lymph nodes and pathways, this specialized massage technique helps to remove toxins, reduce puffiness, and improve overall circulation in the facial area.")),
            react_1.default.createElement("div", { className: "mt-8 grid grid-cols-2 gap-4" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement(gatsby_plugin_image_1.StaticImage, { src: "../images/main.jpg", alt: "office content 1", className: "img-wrap" })),
                react_1.default.createElement(gatsby_plugin_image_1.StaticImage, { className: "img-wrap mt-4 lg:mt-10", src: "../images/hero-image.png", alt: "office content 2" })))),
    react_1.default.createElement("section", null,
        react_1.default.createElement("div", { className: "mx-auto max-w-screen-xl items-center gap-16 px-4 py-8 lg:grid lg:grid-cols-2 lg:px-6 lg:py-16" },
            react_1.default.createElement("div", { className: "order-2 font-light text-gray-900 sm:text-lg" },
                react_1.default.createElement("h2", { className: "mb-4 text-4xl font-extrabold tracking-tight text-gray-900" }, "Facial lymphatic skin treatment"),
                react_1.default.createElement("p", { className: "mb-4" }, "Experience the rejuvenating power of facial skin lymphatic massage, a luxurious treatment that combines relaxation and wellness for your skin. This gentle and soothing massage technique focuses on stimulating the lymphatic system in your face, promoting detoxification and enhancing the natural beauty of your complexion."),
                react_1.default.createElement("p", null, "As the skilled hands of our experienced estheticians glide across your skin, they utilize precise movements and rhythmic strokes to encourage lymphatic drainage. By targeting the lymph nodes and pathways, this specialized massage technique helps to remove toxins, reduce puffiness, and improve overall circulation in the facial area.")),
            react_1.default.createElement("div", { className: "order-1 mt-8 grid grid-cols-2 gap-4" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement(gatsby_plugin_image_1.StaticImage, { src: "../images/main.jpg", alt: "office content 1", className: "img-wrap" })),
                react_1.default.createElement(gatsby_plugin_image_1.StaticImage, { className: "img-wrap mt-4 lg:mt-10", src: "../images/hero-image.png", alt: "office content 2" })))))); };
exports.default = Services;
var Head = function () { return react_1.default.createElement(seo_1.default, { title: "Services" }); };
exports.Head = Head;
