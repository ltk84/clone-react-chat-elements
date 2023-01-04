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
require("./MeetingMessage.css");
var fa_1 = require("react-icons/fa");
var hi_1 = require("react-icons/hi");
var io_1 = require("react-icons/io");
var md_1 = require("react-icons/md");
var timeago_js_1 = require("timeago.js");
var Avatar_1 = __importDefault(require("../Avatar/Avatar"));
var Dropdown_1 = __importDefault(require("../Dropdown/Dropdown"));
var classnames_1 = __importDefault(require("classnames"));
var MeetingMessage = function (_a) {
    var date = _a.date, dateString = _a.dateString, title = _a.title, subject = _a.subject, collapseTitle = _a.collapseTitle, moreItems = _a.moreItems, participants = _a.participants, dataSource = _a.dataSource, onClick = _a.onClick, onMeetingTitleClick = _a.onMeetingTitleClick, onMeetingVideoLinkClick = _a.onMeetingVideoLinkClick, onMeetingMoreSelect = _a.onMeetingMoreSelect, props = __rest(_a, ["date", "dateString", "title", "subject", "collapseTitle", "moreItems", "participants", "dataSource", "onClick", "onMeetingTitleClick", "onMeetingVideoLinkClick", "onMeetingMoreSelect"]);
    var _b = (0, react_1.useState)(false), toogle = _b[0], setToogle = _b[1];
    var PARTICIPANT_LIMIT = props.participantsLimit;
    var dateText = dateString ? dateString : date && (0, timeago_js_1.format)(date);
    var _onMeetingLinkClick = function (item, index, event) {
        if (onMeetingTitleClick instanceof Function)
            onMeetingTitleClick(item, index, event);
    };
    var _onMeetingVideoLinkClick = function (item, index, event) {
        if (onMeetingVideoLinkClick instanceof Function)
            onMeetingVideoLinkClick(item, index, event);
    };
    var toggleClick = function () {
        setToogle(!toogle);
    };
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: 'rce-mbox-mtmg' }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: 'rce-mtmg' }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: 'rce-mtmg-subject' }, { children: subject || 'Unknown Meeting' })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: 'rce-mtmg-body', onClick: onClick }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: 'rce-mtmg-item' }, { children: [(0, jsx_runtime_1.jsx)(fa_1.FaCalendar, {}), (0, jsx_runtime_1.jsxs)("div", __assign({ className: 'rce-mtmg-content' }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: 'rce-mtmg-title' }, { children: title })), (0, jsx_runtime_1.jsx)("span", __assign({ className: 'rce-mtmg-date' }, { children: dateText }))] }))] })), onMeetingMoreSelect && moreItems && moreItems.length > 0 && ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(Dropdown_1.default, { animationType: 'bottom', animationPosition: 'norteast', buttonProps: {
                                    className: 'rce-mtmg-right-icon',
                                    icon: {
                                        component: (0, jsx_runtime_1.jsx)(md_1.MdMoreHoriz, {}),
                                        size: 24,
                                    },
                                }, items: moreItems, onSelect: onMeetingMoreSelect }) }))] })), (0, jsx_runtime_1.jsx)("div", __assign({ className: 'rce-mtmg-body-bottom', onClick: toggleClick }, { children: toogle === true ? ((0, jsx_runtime_1.jsxs)("div", __assign({ className: 'rce-mtmg-bottom--tptitle' }, { children: [(0, jsx_runtime_1.jsx)(fa_1.FaCaretDown, {}), (0, jsx_runtime_1.jsx)("span", { children: collapseTitle })] }))) : ((0, jsx_runtime_1.jsxs)("div", __assign({ className: 'rce-mtmg-body-bottom--bttitle' }, { children: [(0, jsx_runtime_1.jsx)(fa_1.FaCaretRight, {}), (0, jsx_runtime_1.jsxs)("span", { children: [participants === null || participants === void 0 ? void 0 : participants.slice(0, PARTICIPANT_LIMIT).map(function (x) { return x.title || 'Unknow'; }).join(', '), participants &&
                                        PARTICIPANT_LIMIT &&
                                        participants.length > PARTICIPANT_LIMIT &&
                                        ", +".concat(participants.length - PARTICIPANT_LIMIT)] })] }))) })), (0, jsx_runtime_1.jsx)("div", __assign({ className: (0, classnames_1.default)('rce-mtmg-toogleContent', { 'rce-mtmg-toogleContent--click': toogle === true }) }, { children: dataSource &&
                        dataSource.map(function (x, i) {
                            return ((0, jsx_runtime_1.jsxs)("div", { children: [!x.event && ((0, jsx_runtime_1.jsxs)("div", __assign({ className: 'rce-mitem' }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: (0, classnames_1.default)('rce-mitem avatar', { 'rce-mitem no-avatar': !x.avatar }) }, { children: x.avatar ? (0, jsx_runtime_1.jsx)(Avatar_1.default, { src: x.avatar }) : (0, jsx_runtime_1.jsx)(io_1.IoMdChatboxes, {}) })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: 'rce-mitem-body' }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: 'rce-mitem-body--top' }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: 'rce-mitem-body--top-title', onClick: function (e) { return _onMeetingLinkClick(x, i, e); } }, { children: x.title })), (0, jsx_runtime_1.jsx)("div", __assign({ className: 'rce-mitem-body--top-time' }, { children: x.dateString ? x.dateString : x.date && x.date && (0, timeago_js_1.format)(x.date) }))] })), (0, jsx_runtime_1.jsx)("div", __assign({ className: 'rce-mitem-body--bottom' }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: 'rce-mitem-body--bottom-title' }, { children: x.message })) }))] }))] }))), x.event && ((0, jsx_runtime_1.jsx)("div", __assign({ className: 'rce-mitem-event' }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: 'rce-mitem-bottom-body' }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: 'rce-mitem-body avatar' }, { children: (0, jsx_runtime_1.jsx)(hi_1.HiOutlineVideoCamera, {}) })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: 'rce-mitem-bottom-body-top' }, { children: [x.event.title, (0, jsx_runtime_1.jsx)("div", __assign({ className: 'rce-mitem-body--top-time' }, { children: x.dateString ? x.dateString : x.date && (0, timeago_js_1.format)(x.date) })), (0, jsx_runtime_1.jsx)("div", __assign({ className: 'rce-mitem-avatar-content' }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: 'rce-mitem-avatar' }, { children: [x.event.avatars &&
                                                                        x.event.avatars.slice(0, x.event.avatarsLimit).map(function (x, i) { return (0, jsx_runtime_1.jsx)(Avatar_1.default, { src: x.src }, i); }), x.event.avatars && x.event.avatarsLimit && x.event.avatars.length > x.event.avatarsLimit && ((0, jsx_runtime_1.jsx)("div", __assign({ className: 'rce-mitem-length rce-mitem-tooltip', tooltip: x.event.avatars
                                                                            .slice(x.event.avatarsLimit, x.event.avatars.length)
                                                                            .map(function (avatar) { return avatar.title; })
                                                                            .join(',')
                                                                            .toString() }, { children: (0, jsx_runtime_1.jsx)("span", __assign({ className: 'rce-mitem-tooltip-text' }, { children: '+' + (x.event.avatars.length - x.event.avatarsLimit) })) })))] })) })), x.record && ((0, jsx_runtime_1.jsx)("div", __assign({ className: 'rce-mtmg-call-record' }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: 'rce-mtmg-call-body' }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ onClick: function (e) { return _onMeetingVideoLinkClick(x, i, e); }, className: 'rce-mtmg-call-avatars' }, { children: [(0, jsx_runtime_1.jsx)(Avatar_1.default, { className: 'rce-mtmg-call-avatars', src: x.record.avatar }), (0, jsx_runtime_1.jsx)("div", __assign({ className: 'rce-mtmg-record-time' }, { children: x.record.time }))] })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: 'rce-mtmg-call-body-title' }, { children: [(0, jsx_runtime_1.jsx)("span", { children: x.record.title }), (0, jsx_runtime_1.jsx)("div", __assign({ className: 'rce-mtmg-call-body-bottom' }, { children: x.record.savedBy }))] }))] })) })))] }))] })) })))] }, i));
                        }) }))] })) })));
};
exports.default = MeetingMessage;
//# sourceMappingURL=MeetingMessage.js.map