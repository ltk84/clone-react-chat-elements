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
var _jsxFileName = "D:/storage/projects/Collaborative IDE/react-chat-elements/src/ChatItem/ChatItem.tsx";
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
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: (0, classnames_1.default)('rce-container-citem', props.className), onClick: handleOnClick, onContextMenu: props.onContextMenu }, { children: (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-citem', onDragOver: onDragOver, onDragEnter: onDragEnter, onDragLeave: onDragLeave, onDrop: onDrop }, { children: [!!props.onDragComponent && onDrag && props.onDragComponent(props.id), ((onDrag && !props.onDragComponent) || !onDrag) && [
                    (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: (0, classnames_1.default)('rce-citem-avatar', { 'rce-citem-status-encircle': statusColorType === 'encircle' }) }, { children: (0, jsx_dev_runtime_1.jsxDEV)(Avatar_1.default, { src: props.avatar, alt: props.alt, className: statusColorType === 'encircle' ? 'rce-citem-avatar-encircle-status' : '', size: 'large', letterItem: props.letterItem, sideElement: props.statusColor ? ((0, jsx_dev_runtime_1.jsxDEV)("span", __assign({ className: 'rce-citem-status', style: statusColorType === 'encircle'
                                    ? {
                                        border: "solid 2px ".concat(props.statusColor),
                                    }
                                    : {
                                        backgroundColor: props.statusColor,
                                    } }, { children: props.statusText }), void 0, false, { fileName: _jsxFileName, lineNumber: 85, columnNumber: 38 }, _this)) : ((0, jsx_dev_runtime_1.jsxDEV)(jsx_dev_runtime_1.Fragment, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 100, columnNumber: 22 }, _this)), onError: onAvatarError, lazyLoadingImage: lazyLoadingImage, type: (0, classnames_1.default)('circle', { 'flexible': avatarFlexible }) }, void 0, false, { fileName: _jsxFileName, lineNumber: 78, columnNumber: 13 }, _this) }), 'avatar', false, { fileName: _jsxFileName, lineNumber: 73, columnNumber: 62 }, _this),
                    (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-citem-body' }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-citem-body--top' }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-citem-body--top-title' }, { children: props.title }), void 0, false, { fileName: _jsxFileName, lineNumber: 111, columnNumber: 15 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-citem-body--top-time' }, { children: date && (props.dateString || (0, timeago_js_1.format)(date)) }), void 0, false, { fileName: _jsxFileName, lineNumber: 112, columnNumber: 15 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 110, columnNumber: 13 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-citem-body--bottom' }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-citem-body--bottom-title' }, { children: props.subtitle }), void 0, false, { fileName: _jsxFileName, lineNumber: 116, columnNumber: 15 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-citem-body--bottom-tools', onMouseEnter: handleOnMouseEnter, onMouseLeave: handleOnMouseLeave }, { children: [props.showMute && ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-citem-body--bottom-tools-item', onClick: props.onClickMute }, { children: [props.muted === true && (0, jsx_dev_runtime_1.jsxDEV)(md_1.MdVolumeOff, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 120, columnNumber: 45 }, _this), props.muted === false && (0, jsx_dev_runtime_1.jsxDEV)(md_1.MdVolumeUp, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 121, columnNumber: 46 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 118, columnNumber: 37 }, _this)), props.showVideoCall && ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-citem-body--bottom-tools-item', onClick: props.onClickVideoCall }, { children: (0, jsx_dev_runtime_1.jsxDEV)(md_1.MdVideoCall, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 126, columnNumber: 21 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 124, columnNumber: 42 }, _this))] }), void 0, true, { fileName: _jsxFileName, lineNumber: 117, columnNumber: 15 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-citem-body--bottom-tools-item-hidden-hover' }, { children: props.showMute && props.muted && ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-citem-body--bottom-tools-item' }, { children: (0, jsx_dev_runtime_1.jsxDEV)(md_1.MdVolumeOff, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 133, columnNumber: 21 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 131, columnNumber: 52 }, _this)) }), void 0, false, { fileName: _jsxFileName, lineNumber: 130, columnNumber: 15 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-citem-body--bottom-status' }, { children: unread && unread > 0 ? (0, jsx_dev_runtime_1.jsxDEV)("span", { children: unread }, void 0, false, { fileName: _jsxFileName, lineNumber: 137, columnNumber: 85 }, _this) : null }), void 0, false, { fileName: _jsxFileName, lineNumber: 137, columnNumber: 15 }, _this), props.customStatusComponents !== undefined ? props.customStatusComponents.map(function (Item) { return (0, jsx_dev_runtime_1.jsxDEV)(Item, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 138, columnNumber: 101 }, _this); }) : null] }), void 0, true, { fileName: _jsxFileName, lineNumber: 115, columnNumber: 13 }, _this)] }), 'rce-citem-body', true, { fileName: _jsxFileName, lineNumber: 108, columnNumber: 18 }, _this),
                ]] }), void 0, true, { fileName: _jsxFileName, lineNumber: 71, columnNumber: 7 }, _this) }), props.id, false, { fileName: _jsxFileName, lineNumber: 64, columnNumber: 11 }, _this));
};
exports.default = ChatItem;
//# sourceMappingURL=ChatItem.js.map