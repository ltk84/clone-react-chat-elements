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
var _jsxFileName = "D:/storage/projects/Collaborative IDE/react-chat-elements/src/MessageBox/MessageBox.tsx";
var react_1 = require("react");
require("./MessageBox.css");
var PhotoMessage_1 = __importDefault(require("../PhotoMessage/PhotoMessage"));
var FileMessage_1 = __importDefault(require("../FileMessage/FileMessage"));
var SystemMessage_1 = __importDefault(require("../SystemMessage/SystemMessage"));
var LocationMessage_1 = __importDefault(require("../LocationMessage/LocationMessage"));
var SpotifyMessage_1 = __importDefault(require("../SpotifyMessage/SpotifyMessage"));
var ReplyMessage_1 = __importDefault(require("../ReplyMessage/ReplyMessage"));
var MeetingMessage_1 = __importDefault(require("../MeetingMessage/MeetingMessage"));
var VideoMessage_1 = __importDefault(require("../VideoMessage/VideoMessage"));
var AudioMessage_1 = __importDefault(require("../AudioMessage/AudioMessage"));
var MeetingLink_1 = __importDefault(require("../MeetingLink/MeetingLink"));
var Avatar_1 = __importDefault(require("../Avatar/Avatar"));
var ri_1 = require("react-icons/ri");
var io_1 = require("react-icons/io");
var md_1 = require("react-icons/md");
var timeago_js_1 = require("timeago.js");
var classnames_1 = __importDefault(require("classnames"));
var MessageBox = function (_a) {
    var _b = _a.focus, focus = _b === void 0 ? false : _b, _c = _a.notch, notch = _c === void 0 ? true : _c, styles = _a.styles, props = __rest(_a, ["focus", "notch", "styles"]);
    var prevProps = (0, react_1.useRef)(focus);
    var messageRef = (0, react_1.useRef)(null);
    var positionCls = (0, classnames_1.default)('rce-mbox', { 'rce-mbox-right': props.position === 'right' });
    var thatAbsoluteTime = !/(text|video|file|meeting|audio)/g.test(props.type || 'text') && !(props.type === 'location' && props.text);
    var dateText = props.date && (props.dateString || (0, timeago_js_1.format)(props.date));
    (0, react_1.useEffect)(function () {
        var _a;
        if (prevProps.current !== focus && focus === true) {
            if (messageRef) {
                (_a = messageRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({
                    block: 'center',
                    behavior: 'smooth',
                });
                props.onMessageFocused(prevProps);
            }
        }
        prevProps.current = focus;
    }, [focus, prevProps]);
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ ref: messageRef, className: (0, classnames_1.default)('rce-container-mbox', props.className), onClick: props.onClick }, { children: props.type === 'system' ? ((0, jsx_dev_runtime_1.jsxDEV)(SystemMessage_1.default, __assign({}, props, { focus: focus, notch: notch }), void 0, false, { fileName: _jsxFileName, lineNumber: 52, columnNumber: 35 }, _this)) : ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ style: styles, className: (0, classnames_1.default)(positionCls, { 'rce-mbox--clear-padding': thatAbsoluteTime }, { 'rce-mbox--clear-notch': !notch }, { 'message-focus': focus }) }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mbox-body', onContextMenu: props.onContextMenu }, { children: [!props.retracted && props.forwarded === true && ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: (0, classnames_1.default)('rce-mbox-forward', { 'rce-mbox-forward-right': props.position === 'left' }, { 'rce-mbox-forward-left': props.position === 'right' }), onClick: props.onForwardClick }, { children: (0, jsx_dev_runtime_1.jsxDEV)(ri_1.RiShareForwardFill, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 74, columnNumber: 17 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 65, columnNumber: 63 }, _this)), !props.retracted && props.replyButton === true && ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: props.forwarded !== true
                                ? (0, classnames_1.default)('rce-mbox-forward', { 'rce-mbox-forward-right': props.position === 'left' }, { 'rce-mbox-forward-left': props.position === 'right' })
                                : (0, classnames_1.default)('rce-mbox-forward', { 'rce-mbox-reply-btn-right': props.position === 'left' }, { 'rce-mbox-reply-btn-left': props.position === 'right' }), onClick: props.onReplyClick }, { children: (0, jsx_dev_runtime_1.jsxDEV)(md_1.MdMessage, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 95, columnNumber: 17 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 78, columnNumber: 65 }, _this)), !props.retracted && props.removeButton === true && ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: props.forwarded === true
                                ? (0, classnames_1.default)('rce-mbox-remove', { 'rce-mbox-remove-right': props.position === 'left' }, { 'rce-mbox-remove-left': props.position === 'right' })
                                : (0, classnames_1.default)('rce-mbox-forward', { 'rce-mbox-reply-btn-right': props.position === 'left' }, { 'rce-mbox-reply-btn-left': props.position === 'right' }), onClick: props.onRemoveMessageClick }, { children: (0, jsx_dev_runtime_1.jsxDEV)(md_1.MdDelete, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 116, columnNumber: 17 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 99, columnNumber: 66 }, _this)), (props.title || props.avatar) && ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ style: __assign({}, (props.titleColor && { color: props.titleColor })), onClick: props.onTitleClick, className: (0, classnames_1.default)('rce-mbox-title', {
                                'rce-mbox-title--clear': props.type === 'text',
                            }) }, { children: [props.avatar && (0, jsx_dev_runtime_1.jsxDEV)(Avatar_1.default, { letterItem: props.letterItem, src: props.avatar }, void 0, false, { fileName: _jsxFileName, lineNumber: 128, columnNumber: 33 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: (0, classnames_1.default)('rce-mbox-time', { 'rce-mbox-time-block': thatAbsoluteTime }, { 'non-copiable': !props.copiableDate }), "data-text": props.copiableDate ? undefined : dateText }, { children: [props.copiableDate && props.date && (props.dateString || (0, timeago_js_1.format)(props.date)), props.status && ((0, jsx_dev_runtime_1.jsxDEV)("span", __assign({ className: 'rce-mbox-status' }, { children: [props.status === 'waiting' && (0, jsx_dev_runtime_1.jsxDEV)(md_1.MdAccessTime, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 141, columnNumber: 53 }, _this), props.status === 'sent' && (0, jsx_dev_runtime_1.jsxDEV)(md_1.MdCheck, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 143, columnNumber: 50 }, _this), props.status === 'received' && (0, jsx_dev_runtime_1.jsxDEV)(io_1.IoIosDoneAll, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 145, columnNumber: 54 }, _this), props.status === 'read' && (0, jsx_dev_runtime_1.jsxDEV)(md_1.MdDoneAll, { color: '#4FC3F7' }, void 0, false, { fileName: _jsxFileName, lineNumber: 147, columnNumber: 50 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 139, columnNumber: 37 }, _this))] }), void 0, true, { fileName: _jsxFileName, lineNumber: 130, columnNumber: 17 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 120, columnNumber: 48 }, _this)), props.reply && (0, jsx_dev_runtime_1.jsxDEV)(ReplyMessage_1.default, __assign({ onClick: props.onReplyMessageClick }, props.reply), void 0, false, { fileName: _jsxFileName, lineNumber: 154, columnNumber: 28 }, _this), props.type === 'text' && ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: (0, classnames_1.default)('rce-mbox-text', {
                                'rce-mbox-text-retracted': props.retracted,
                                'left': props.position === 'left',
                                'right': props.position === 'right',
                            }) }, { children: [props.retracted && (0, jsx_dev_runtime_1.jsxDEV)(md_1.MdBlock, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 164, columnNumber: 36 }, _this), props.text] }), void 0, true, { fileName: _jsxFileName, lineNumber: 156, columnNumber: 40 }, _this)), props.type === 'location' && (0, jsx_dev_runtime_1.jsxDEV)(LocationMessage_1.default, __assign({ focus: focus, notch: notch }, props), void 0, false, { fileName: _jsxFileName, lineNumber: 169, columnNumber: 42 }, _this), props.type === 'photo' && (0, jsx_dev_runtime_1.jsxDEV)(PhotoMessage_1.default, __assign({ focus: focus, notch: notch }, props), void 0, false, { fileName: _jsxFileName, lineNumber: 171, columnNumber: 39 }, _this), props.type === 'video' && (0, jsx_dev_runtime_1.jsxDEV)(VideoMessage_1.default, __assign({ focus: focus, notch: notch }, props), void 0, false, { fileName: _jsxFileName, lineNumber: 173, columnNumber: 39 }, _this), props.type === 'file' && (0, jsx_dev_runtime_1.jsxDEV)(FileMessage_1.default, __assign({ focus: focus, notch: notch }, props), void 0, false, { fileName: _jsxFileName, lineNumber: 175, columnNumber: 38 }, _this), props.type === 'spotify' && (0, jsx_dev_runtime_1.jsxDEV)(SpotifyMessage_1.default, __assign({ focus: focus, notch: notch }, props), void 0, false, { fileName: _jsxFileName, lineNumber: 177, columnNumber: 41 }, _this), props.type === 'meeting' && (0, jsx_dev_runtime_1.jsxDEV)(MeetingMessage_1.default, __assign({ focus: focus, notch: notch }, props), void 0, false, { fileName: _jsxFileName, lineNumber: 179, columnNumber: 41 }, _this), props.type === 'audio' && (0, jsx_dev_runtime_1.jsxDEV)(AudioMessage_1.default, __assign({ focus: focus, notch: notch }, props), void 0, false, { fileName: _jsxFileName, lineNumber: 180, columnNumber: 39 }, _this), props.type === 'meetingLink' && ((0, jsx_dev_runtime_1.jsxDEV)(MeetingLink_1.default, __assign({ focus: focus, notch: notch }, props, { actionButtons: props === null || props === void 0 ? void 0 : props.actionButtons }), void 0, false, { fileName: _jsxFileName, lineNumber: 182, columnNumber: 47 }, _this)), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: (0, classnames_1.default)('rce-mbox-time', { 'rce-mbox-time-block': thatAbsoluteTime }, { 'non-copiable': !props.copiableDate }, { 'has-title': true }), "data-text": props.copiableDate ? undefined : dateText }, { children: [props.copiableDate && props.date && (props.dateString || (0, timeago_js_1.format)(props.date)), props.status && ((0, jsx_dev_runtime_1.jsxDEV)("span", __assign({ className: 'rce-mbox-status' }, { children: [props.status === 'waiting' && (0, jsx_dev_runtime_1.jsxDEV)(md_1.MdAccessTime, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 198, columnNumber: 49 }, _this), props.status === 'sent' && (0, jsx_dev_runtime_1.jsxDEV)(md_1.MdCheck, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 200, columnNumber: 46 }, _this), props.status === 'received' && (0, jsx_dev_runtime_1.jsxDEV)(io_1.IoIosDoneAll, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 202, columnNumber: 50 }, _this), props.status === 'read' && (0, jsx_dev_runtime_1.jsxDEV)(md_1.MdDoneAll, { color: '#4FC3F7' }, void 0, false, { fileName: _jsxFileName, lineNumber: 204, columnNumber: 46 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 196, columnNumber: 33 }, _this))] }), void 0, true, { fileName: _jsxFileName, lineNumber: 186, columnNumber: 13 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 64, columnNumber: 11 }, _this), notch &&
                    (props.position === 'right' ? ((0, jsx_dev_runtime_1.jsxDEV)("svg", __assign({ style: props.notchStyle, className: (0, classnames_1.default)('rce-mbox-right-notch', { 'message-focus': focus }), xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 20 20' }, { children: (0, jsx_dev_runtime_1.jsxDEV)("path", { d: 'M0 0v20L20 0' }, void 0, false, { fileName: _jsxFileName, lineNumber: 218, columnNumber: 17 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 211, columnNumber: 44 }, _this)) : ((0, jsx_dev_runtime_1.jsxDEV)("div", { children: (0, jsx_dev_runtime_1.jsxDEV)("svg", __assign({ style: props.notchStyle, className: (0, classnames_1.default)('rce-mbox-left-notch', { 'message-focus': focus }), xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 20 20' }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("defs", { children: (0, jsx_dev_runtime_1.jsxDEV)("filter", __assign({ id: 'filter1', x: '0', y: '0' }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("feOffset", { result: 'offOut', in: 'SourceAlpha', dx: '-2', dy: '-5' }, void 0, false, { fileName: _jsxFileName, lineNumber: 230, columnNumber: 23 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("feGaussianBlur", { result: 'blurOut', in: 'offOut', stdDeviation: '3' }, void 0, false, { fileName: _jsxFileName, lineNumber: 231, columnNumber: 23 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("feBlend", { in: 'SourceGraphic', in2: 'blurOut', mode: 'normal' }, void 0, false, { fileName: _jsxFileName, lineNumber: 232, columnNumber: 23 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 229, columnNumber: 21 }, _this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 228, columnNumber: 19 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("path", { d: 'M20 0v20L0 0', filter: 'url(#filter1)' }, void 0, false, { fileName: _jsxFileName, lineNumber: 235, columnNumber: 19 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 222, columnNumber: 17 }, _this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 220, columnNumber: 18 }, _this)))] }), void 0, true, { fileName: _jsxFileName, lineNumber: 54, columnNumber: 12 }, _this)) }), void 0, false, { fileName: _jsxFileName, lineNumber: 49, columnNumber: 11 }, _this));
};
exports.default = MessageBox;
//# sourceMappingURL=MessageBox.js.map