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
require("./MeetingLink.css");
var MeetingLink = function (props) {
    var _a;
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: 'rce-mtlink' }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: 'rce-mtlink-content' }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: 'rce-mtlink-item' }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: 'rce-mtlink-title' }, { children: props.text })) })), (0, jsx_runtime_1.jsx)("div", __assign({ className: 'rce-mtlink-btn' }, { children: (_a = props === null || props === void 0 ? void 0 : props.actionButtons) === null || _a === void 0 ? void 0 : _a.map(function (Item) {
                        return ((0, jsx_runtime_1.jsx)("div", __assign({ className: 'rce-mtlink-btn-content', onClick: function () { var _a; return Item.onClickButton((_a = props === null || props === void 0 ? void 0 : props.meetingID) !== null && _a !== void 0 ? _a : ''); } }, { children: (0, jsx_runtime_1.jsx)(Item.Component, {}) })));
                    }) }))] })) })));
};
exports.default = MeetingLink;
//# sourceMappingURL=MeetingLink.js.map