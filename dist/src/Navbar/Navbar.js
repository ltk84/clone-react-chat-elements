"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/storage/projects/Collaborative IDE/react-chat-elements/src/Navbar/Navbar.tsx";
require("./Navbar.css");
var classnames_1 = __importDefault(require("classnames"));
var Navbar = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'light' : _b, props = __rest(_a, ["type"]);
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: (0, classnames_1.default)('rce-navbar', type, props.className) }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-navbar-item rce-navbar-item__left' }, { children: props.left }), void 0, false, { fileName: _jsxFileName, lineNumber: 9, columnNumber: 7 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-navbar-item rce-navbar-item__center' }, { children: props.center }), void 0, false, { fileName: _jsxFileName, lineNumber: 10, columnNumber: 7 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-navbar-item rce-navbar-item__right' }, { children: props.right }), void 0, false, { fileName: _jsxFileName, lineNumber: 11, columnNumber: 7 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 7, columnNumber: 11 }, _this));
};
exports.default = Navbar;
//# sourceMappingURL=Navbar.js.map