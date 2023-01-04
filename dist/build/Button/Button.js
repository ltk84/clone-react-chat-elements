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
require("./Button.css");
var classnames_1 = __importDefault(require("classnames"));
var Button = function (_a) {
    var _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.backgroundColor, backgroundColor = _c === void 0 ? '#3979aa' : _c, _d = _a.color, color = _d === void 0 ? 'white' : _d, props = __rest(_a, ["disabled", "backgroundColor", "color"]);
    return ((0, jsx_runtime_1.jsx)("button", __assign({ ref: props.buttonRef, title: props.title, className: (0, classnames_1.default)('rce-button', props.type, props.className), style: {
            backgroundColor: backgroundColor,
            color: color,
            borderColor: backgroundColor,
        }, disabled: disabled, onClick: props.onClick }, { children: props.icon ? ((0, jsx_runtime_1.jsxs)("span", __assign({ className: 'rce-button-icon--container' }, { children: [(props.icon.float === 'right' || !props.icon.float) && (0, jsx_runtime_1.jsx)("span", { children: props.text }), (0, jsx_runtime_1.jsx)("span", __assign({ style: { float: props.icon.float, fontSize: props.icon.size || 12 }, className: 'rce-button-icon' }, { children: props.icon.component })), props.icon.float === 'left' && (0, jsx_runtime_1.jsx)("span", { children: props.text })] }))) : ((0, jsx_runtime_1.jsx)("span", { children: props.text })) })));
};
exports.default = Button;
//# sourceMappingURL=Button.js.map