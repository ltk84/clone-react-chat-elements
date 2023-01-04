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
var _jsxFileName = "D:/storage/projects/Collaborative IDE/react-chat-elements/src/MessageList/MessageList.tsx";
var react_1 = require("react");
require("./MessageList.css");
var MessageBox_1 = __importDefault(require("../MessageBox/MessageBox"));
var classnames_1 = __importDefault(require("classnames"));
var fa_1 = require("react-icons/fa");
var MessageList = function (_a) {
    var _b = _a.referance, referance = _b === void 0 ? null : _b, _c = _a.lockable, lockable = _c === void 0 ? false : _c, _d = _a.toBottomHeight, toBottomHeight = _d === void 0 ? 300 : _d, downButton = _a.downButton, props = __rest(_a, ["referance", "lockable", "toBottomHeight", "downButton"]);
    var _e = (0, react_1.useState)(0), scrollBottom = _e[0], setScrollBottom = _e[1];
    var _f = (0, react_1.useState)(false), _downButton = _f[0], setDownButton = _f[1];
    var prevProps = (0, react_1.useRef)(props);
    var checkScroll = function () {
        var e = referance;
        if (!e || !e.current)
            return;
        if (toBottomHeight === '100%' || (toBottomHeight && scrollBottom < toBottomHeight)) {
            e.current.scrollTop = e.current.scrollHeight; // scroll to bottom
        }
        else {
            if (lockable === true) {
                e.current.scrollTop = e.current.scrollHeight - e.current.offsetHeight - scrollBottom;
            }
        }
    };
    (0, react_1.useEffect)(function () {
        if (!referance)
            return;
        if (prevProps.current.dataSource.length !== props.dataSource.length) {
            setScrollBottom(getBottom(referance));
            checkScroll();
        }
        prevProps.current = props;
    }, [prevProps, props]);
    var getBottom = function (e) {
        if (e.current)
            return e.current.scrollHeight - e.current.scrollTop - e.current.offsetHeight;
        return e.scrollHeight - e.scrollTop - e.offsetHeight;
    };
    var onOpen = function (item, index, event) {
        if (props.onOpen instanceof Function)
            props.onOpen(item, index, event);
    };
    var onDownload = function (item, index, event) {
        if (props.onDownload instanceof Function)
            props.onDownload(item, index, event);
    };
    var onPhotoError = function (item, index, event) {
        if (props.onPhotoError instanceof Function)
            props.onPhotoError(item, index, event);
    };
    var onClick = function (item, index, event) {
        if (props.onClick instanceof Function)
            props.onClick(item, index, event);
    };
    var onTitleClick = function (item, index, event) {
        if (props.onTitleClick instanceof Function)
            props.onTitleClick(item, index, event);
    };
    var onForwardClick = function (item, index, event) {
        if (props.onForwardClick instanceof Function)
            props.onForwardClick(item, index, event);
    };
    var onReplyClick = function (item, index, event) {
        if (props.onReplyClick instanceof Function)
            props.onReplyClick(item, index, event);
    };
    var onReplyMessageClick = function (item, index, event) {
        if (props.onReplyMessageClick instanceof Function)
            props.onReplyMessageClick(item, index, event);
    };
    var onRemoveMessageClick = function (item, index, event) {
        if (props.onRemoveMessageClick instanceof Function)
            props.onRemoveMessageClick(item, index, event);
    };
    var onContextMenu = function (item, index, event) {
        if (props.onContextMenu instanceof Function)
            props.onContextMenu(item, index, event);
    };
    var onMessageFocused = function (item, index, event) {
        if (props.onMessageFocused instanceof Function)
            props.onMessageFocused(item, index, event);
    };
    var onMeetingMessageClick = function (item, index, event) {
        if (props.onMeetingMessageClick instanceof Function)
            props.onMeetingMessageClick(item, index, event);
    };
    var onScroll = function (e) {
        var bottom = getBottom(e.currentTarget);
        setScrollBottom(bottom);
        if (toBottomHeight === '100%' || (toBottomHeight && bottom > toBottomHeight)) {
            if (_downButton !== true) {
                setDownButton(true);
                setScrollBottom(bottom);
            }
        }
        else {
            if (_downButton !== false) {
                setDownButton(false);
                setScrollBottom(bottom);
            }
        }
        if (props.onScroll instanceof Function) {
            props.onScroll(e);
        }
    };
    var toBottom = function (e) {
        if (!referance)
            return;
        referance.current.scrollTop = referance.current.scrollHeight;
        if (props.onDownButtonClick instanceof Function) {
            props.onDownButtonClick(e);
        }
    };
    var onMeetingMoreSelect = function (item, i, e) {
        if (props.onMeetingMoreSelect instanceof Function)
            props.onMeetingMoreSelect(item, i, e);
    };
    var onMeetingLinkClick = function (item, i, e) {
        if (props.onMeetingLinkClick instanceof Function)
            props.onMeetingLinkClick(item, i, e);
    };
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: (0, classnames_1.default)(['rce-container-mlist', props.className]) }, props.customProps, { children: [!!props.children && props.isShowChild && props.children, (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ ref: referance, onScroll: onScroll, className: 'rce-mlist' }, { children: props.dataSource.map(function (x, i) { return ((0, jsx_dev_runtime_1.jsxDEV)(MessageBox_1.default, __assign({}, x, { 
                    // data={x}
                    onOpen: props.onOpen && (function (e) { return onOpen(x, i, e); }), onPhotoError: props.onPhotoError && (function (e) { return onPhotoError(x, i, e); }), onDownload: props.onDownload && (function (e) { return onDownload(x, i, e); }), onTitleClick: props.onTitleClick && (function (e) { return onTitleClick(x, i, e); }), onForwardClick: props.onForwardClick && (function (e) { return onForwardClick(x, i, e); }), onReplyClick: props.onReplyClick && (function (e) { return onReplyClick(x, i, e); }), onReplyMessageClick: props.onReplyMessageClick && (function (e) { return onReplyMessageClick(x, i, e); }), onRemoveMessageClick: props.onRemoveMessageClick && (function (e) { return onRemoveMessageClick(x, i, e); }), onClick: props.onClick && (function (e) { return onClick(x, i, e); }), onContextMenu: props.onContextMenu && (function (e) { return onContextMenu(x, i, e); }), onMeetingMoreSelect: props.onMeetingMoreSelect && (function (e) { return onMeetingMoreSelect(x, i, e); }), onMessageFocused: props.onMessageFocused && (function (e) { return onMessageFocused(x, i, e); }), onMeetingMessageClick: props.onMeetingMessageClick && (function (e) { return onMeetingMessageClick(x, i, e); }), onMeetingTitleClick: props.onMeetingTitleClick, onMeetingVideoLinkClick: props.onMeetingVideoLinkClick, onMeetingLinkClick: props.onMeetingLinkClick && (function (e) { return onMeetingLinkClick(x, i, e); }), actionButtons: props.actionButtons, styles: props.messageBoxStyles, notchStyle: props.notchStyle }), i, false, { fileName: _jsxFileName, lineNumber: 138, columnNumber: 50 }, _this)); }) }), void 0, false, { fileName: _jsxFileName, lineNumber: 137, columnNumber: 7 }, _this), downButton === true && _downButton && toBottomHeight !== '100%' && ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mlist-down-button', onClick: toBottom }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(fa_1.FaChevronDown, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 175, columnNumber: 11 }, _this), props.downButtonBadge !== undefined ? ((0, jsx_dev_runtime_1.jsxDEV)("span", __assign({ className: 'rce-mlist-down-button--badge' }, { children: props.downButtonBadge.toString() }), void 0, false, { fileName: _jsxFileName, lineNumber: 176, columnNumber: 51 }, _this)) : null] }), void 0, true, { fileName: _jsxFileName, lineNumber: 173, columnNumber: 76 }, _this))] }), void 0, true, { fileName: _jsxFileName, lineNumber: 134, columnNumber: 11 }, _this));
};
exports.default = MessageList;
//# sourceMappingURL=MessageList.js.map