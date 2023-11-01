"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@headlessui/react");
var react_2 = require("react");
var hi2_1 = require("react-icons/hi2");
var services = [
    {
        id: 0,
        name: 'Select service',
        default: true,
    },
    {
        id: 1,
        name: 'Makeup',
    },
    {
        id: 2,
        name: 'Modelling',
    },
    {
        id: 3,
        name: 'Facial',
    },
    {
        id: 4,
        name: 'Eyebrow shaping & henna',
    },
    {
        id: 5,
        name: 'Other',
    },
];
function classNames() {
    var classes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classes[_i] = arguments[_i];
    }
    return classes.filter(Boolean).join(' ');
}
function Select(_a) {
    var _b = _a.selectedService, selectedService = _b === void 0 ? 0 : _b;
    var selectType = services.find(function (service) { return service.id === selectedService; });
    console.log('selectType', selectType);
    var _c = (0, react_2.useState)(selectType), selected = _c[0], setSelected = _c[1];
    return (react_2.default.createElement(react_1.Listbox, { value: selected, onChange: setSelected }, function (_a) {
        var open = _a.open;
        return (react_2.default.createElement(react_2.default.Fragment, null,
            react_2.default.createElement(react_1.Listbox.Label, { className: "block text-sm font-medium leading-6 text-gray-900" }, "Select service"),
            react_2.default.createElement("div", { className: "relative mt-2" },
                react_2.default.createElement(react_1.Listbox.Button, { className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm shadow-sm focus:border-rose-500 focus:ring-rose-500" },
                    react_2.default.createElement("span", { className: "flex items-center" },
                        react_2.default.createElement("span", { className: "block truncate" }, selected.name)),
                    react_2.default.createElement("span", { className: "pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2" },
                        react_2.default.createElement(hi2_1.HiChevronUpDown, { className: "h-5 w-5 text-gray-400", "aria-hidden": "true" }))),
                react_2.default.createElement(react_1.Transition, { show: open, as: react_2.Fragment, leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0" },
                    react_2.default.createElement(react_1.Listbox.Options, { className: "absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" }, services
                        .filter(function (service) { return !service.default; })
                        .map(function (service) { return (react_2.default.createElement(react_1.Listbox.Option, { key: service.id, className: function (_a) {
                            var active = _a.active;
                            return classNames(active ? 'bg-rose-600 text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9');
                        }, disabled: service.default, value: service }, function (_a) {
                        var selected = _a.selected, active = _a.active;
                        return (react_2.default.createElement(react_2.default.Fragment, null,
                            react_2.default.createElement("div", { className: "flex items-center" },
                                react_2.default.createElement("span", { className: classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate') }, service.name)),
                            selected ? (react_2.default.createElement("span", { className: classNames(active ? 'text-white' : 'text-rose-600', 'absolute inset-y-0 right-0 flex items-center pr-4') },
                                react_2.default.createElement(hi2_1.HiCheck, { className: "h-5 w-5", "aria-hidden": "true" }))) : null));
                    })); }))))));
    }));
}
exports.default = Select;
