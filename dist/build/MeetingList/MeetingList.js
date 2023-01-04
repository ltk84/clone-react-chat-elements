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
require("./MeetingList.css");
var MeetingItem_1 = __importDefault(require("../MeetingItem/MeetingItem"));
var classnames_1 = __importDefault(require("classnames"));
var MeetingList = function (props) {
    var _a;
    var onClick = function (item, index, event) {
        if (props.onClick instanceof Function)
            props.onClick(item, index, event);
    };
    var onContextMenu = function (item, index, event) {
        event.preventDefault();
        if (props.onContextMenu instanceof Function)
            props.onContextMenu(item, index, event);
    };
    var onAvatarError = function (item, index, event) {
        if (props.onAvatarError instanceof Function)
            props.onAvatarError(item, index, event);
    };
    var onMeetingClick = function (item, index, event) {
        if (props.onMeetingClick instanceof Function)
            props.onMeetingClick(item, index, event);
    };
    var onShareClick = function (item, index, event) {
        if (props.onShareClick instanceof Function)
            props.onShareClick(item, index, event);
    };
    var onCloseClick = function (item, index, event) {
        if (props.onCloseClick instanceof Function)
            props.onCloseClick(item, index, event);
    };
    return ((0, jsx_runtime_1.jsx)("div", __assign({ ref: props.cmpRef, className: (0, classnames_1.default)('rce-container-mtlist', props.className) }, { children: (_a = props.dataSource) === null || _a === void 0 ? void 0 : _a.map(function (x, i) { return ((0, jsx_runtime_1.jsx)(MeetingItem_1.default, __assign({ lazyLoadingImage: props.lazyLoadingImage }, x, { onAvatarError: function (e) { return onAvatarError(x, i, e); }, onContextMenu: function (e) { return onContextMenu(x, i, e); }, onClick: function (e) { return onClick(x, i, e); }, onMeetingClick: function (e) { return onMeetingClick(x, i, e); }, onShareClick: function (e) { return onShareClick(x, i, e); }, onCloseClick: function (e) { return onCloseClick(x, i, e); } }), i)); }) })));
};
exports.default = MeetingList;
//# sourceMappingURL=MeetingList.js.map