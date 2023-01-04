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
var _jsxFileName = "D:/storage/projects/Collaborative IDE/react-chat-elements/src/ReplyMessage/ReplyMessage.tsx";
require("./ReplyMessage.css");
var classnames_1 = __importDefault(require("classnames"));
var ReplyMessage = function (_a) {
    var onClick = _a.onClick, props = __rest(_a, ["onClick"]);
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: (0, classnames_1.default)('rce-mbox-reply', {
            'rce-mbox-reply-border': !!props.titleColor,
        }), style: __assign({}, (props.titleColor && { borderColor: props.titleColor })), onClick: onClick }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mbox-reply-left' }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ style: __assign({}, (props.titleColor && { color: props.titleColor })), className: 'rce-mbox-reply-owner' }, { children: props.title || 'Unknown' }), void 0, false, { fileName: _jsxFileName, lineNumber: 17, columnNumber: 9 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mbox-reply-message' }, { children: props.message || '...' }), void 0, false, { fileName: _jsxFileName, lineNumber: 20, columnNumber: 9 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 16, columnNumber: 7 }, _this), props.photoURL && ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mbox-reply-right' }, { children: (0, jsx_dev_runtime_1.jsxDEV)("img", { src: props.photoURL, alt: '' }, void 0, false, { fileName: _jsxFileName, lineNumber: 24, columnNumber: 11 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 22, columnNumber: 27 }, _this))] }), void 0, true, { fileName: _jsxFileName, lineNumber: 8, columnNumber: 11 }, _this));
};
exports.default = ReplyMessage;
//# sourceMappingURL=ReplyMessage.js.map