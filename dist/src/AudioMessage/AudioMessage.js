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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/storage/projects/Collaborative IDE/react-chat-elements/src/AudioMessage/AudioMessage.tsx";
require("./AudioMessage.css");
var AudioMessage = function (props) {
    var controlsList = props.data.controlsList;
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mbox-audio', style: props.customStyle }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("audio", __assign({}, props.audioProps, { controls: true, controlsList: controlsList ? controlsList : 'nodownload' }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("source", { src: props.data.audioURL, type: props.data.audioType || 'audio/mp3' }, void 0, false, { fileName: _jsxFileName, lineNumber: 11, columnNumber: 9 }, _this), "Your browser does not support the audio element."] }), void 0, true, { fileName: _jsxFileName, lineNumber: 10, columnNumber: 7 }, _this), props.text && (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mbox-text' }, { children: props.text }), void 0, false, { fileName: _jsxFileName, lineNumber: 14, columnNumber: 21 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 8, columnNumber: 11 }, _this));
};
exports.default = AudioMessage;
//# sourceMappingURL=AudioMessage.js.map