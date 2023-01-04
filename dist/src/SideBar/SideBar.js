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
var _jsxFileName = "D:/storage/projects/Collaborative IDE/react-chat-elements/src/SideBar/SideBar.tsx";
require("./SideBar.css");
var classnames_1 = __importDefault(require("classnames"));
var SideBar = function (_a) {
    var _b, _c, _d;
    var _e = _a.type, type = _e === void 0 ? 'dark' : _e, props = __rest(_a, ["type"]);
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: (0, classnames_1.default)('rce-sbar', type, props.data.className) }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-sbar-item' }, { children: (_b = props.data) === null || _b === void 0 ? void 0 : _b.top }), void 0, false, { fileName: _jsxFileName, lineNumber: 10, columnNumber: 7 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-sbar-item rce-sbar-item__center' }, { children: (_c = props.data) === null || _c === void 0 ? void 0 : _c.center }), void 0, false, { fileName: _jsxFileName, lineNumber: 11, columnNumber: 7 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-sbar-item' }, { children: (_d = props.data) === null || _d === void 0 ? void 0 : _d.bottom }), void 0, false, { fileName: _jsxFileName, lineNumber: 12, columnNumber: 7 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 8, columnNumber: 11 }, _this));
};
exports.default = SideBar;
//# sourceMappingURL=SideBar.js.map