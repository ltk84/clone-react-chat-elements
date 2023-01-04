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
require("./MeetingItem.css");
var md_1 = require("react-icons/md");
var Avatar_1 = __importDefault(require("../Avatar/Avatar"));
var timeago_js_1 = require("timeago.js");
var classnames_1 = __importDefault(require("classnames"));
var MeetingItem = function (_a) {
    var _b = _a.subjectLimit, subjectLimit = _b === void 0 ? 60 : _b, _c = _a.onClick, onClick = _c === void 0 ? function () { return void 0; } : _c, _d = _a.avatarFlexible, avatarFlexible = _d === void 0 ? false : _d, _e = _a.date, date = _e === void 0 ? new Date() : _e, _f = _a.lazyLoadingImage, lazyLoadingImage = _f === void 0 ? undefined : _f, _g = _a.avatarLimit, avatarLimit = _g === void 0 ? 5 : _g, _h = _a.avatars, avatars = _h === void 0 ? [] : _h, _j = _a.audioMuted, audioMuted = _j === void 0 ? true : _j, _k = _a.onAvatarError, onAvatarError = _k === void 0 ? function () { return void 0; } : _k, _l = _a.onMeetingClick, onMeetingClick = _l === void 0 ? function () { return void 0; } : _l, _m = _a.onShareClick, onShareClick = _m === void 0 ? function () { return void 0; } : _m, props = __rest(_a, ["subjectLimit", "onClick", "avatarFlexible", "date", "lazyLoadingImage", "avatarLimit", "avatars", "audioMuted", "onAvatarError", "onMeetingClick", "onShareClick"]);
    var statusColorType = props.statusColorType;
    var AVATAR_LIMIT = avatarLimit;
    var dateText = date && (props.dateString || (0, timeago_js_1.format)(date));
    var subject = props.subject && subjectLimit && props.subject.substring(0, subjectLimit) + (props.subject.length > subjectLimit ? '...' : '');
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: (0, classnames_1.default)('rce-container-mtitem', props.className), onClick: onClick, onContextMenu: props.onContextMenu }, { children: [(0, jsx_runtime_1.jsx)("audio", { autoPlay: true, loop: true, muted: audioMuted, src: props.audioSource }), (0, jsx_runtime_1.jsxs)("div", __assign({ className: 'rce-mtitem' }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: 'rce-mtitem-top' }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: 'rce-mtitem-subject' }, { children: subject })), (0, jsx_runtime_1.jsx)("div", __assign({ className: 'rce-mtitem-share', onClick: onShareClick }, { children: (0, jsx_runtime_1.jsx)(md_1.MdLink, {}) }))] })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: 'rce-mtitem-body' }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: 'rce-mtitem-body--avatars' }, { children: [avatars === null || avatars === void 0 ? void 0 : avatars.slice(0, AVATAR_LIMIT).map(function (x, i) {
                                        return ((0, jsx_runtime_1.jsx)(Avatar_1.default, { src: x.src, alt: x.alt, className: x.statusColorType === 'encircle' ? 'rce-mtitem-avatar-encircle-status' : '', size: 'small', letterItem: x.letterItem, sideElement: x.statusColor ? ((0, jsx_runtime_1.jsx)("span", __assign({ className: 'rce-mtitem-status', style: statusColorType === 'encircle'
                                                    ? {
                                                        boxShadow: "inset 0 0 0 2px ".concat(x.statusColor, ", inset 0 0 0 5px #FFFFFF"),
                                                    }
                                                    : {
                                                        backgroundColor: x.statusColor,
                                                    } }, { children: x.statusText }))) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {})), onError: onAvatarError, lazyLoadingImage: lazyLoadingImage, type: (0, classnames_1.default)('circle', { 'flexible': avatarFlexible }) }, i));
                                    }), avatars && AVATAR_LIMIT && avatars.length > AVATAR_LIMIT && ((0, jsx_runtime_1.jsx)("div", __assign({ className: 'rce-avatar-container circle small rce-mtitem-letter' }, { children: (0, jsx_runtime_1.jsx)("span", { children: '+' + (avatars.length - AVATAR_LIMIT) }) })))] })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: 'rce-mtitem-body--functions' }, { children: [props.closable && ((0, jsx_runtime_1.jsx)("div", __assign({ className: 'rce-mtitem-closable', onClick: props.onCloseClick }, { children: (0, jsx_runtime_1.jsx)(md_1.MdCall, {}) }))), (0, jsx_runtime_1.jsx)("div", __assign({ className: 'rce-mtitem-button', onClick: onMeetingClick }, { children: (0, jsx_runtime_1.jsx)(md_1.MdVideoCall, {}) }))] }))] })), (0, jsx_runtime_1.jsx)("div", __assign({ className: 'rce-mtitem-footer' }, { children: (0, jsx_runtime_1.jsx)("span", __assign({ className: 'rce-mtitem-date' }, { children: dateText })) }))] }))] })));
};
exports.default = MeetingItem;
//# sourceMappingURL=MeetingItem.js.map