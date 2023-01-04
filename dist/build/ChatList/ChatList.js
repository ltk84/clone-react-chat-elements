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
var react_1 = require("react");
var classnames_1 = __importDefault(require("classnames"));
require("./ChatList.css");
var ChatItem_1 = __importDefault(require("../ChatItem/ChatItem"));
var ChatList = function (props) {
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
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: (0, classnames_1.default)('rce-container-clist', props.className) }, { children: props.dataSource.map(function (x, i) { return ((0, react_1.createElement)(ChatItem_1.default, __assign({}, x, { key: i, lazyLoadingImage: props.lazyLoadingImage, onAvatarError: function (e) { return onAvatarError(x, i, e); }, onContextMenu: function (e) { return onContextMenu(x, i, e); }, onClick: function (e) { return onClick(x, i, e); }, onClickMute: function (e) { var _a; return (_a = props.onClickMute) === null || _a === void 0 ? void 0 : _a.call(props, x, i, e); }, onClickVideoCall: function (e) { var _a; return (_a = props.onClickVideoCall) === null || _a === void 0 ? void 0 : _a.call(props, x, i, e); }, onDragOver: props === null || props === void 0 ? void 0 : props.onDragOver, onDragEnter: props === null || props === void 0 ? void 0 : props.onDragEnter, onDrop: props.onDrop, onDragLeave: props.onDragLeave, onDragComponent: props.onDragComponent }))); }) })));
};
exports.default = ChatList;
//# sourceMappingURL=ChatList.js.map