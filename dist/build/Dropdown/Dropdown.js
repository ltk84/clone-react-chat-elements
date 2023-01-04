"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./Dropdown.css");
var classnames_1 = __importDefault(require("classnames"));
var Button_1 = __importDefault(require("../Button/Button"));
var Dropdown = function (_a) {
    var _b;
    var _c = _a.animationPosition, animationPosition = _c === void 0 ? 'nortwest' : _c, _d = _a.animationType, animationType = _d === void 0 ? 'default' : _d, props = __rest(_a, ["animationPosition", "animationType"]);
    var _e = (0, react_1.useState)(undefined), show = _e[0], setShow = _e[1];
    var onBlur = function () {
        if (show === true)
            setShow(false);
    };
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: (0, classnames_1.default)('rce-dropdown-container', props.className), onBlur: onBlur }, { children: [(0, jsx_runtime_1.jsx)(Button_1.default, __assign({}, props.buttonProps, { onClick: function () { return setShow(!show); } })), (0, jsx_runtime_1.jsx)("div", __assign({ className: (0, classnames_1.default)('rce-dropdown', animationType, 'rce-dropdown-open__' + animationPosition, { 'dropdown-hide': show === false }, { 'dropdown-show': show === true }) }, { children: (0, jsx_runtime_1.jsxs)("ul", { children: [props.title && (0, jsx_runtime_1.jsx)("span", __assign({ className: 'rce-dropdown-title' }, { children: props.title })), (_b = props.items) === null || _b === void 0 ? void 0 : _b.map(function (x, i) { return ((0, jsx_runtime_1.jsx)("li", __assign({ onMouseDown: function (e) { return props.onSelect(i); } }, { children: x instanceof Object ? (x.icon ? ((0, jsx_runtime_1.jsxs)("span", __assign({ className: 'rce-button-icon--container' }, { children: [(x.icon.float === 'right' || !x.icon.float) && (0, jsx_runtime_1.jsx)("a", { children: x.text }), (0, jsx_runtime_1.jsx)("span", __assign({ style: { float: x.icon.float, color: x.icon.color, fontSize: x.icon.size || 12 }, className: (0, classnames_1.default)('rce-button-icon', x.icon.className) }, { children: x.icon.component })), x.icon.float === 'left' && (0, jsx_runtime_1.jsx)("a", { children: x.text })] }))) : ((0, jsx_runtime_1.jsx)("a", { children: x.text }))) : ((0, jsx_runtime_1.jsx)("a", { children: x })) }), i)); })] }) }))] })));
};
exports.default = Dropdown;
//# sourceMappingURL=Dropdown.js.map