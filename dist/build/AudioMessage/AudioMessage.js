"use strict";
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
require("./AudioMessage.css");
var AudioMessage = function (props) {
    var controlsList = props.data.controlsList;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: 'rce-mbox-audio', style: props.customStyle }, { children: [(0, jsx_runtime_1.jsxs)("audio", __assign({}, props.audioProps, { controls: true, controlsList: controlsList ? controlsList : 'nodownload' }, { children: [(0, jsx_runtime_1.jsx)("source", { src: props.data.audioURL, type: props.data.audioType || 'audio/mp3' }), "Your browser does not support the audio element."] })), props.text && (0, jsx_runtime_1.jsx)("div", __assign({ className: 'rce-mbox-text' }, { children: props.text }))] })));
};
exports.default = AudioMessage;
//# sourceMappingURL=AudioMessage.js.map