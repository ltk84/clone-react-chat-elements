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
var _jsxFileName = "D:/storage/projects/Collaborative IDE/react-chat-elements/src/MeetingMessage/MeetingMessage.tsx";
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
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mbox-mtmg' }, { children: (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mtmg' }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mtmg-subject' }, { children: subject || 'Unknown Meeting' }), void 0, false, { fileName: _jsxFileName, lineNumber: 53, columnNumber: 9 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mtmg-body', onClick: onClick }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mtmg-item' }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(fa_1.FaCalendar, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 56, columnNumber: 13 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mtmg-content' }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("span", __assign({ className: 'rce-mtmg-title' }, { children: title }), void 0, false, { fileName: _jsxFileName, lineNumber: 58, columnNumber: 15 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("span", __assign({ className: 'rce-mtmg-date' }, { children: dateText }), void 0, false, { fileName: _jsxFileName, lineNumber: 59, columnNumber: 15 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 57, columnNumber: 13 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 55, columnNumber: 11 }, _this), onMeetingMoreSelect && moreItems && moreItems.length > 0 && ((0, jsx_dev_runtime_1.jsxDEV)("div", { children: (0, jsx_dev_runtime_1.jsxDEV)(Dropdown_1.default, { animationType: 'bottom', animationPosition: 'norteast', buttonProps: {
                                    className: 'rce-mtmg-right-icon',
                                    icon: {
                                        component: (0, jsx_dev_runtime_1.jsxDEV)(md_1.MdMoreHoriz, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 71, columnNumber: 31 }, _this),
                                        size: 24,
                                    },
                                }, items: moreItems, onSelect: onMeetingMoreSelect }, void 0, false, { fileName: _jsxFileName, lineNumber: 65, columnNumber: 15 }, _this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 63, columnNumber: 73 }, _this))] }), void 0, true, { fileName: _jsxFileName, lineNumber: 54, columnNumber: 9 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mtmg-body-bottom', onClick: toggleClick }, { children: toogle === true ? ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mtmg-bottom--tptitle' }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(fa_1.FaCaretDown, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 84, columnNumber: 15 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("span", { children: collapseTitle }, void 0, false, { fileName: _jsxFileName, lineNumber: 85, columnNumber: 15 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 82, columnNumber: 31 }, _this)) : ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mtmg-body-bottom--bttitle' }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(fa_1.FaCaretRight, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 89, columnNumber: 15 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("span", { children: [participants === null || participants === void 0 ? void 0 : participants.slice(0, PARTICIPANT_LIMIT).map(function (x) { return x.title || 'Unknow'; }).join(', '), participants &&
                                        PARTICIPANT_LIMIT &&
                                        participants.length > PARTICIPANT_LIMIT &&
                                        ", +".concat(participants.length - PARTICIPANT_LIMIT)] }, void 0, true, { fileName: _jsxFileName, lineNumber: 90, columnNumber: 15 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 87, columnNumber: 16 }, _this)) }), void 0, false, { fileName: _jsxFileName, lineNumber: 81, columnNumber: 9 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: (0, classnames_1.default)('rce-mtmg-toogleContent', { 'rce-mtmg-toogleContent--click': toogle === true }) }, { children: dataSource &&
                        dataSource.map(function (x, i) {
                            return ((0, jsx_dev_runtime_1.jsxDEV)("div", { children: [!x.event && ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mitem' }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: (0, classnames_1.default)('rce-mitem avatar', { 'rce-mitem no-avatar': !x.avatar }) }, { children: x.avatar ? (0, jsx_dev_runtime_1.jsxDEV)(Avatar_1.default, { src: x.avatar }, void 0, false, { fileName: _jsxFileName, lineNumber: 111, columnNumber: 36 }, _this) : (0, jsx_dev_runtime_1.jsxDEV)(io_1.IoMdChatboxes, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 111, columnNumber: 64 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 110, columnNumber: 23 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mitem-body' }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mitem-body--top' }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mitem-body--top-title', onClick: function (e) { return _onMeetingLinkClick(x, i, e); } }, { children: x.title }), void 0, false, { fileName: _jsxFileName, lineNumber: 115, columnNumber: 27 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mitem-body--top-time' }, { children: x.dateString ? x.dateString : x.date && x.date && (0, timeago_js_1.format)(x.date) }), void 0, false, { fileName: _jsxFileName, lineNumber: 121, columnNumber: 27 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 114, columnNumber: 25 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mitem-body--bottom' }, { children: (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mitem-body--bottom-title' }, { children: x.message }), void 0, false, { fileName: _jsxFileName, lineNumber: 126, columnNumber: 27 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 125, columnNumber: 25 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 113, columnNumber: 23 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 108, columnNumber: 33 }, _this)), x.event && ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mitem-event' }, { children: (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mitem-bottom-body' }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mitem-body avatar' }, { children: (0, jsx_dev_runtime_1.jsxDEV)(hi_1.HiOutlineVideoCamera, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 135, columnNumber: 27 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 134, columnNumber: 25 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mitem-bottom-body-top' }, { children: [x.event.title, (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mitem-body--top-time' }, { children: x.dateString ? x.dateString : x.date && (0, timeago_js_1.format)(x.date) }), void 0, false, { fileName: _jsxFileName, lineNumber: 139, columnNumber: 27 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mitem-avatar-content' }, { children: (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mitem-avatar' }, { children: [x.event.avatars &&
                                                                        // x.event.avatars.slice(0, x.event.avatarsLimit).map((x, i) => x instanceof Avatar ? x : (
                                                                        x.event.avatars.slice(0, x.event.avatarsLimit).map(function (x, i) { return (0, jsx_dev_runtime_1.jsxDEV)(Avatar_1.default, { src: x.src }, i, false, { fileName: _jsxFileName, lineNumber: 145, columnNumber: 95 }, _this); }), x.event.avatars && x.event.avatarsLimit && x.event.avatars.length > x.event.avatarsLimit && ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mitem-length rce-mitem-tooltip', tooltip: x.event.avatars
                                                                            .slice(x.event.avatarsLimit, x.event.avatars.length)
                                                                            .map(function (avatar) { return avatar.title; })
                                                                            .join(',')
                                                                            .toString() }, { children: (0, jsx_dev_runtime_1.jsxDEV)("span", __assign({ className: 'rce-mitem-tooltip-text' }, { children: '+' + (x.event.avatars.length - x.event.avatarsLimit) }), void 0, false, { fileName: _jsxFileName, lineNumber: 155, columnNumber: 37 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 146, columnNumber: 127 }, _this))] }), void 0, true, { fileName: _jsxFileName, lineNumber: 141, columnNumber: 30 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 140, columnNumber: 27 }, _this), x.record && ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mtmg-call-record' }, { children: (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mtmg-call-body' }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ onClick: function (e) { return _onMeetingVideoLinkClick(x, i, e); }, className: 'rce-mtmg-call-avatars' }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(Avatar_1.default, { className: 'rce-mtmg-call-avatars', src: x.record.avatar }, void 0, false, { fileName: _jsxFileName, lineNumber: 170, columnNumber: 35 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mtmg-record-time' }, { children: x.record.time }), void 0, false, { fileName: _jsxFileName, lineNumber: 171, columnNumber: 35 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 166, columnNumber: 33 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mtmg-call-body-title' }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("span", { children: x.record.title }, void 0, false, { fileName: _jsxFileName, lineNumber: 174, columnNumber: 35 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mtmg-call-body-bottom' }, { children: x.record.savedBy }), void 0, false, { fileName: _jsxFileName, lineNumber: 175, columnNumber: 35 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 173, columnNumber: 33 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 165, columnNumber: 31 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 163, columnNumber: 41 }, _this))] }), void 0, true, { fileName: _jsxFileName, lineNumber: 137, columnNumber: 25 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 133, columnNumber: 23 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 131, columnNumber: 32 }, _this))] }, i, true, { fileName: _jsxFileName, lineNumber: 106, columnNumber: 23 }, _this));
                        }) }), void 0, false, { fileName: _jsxFileName, lineNumber: 103, columnNumber: 9 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 52, columnNumber: 7 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 50, columnNumber: 11 }, _this));
};
exports.default = MeetingMessage;
//# sourceMappingURL=MeetingMessage.js.map