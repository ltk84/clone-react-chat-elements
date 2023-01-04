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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/storage/projects/Collaborative IDE/react-chat-elements/src/SystemMessage/SystemMessage.tsx";
require("./SystemMessage.css");
var classnames_1 = __importDefault(require("classnames"));
var SystemMessage = function (props) {
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: (0, classnames_1.default)('rce-container-smsg', props.className) }, { children: (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-smsg' }, { children: (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-smsg-text' }, { children: props.text }), void 0, false, { fileName: _jsxFileName, lineNumber: 11, columnNumber: 9 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 10, columnNumber: 7 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 8, columnNumber: 11 }, _this));
};
exports.default = SystemMessage;
//# sourceMappingURL=SystemMessage.js.map