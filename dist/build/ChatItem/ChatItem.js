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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./ChatItem.css");
var Avatar_1 = __importDefault(require("../Avatar/Avatar"));
var timeago_js_1 = require("timeago.js");
var classnames_1 = __importDefault(require("classnames"));
var md_1 = require("react-icons/md");
var ChatItem = function (_a) {
    var _b = _a.avatarFlexible, avatarFlexible = _b === void 0 ? false : _b, _c = _a.date, date = _c === void 0 ? new Date() : _c, _d = _a.unread, unread = _d === void 0 ? 0 : _d, _e = _a.statusColorType, statusColorType = _e === void 0 ? 'badge' : _e, _f = _a.lazyLoadingImage, lazyLoadingImage = _f === void 0 ? undefined : _f, _g = _a.onAvatarError, onAvatarError = _g === void 0 ? function () { return void 0; } : _g, props = __rest(_a, ["avatarFlexible", "date", "unread", "statusColorType", "lazyLoadingImage", "onAvatarError"]);
    var _h = (0, react_1.useState)(false), onHoverTool = _h[0], setOnHoverTool = _h[1];
    var _j = (0, react_1.useState)(false), onDrag = _j[0], setOnDrag = _j[1];
    var handleOnMouseEnter = function () {
        setOnHoverTool(true);
    };
    var handleOnMouseLeave = function () {
        setOnHoverTool(false);
    };
    var handleOnClick = function (e) {
        var _a;
        e.preventDefault();
        if (onHoverTool === true)
            return;
        (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
    };
    var onDragOver = function (e) {
        e.preventDefault();
        if (props.onDragOver instanceof Function)
            props.onDragOver(e, props.id);
    };
    var onDragEnter = function (e) {
        e.preventDefault();
        if (props.onDragEnter instanceof Function)
            props.onDragEnter(e, props.id);
        if (!onDrag)
            setOnDrag(true);
    };
    var onDragLeave = function (e) {
        e.preventDefault();
        if (props.onDragLeave instanceof Function)
            props.onDragLeave(e, props.id);
        if (onDrag)
            setOnDrag(false);
    };
    var onDrop = function (e) {
        e.preventDefault();
        if (props.onDrop instanceof Function)
            props.onDrop(e, props.id);
        if (onDrag)
            setOnDrag(false);
    };
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: (0, classnames_1.default)('rce-container-citem', props.className), onClick: handleOnClick, onContextMenu: props.onContextMenu }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: 'rce-citem', onDragOver: onDragOver, onDragEnter: onDragEnter, onDragLeave: onDragLeave, onDrop: onDrop }, { children: [!!props.onDragComponent && onDrag && props.onDragComponent(props.id), ((onDrag && !props.onDragComponent) || !onDrag) && [
                    (0, jsx_runtime_1.jsx)("div", __assign({ className: (0, classnames_1.default)('rce-citem-avatar', { 'rce-citem-status-encircle': statusColorType === 'encircle' }) }, { children: (0, jsx_runtime_1.jsx)(Avatar_1.default, { src: props.avatar, alt: props.alt, className: statusColorType === 'encircle' ? 'rce-citem-avatar-encircle-status' : '', size: 'large', letterItem: props.letterItem, sideElement: props.statusColor ? ((0, jsx_runtime_1.jsx)("span", __assign({ className: 'rce-citem-status', style: statusColorType === 'encircle'
                                    ? {
                                        border: "solid 2px ".concat(props.statusColor),
                                    }
                                    : {
                                        backgroundColor: props.statusColor,
                                    } }, { children: props.statusText }))) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {})), onError: onAvatarError, lazyLoadingImage: lazyLoadingImage, type: (0, classnames_1.default)('circle', { 'flexible': avatarFlexible }) }) }), 'avatar'),
                    (0, jsx_runtime_1.jsxs)("div", __assign({ className: 'rce-citem-body' }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: 'rce-citem-body--top' }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: 'rce-citem-body--top-title' }, { children: props.title })), (0, jsx_runtime_1.jsx)("div", __assign({ className: 'rce-citem-body--top-time' }, { children: date && (props.dateString || (0, timeago_js_1.format)(date)) }))] })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: 'rce-citem-body--bottom' }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: 'rce-citem-body--bottom-title' }, { children: props.subtitle })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: 'rce-citem-body--bottom-tools', onMouseEnter: handleOnMouseEnter, onMouseLeave: handleOnMouseLeave }, { children: [props.showMute && ((0, jsx_runtime_1.jsxs)("div", __assign({ className: 'rce-citem-body--bottom-tools-item', onClick: props.onClickMute }, { children: [props.muted === true && (0, jsx_runtime_1.jsx)(md_1.MdVolumeOff, {}), props.muted === false && (0, jsx_runtime_1.jsx)(md_1.MdVolumeUp, {})] }))), props.showVideoCall && ((0, jsx_runtime_1.jsx)("div", __assign({ className: 'rce-citem-body--bottom-tools-item', onClick: props.onClickVideoCall }, { children: (0, jsx_runtime_1.jsx)(md_1.MdVideoCall, {}) })))] })), (0, jsx_runtime_1.jsx)("div", __assign({ className: 'rce-citem-body--bottom-tools-item-hidden-hover' }, { children: props.showMute && props.muted && ((0, jsx_runtime_1.jsx)("div", __assign({ className: 'rce-citem-body--bottom-tools-item' }, { children: (0, jsx_runtime_1.jsx)(md_1.MdVolumeOff, {}) }))) })), (0, jsx_runtime_1.jsx)("div", __assign({ className: 'rce-citem-body--bottom-status' }, { children: unread && unread > 0 ? (0, jsx_runtime_1.jsx)("span", { children: unread }) : null })), props.customStatusComponents !== undefined ? props.customStatusComponents.map(function (Item) { return (0, jsx_runtime_1.jsx)(Item, {}); }) : null] }))] }), 'rce-citem-body'),
                ]] })) }), props.id));
};
exports.default = ChatItem;
//# sourceMappingURL=ChatItem.js.map