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
var _jsxFileName = "D:/storage/projects/Collaborative IDE/react-chat-elements/src/MeetingLink/MeetingLink.tsx";
require("./MeetingLink.css");
var MeetingLink = function (props) {
    var _a;
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mtlink' }, { children: (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mtlink-content' }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mtlink-item' }, { children: (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mtlink-title' }, { children: props.text }), void 0, false, { fileName: _jsxFileName, lineNumber: 11, columnNumber: 11 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 10, columnNumber: 9 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mtlink-btn' }, { children: (_a = props === null || props === void 0 ? void 0 : props.actionButtons) === null || _a === void 0 ? void 0 : _a.map(function (Item) {
                        return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mtlink-btn-content', onClick: function () { var _a; return Item.onClickButton((_a = props === null || props === void 0 ? void 0 : props.meetingID) !== null && _a !== void 0 ? _a : ''); } }, { children: (0, jsx_dev_runtime_1.jsxDEV)(Item.Component, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 17, columnNumber: 17 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 15, columnNumber: 21 }, _this));
                    }) }), void 0, false, { fileName: _jsxFileName, lineNumber: 13, columnNumber: 9 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 9, columnNumber: 7 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 7, columnNumber: 11 }, _this));
};
exports.default = MeetingLink;
//# sourceMappingURL=MeetingLink.js.map