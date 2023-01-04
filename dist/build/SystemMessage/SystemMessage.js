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
var jsx_runtime_1 = require("react/jsx-runtime");
require("./SystemMessage.css");
var classnames_1 = __importDefault(require("classnames"));
var SystemMessage = function (props) {
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: (0, classnames_1.default)('rce-container-smsg', props.className) }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: 'rce-smsg' }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: 'rce-smsg-text' }, { children: props.text })) })) })));
};
exports.default = SystemMessage;
//# sourceMappingURL=SystemMessage.js.map