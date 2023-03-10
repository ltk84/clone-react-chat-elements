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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import './MessageBox.css';
import PhotoMessage from '../PhotoMessage/PhotoMessage';
import FileMessage from '../FileMessage/FileMessage';
import SystemMessage from '../SystemMessage/SystemMessage';
import LocationMessage from '../LocationMessage/LocationMessage';
import SpotifyMessage from '../SpotifyMessage/SpotifyMessage';
import ReplyMessage from '../ReplyMessage/ReplyMessage';
import MeetingMessage from '../MeetingMessage/MeetingMessage';
import VideoMessage from '../VideoMessage/VideoMessage';
import AudioMessage from '../AudioMessage/AudioMessage';
import MeetingLink from '../MeetingLink/MeetingLink';
import Avatar from '../Avatar/Avatar';
import { RiShareForwardFill } from 'react-icons/ri';
import { IoIosDoneAll } from 'react-icons/io';
import { MdAccessTime, MdCheck, MdMessage, MdDelete, MdBlock, MdDoneAll } from 'react-icons/md';
import { format } from 'timeago.js';
import classNames from 'classnames';
var MessageBox = function (_a) {
    var _b = _a.focus, focus = _b === void 0 ? false : _b, _c = _a.notch, notch = _c === void 0 ? true : _c, styles = _a.styles, props = __rest(_a, ["focus", "notch", "styles"]);
    var prevProps = useRef(focus);
    var messageRef = useRef(null);
    var positionCls = classNames('rce-mbox', { 'rce-mbox-right': props.position === 'right' });
    var thatAbsoluteTime = !/(text|video|file|meeting|audio)/g.test(props.type || 'text') && !(props.type === 'location' && props.text);
    var dateText = props.date && (props.dateString || format(props.date));
    useEffect(function () {
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
    return (_jsx("div", __assign({ ref: messageRef, className: classNames('rce-container-mbox', props.className), onClick: props.onClick }, { children: props.type === 'system' ? (_jsx(SystemMessage, __assign({}, props, { focus: focus, notch: notch }))) : (_jsxs("div", __assign({ style: styles, className: classNames(positionCls, { 'rce-mbox--clear-padding': thatAbsoluteTime }, { 'rce-mbox--clear-notch': !notch }, { 'message-focus': focus }) }, { children: [_jsxs("div", __assign({ className: 'rce-mbox-body', onContextMenu: props.onContextMenu }, { children: [!props.retracted && props.forwarded === true && (_jsx("div", __assign({ className: classNames('rce-mbox-forward', { 'rce-mbox-forward-right': props.position === 'left' }, { 'rce-mbox-forward-left': props.position === 'right' }), onClick: props.onForwardClick }, { children: _jsx(RiShareForwardFill, {}) }))), !props.retracted && props.replyButton === true && (_jsx("div", __assign({ className: props.forwarded !== true
                                ? classNames('rce-mbox-forward', { 'rce-mbox-forward-right': props.position === 'left' }, { 'rce-mbox-forward-left': props.position === 'right' })
                                : classNames('rce-mbox-forward', { 'rce-mbox-reply-btn-right': props.position === 'left' }, { 'rce-mbox-reply-btn-left': props.position === 'right' }), onClick: props.onReplyClick }, { children: _jsx(MdMessage, {}) }))), !props.retracted && props.removeButton === true && (_jsx("div", __assign({ className: props.forwarded === true
                                ? classNames('rce-mbox-remove', { 'rce-mbox-remove-right': props.position === 'left' }, { 'rce-mbox-remove-left': props.position === 'right' })
                                : classNames('rce-mbox-forward', { 'rce-mbox-reply-btn-right': props.position === 'left' }, { 'rce-mbox-reply-btn-left': props.position === 'right' }), onClick: props.onRemoveMessageClick }, { children: _jsx(MdDelete, {}) }))), (props.title || props.avatar) && (_jsxs("div", __assign({ style: __assign({}, (props.titleColor && { color: props.titleColor })), onClick: props.onTitleClick, className: classNames('rce-mbox-title', {
                                'rce-mbox-title--clear': props.type === 'text',
                            }) }, { children: [props.avatar && _jsx(Avatar, { letterItem: props.letterItem, src: props.avatar }), props.title && _jsx("span", { children: props.title }), _jsxs("div", __assign({ className: classNames('rce-mbox-time', { 'rce-mbox-time-block': thatAbsoluteTime }, { 'non-copiable': !props.copiableDate }, { 'has-title': true }), "data-text": props.copiableDate ? undefined : dateText }, { children: [props.copiableDate && props.date && (props.dateString || format(props.date)), props.status && (_jsxs("span", __assign({ className: 'rce-mbox-status' }, { children: [props.status === 'waiting' && _jsx(MdAccessTime, {}), props.status === 'sent' && _jsx(MdCheck, {}), props.status === 'received' && _jsx(IoIosDoneAll, {}), props.status === 'read' && _jsx(MdDoneAll, { color: '#4FC3F7' })] })))] }))] }))), props.reply && _jsx(ReplyMessage, __assign({ onClick: props.onReplyMessageClick }, props.reply)), props.type === 'text' && (_jsxs("div", __assign({ className: classNames('rce-mbox-text', {
                                'rce-mbox-text-retracted': props.retracted,
                                'left': props.position === 'left',
                                'right': props.position === 'right',
                            }) }, { children: [props.retracted && _jsx(MdBlock, {}), props.text] }))), props.type === 'location' && _jsx(LocationMessage, __assign({ focus: focus, notch: notch }, props)), props.type === 'photo' && _jsx(PhotoMessage, __assign({ focus: focus, notch: notch }, props)), props.type === 'video' && _jsx(VideoMessage, __assign({ focus: focus, notch: notch }, props)), props.type === 'file' && _jsx(FileMessage, __assign({ focus: focus, notch: notch }, props)), props.type === 'spotify' && _jsx(SpotifyMessage, __assign({ focus: focus, notch: notch }, props)), props.type === 'meeting' && _jsx(MeetingMessage, __assign({ focus: focus, notch: notch }, props)), props.type === 'audio' && _jsx(AudioMessage, __assign({ focus: focus, notch: notch }, props)), props.type === 'meetingLink' && (_jsx(MeetingLink, __assign({ focus: focus, notch: notch }, props, { actionButtons: props === null || props === void 0 ? void 0 : props.actionButtons }))), !props.title && _jsxs("div", __assign({ className: classNames('rce-mbox-time', { 'rce-mbox-time-block': thatAbsoluteTime }, { 'non-copiable': !props.copiableDate }), "data-text": props.copiableDate ? undefined : dateText }, { children: [props.copiableDate && props.date && (props.dateString || format(props.date)), props.status && (_jsxs("span", __assign({ className: 'rce-mbox-status' }, { children: [props.status === 'waiting' && _jsx(MdAccessTime, {}), props.status === 'sent' && _jsx(MdCheck, {}), props.status === 'received' && _jsx(IoIosDoneAll, {}), props.status === 'read' && _jsx(MdDoneAll, { color: '#4FC3F7' })] })))] }))] })), notch &&
                    (props.position === 'right' ? (_jsx("svg", __assign({ style: props.notchStyle, className: classNames('rce-mbox-right-notch', { 'message-focus': focus }), xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 20 20' }, { children: _jsx("path", { d: 'M0 0v20L20 0' }) }))) : (_jsx("div", { children: _jsxs("svg", __assign({ style: props.notchStyle, className: classNames('rce-mbox-left-notch', { 'message-focus': focus }), xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 20 20' }, { children: [_jsx("defs", { children: _jsxs("filter", __assign({ id: 'filter1', x: '0', y: '0' }, { children: [_jsx("feOffset", { result: 'offOut', in: 'SourceAlpha', dx: '-2', dy: '-5' }), _jsx("feGaussianBlur", { result: 'blurOut', in: 'offOut', stdDeviation: '3' }), _jsx("feBlend", { in: 'SourceGraphic', in2: 'blurOut', mode: 'normal' })] })) }), _jsx("path", { d: 'M20 0v20L0 0', filter: 'url(#filter1)' })] })) })))] }))) })));
};
export default MessageBox;
