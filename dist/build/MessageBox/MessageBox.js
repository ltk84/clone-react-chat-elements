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
    return ((0, jsx_runtime_1.jsx)("div", __assign({ ref: messageRef, className: (0, classnames_1.default)('rce-container-mbox', props.className), onClick: props.onClick }, { children: props.type === 'system' ? ((0, jsx_runtime_1.jsx)(SystemMessage_1.default, __assign({}, props, { focus: focus, notch: notch }))) : ((0, jsx_runtime_1.jsxs)("div", __assign({ style: styles, className: (0, classnames_1.default)(positionCls, { 'rce-mbox--clear-padding': thatAbsoluteTime }, { 'rce-mbox--clear-notch': !notch }, { 'message-focus': focus }) }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: 'rce-mbox-body', onContextMenu: props.onContextMenu }, { children: [!props.retracted && props.forwarded === true && ((0, jsx_runtime_1.jsx)("div", __assign({ className: (0, classnames_1.default)('rce-mbox-forward', { 'rce-mbox-forward-right': props.position === 'left' }, { 'rce-mbox-forward-left': props.position === 'right' }), onClick: props.onForwardClick }, { children: (0, jsx_runtime_1.jsx)(ri_1.RiShareForwardFill, {}) }))), !props.retracted && props.replyButton === true && ((0, jsx_runtime_1.jsx)("div", __assign({ className: props.forwarded !== true
                                ? (0, classnames_1.default)('rce-mbox-forward', { 'rce-mbox-forward-right': props.position === 'left' }, { 'rce-mbox-forward-left': props.position === 'right' })
                                : (0, classnames_1.default)('rce-mbox-forward', { 'rce-mbox-reply-btn-right': props.position === 'left' }, { 'rce-mbox-reply-btn-left': props.position === 'right' }), onClick: props.onReplyClick }, { children: (0, jsx_runtime_1.jsx)(md_1.MdMessage, {}) }))), !props.retracted && props.removeButton === true && ((0, jsx_runtime_1.jsx)("div", __assign({ className: props.forwarded === true
                                ? (0, classnames_1.default)('rce-mbox-remove', { 'rce-mbox-remove-right': props.position === 'left' }, { 'rce-mbox-remove-left': props.position === 'right' })
                                : (0, classnames_1.default)('rce-mbox-forward', { 'rce-mbox-reply-btn-right': props.position === 'left' }, { 'rce-mbox-reply-btn-left': props.position === 'right' }), onClick: props.onRemoveMessageClick }, { children: (0, jsx_runtime_1.jsx)(md_1.MdDelete, {}) }))), (props.title || props.avatar) && ((0, jsx_runtime_1.jsxs)("div", __assign({ style: __assign({}, (props.titleColor && { color: props.titleColor })), onClick: props.onTitleClick, className: (0, classnames_1.default)('rce-mbox-title', {
                                'rce-mbox-title--clear': props.type === 'text',
                            }) }, { children: [props.avatar && (0, jsx_runtime_1.jsx)(Avatar_1.default, { letterItem: props.letterItem, src: props.avatar }), (0, jsx_runtime_1.jsxs)("div", __assign({ className: (0, classnames_1.default)('rce-mbox-time', { 'rce-mbox-time-block': thatAbsoluteTime }, { 'non-copiable': !props.copiableDate }), "data-text": props.copiableDate ? undefined : dateText }, { children: [props.copiableDate && props.date && (props.dateString || (0, timeago_js_1.format)(props.date)), props.status && ((0, jsx_runtime_1.jsxs)("span", __assign({ className: 'rce-mbox-status' }, { children: [props.status === 'waiting' && (0, jsx_runtime_1.jsx)(md_1.MdAccessTime, {}), props.status === 'sent' && (0, jsx_runtime_1.jsx)(md_1.MdCheck, {}), props.status === 'received' && (0, jsx_runtime_1.jsx)(io_1.IoIosDoneAll, {}), props.status === 'read' && (0, jsx_runtime_1.jsx)(md_1.MdDoneAll, { color: '#4FC3F7' })] })))] }))] }))), props.reply && (0, jsx_runtime_1.jsx)(ReplyMessage_1.default, __assign({ onClick: props.onReplyMessageClick }, props.reply)), props.type === 'text' && ((0, jsx_runtime_1.jsxs)("div", __assign({ className: (0, classnames_1.default)('rce-mbox-text', {
                                'rce-mbox-text-retracted': props.retracted,
                                'left': props.position === 'left',
                                'right': props.position === 'right',
                            }) }, { children: [props.retracted && (0, jsx_runtime_1.jsx)(md_1.MdBlock, {}), props.text] }))), props.type === 'location' && (0, jsx_runtime_1.jsx)(LocationMessage_1.default, __assign({ focus: focus, notch: notch }, props)), props.type === 'photo' && (0, jsx_runtime_1.jsx)(PhotoMessage_1.default, __assign({ focus: focus, notch: notch }, props)), props.type === 'video' && (0, jsx_runtime_1.jsx)(VideoMessage_1.default, __assign({ focus: focus, notch: notch }, props)), props.type === 'file' && (0, jsx_runtime_1.jsx)(FileMessage_1.default, __assign({ focus: focus, notch: notch }, props)), props.type === 'spotify' && (0, jsx_runtime_1.jsx)(SpotifyMessage_1.default, __assign({ focus: focus, notch: notch }, props)), props.type === 'meeting' && (0, jsx_runtime_1.jsx)(MeetingMessage_1.default, __assign({ focus: focus, notch: notch }, props)), props.type === 'audio' && (0, jsx_runtime_1.jsx)(AudioMessage_1.default, __assign({ focus: focus, notch: notch }, props)), props.type === 'meetingLink' && ((0, jsx_runtime_1.jsx)(MeetingLink_1.default, __assign({ focus: focus, notch: notch }, props, { actionButtons: props === null || props === void 0 ? void 0 : props.actionButtons }))), (0, jsx_runtime_1.jsxs)("div", __assign({ className: (0, classnames_1.default)('rce-mbox-time', { 'rce-mbox-time-block': thatAbsoluteTime }, { 'non-copiable': !props.copiableDate }, { 'has-title': true }), "data-text": props.copiableDate ? undefined : dateText }, { children: [props.copiableDate && props.date && (props.dateString || (0, timeago_js_1.format)(props.date)), props.status && ((0, jsx_runtime_1.jsxs)("span", __assign({ className: 'rce-mbox-status' }, { children: [props.status === 'waiting' && (0, jsx_runtime_1.jsx)(md_1.MdAccessTime, {}), props.status === 'sent' && (0, jsx_runtime_1.jsx)(md_1.MdCheck, {}), props.status === 'received' && (0, jsx_runtime_1.jsx)(io_1.IoIosDoneAll, {}), props.status === 'read' && (0, jsx_runtime_1.jsx)(md_1.MdDoneAll, { color: '#4FC3F7' })] })))] }))] })), notch &&
                    (props.position === 'right' ? ((0, jsx_runtime_1.jsx)("svg", __assign({ style: props.notchStyle, className: (0, classnames_1.default)('rce-mbox-right-notch', { 'message-focus': focus }), xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 20 20' }, { children: (0, jsx_runtime_1.jsx)("path", { d: 'M0 0v20L20 0' }) }))) : ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("svg", __assign({ style: props.notchStyle, className: (0, classnames_1.default)('rce-mbox-left-notch', { 'message-focus': focus }), xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 20 20' }, { children: [(0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsxs)("filter", __assign({ id: 'filter1', x: '0', y: '0' }, { children: [(0, jsx_runtime_1.jsx)("feOffset", { result: 'offOut', in: 'SourceAlpha', dx: '-2', dy: '-5' }), (0, jsx_runtime_1.jsx)("feGaussianBlur", { result: 'blurOut', in: 'offOut', stdDeviation: '3' }), (0, jsx_runtime_1.jsx)("feBlend", { in: 'SourceGraphic', in2: 'blurOut', mode: 'normal' })] })) }), (0, jsx_runtime_1.jsx)("path", { d: 'M20 0v20L0 0', filter: 'url(#filter1)' })] })) })))] }))) })));
};
exports.default = MessageBox;
//# sourceMappingURL=MessageBox.js.map