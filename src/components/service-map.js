"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_leaflet_1 = require("react-leaflet");
var ServiceMap = function () {
    var mapCenter = [51.3018, -0.5603];
    var latlngs = [
        [-0.626843, 51.1741319],
        [-0.3127429, 51.2181829],
        [-0.3070834, 51.3048792],
        [-0.3580132, 51.3740558],
        [-0.4211846, 51.396339],
        [-0.5138817, 51.4014798],
        [-0.7953796, 51.3503932],
        [-0.8481547, 51.2791339],
        [-0.7987162, 51.2086394],
    ];
    var _a = (0, react_1.useState)([]), coordinates = _a[0], setCoordinates = _a[1];
    (0, react_1.useEffect)(function () {
        setCoordinates(latlngs.map(function (row) { return [row[1], row[0]]; }));
    }, []);
    var purpleOptions = {
        color: '#e11d48',
        weight: 1,
        opacity: 0.7,
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h3", { className: "mb-4 text-xl font-extrabold text-gray-900" }, "Working mobile in this area"),
        react_1.default.createElement(react_leaflet_1.MapContainer, { style: { height: '40vh', borderRadius: '10px' }, center: mapCenter, zoom: 10, scrollWheelZoom: false },
            react_1.default.createElement(react_leaflet_1.TileLayer, { attribution: "\u00A9 Omniscale 2023 (https://maps.omniscale.com) \u2013 Map data: OpenStreetMap (License ODbL)", url: "https://maps.omniscale.net/v2/snowdrop-d2e964c4/style.grayscale/{z}/{x}/{y}.png" }),
            react_1.default.createElement(react_leaflet_1.Polygon, { pathOptions: purpleOptions, positions: coordinates }))));
};
exports.default = react_1.default.memo(ServiceMap);
