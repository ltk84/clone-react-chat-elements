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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './VideoMessage.css';
import { FaCloudDownloadAlt, FaExclamationTriangle } from 'react-icons/fa';
import classNames from 'classnames';
import ProgressCircle from '../Circle/Circle';
var VideoMessage = function (props) {
    var _a, _b, _c, _d, _e;
    var progressOptions = {
        strokeWidth: 2.3,
        color: '#efe',
        trailColor: '#aaa',
        trailWidth: 1,
        step: function (state, circle) {
            circle.path.setAttribute('trail', state.state.color);
            circle.path.setAttribute('trailwidth-width', state.state.width);
            var value = Math.round((circle === null || circle === void 0 ? void 0 : circle.value()) * 100);
            if (value === 0)
                circle === null || circle === void 0 ? void 0 : circle.setText('');
            else
                circle === null || circle === void 0 ? void 0 : circle.setText(value);
        },
    };
    var error = ((_a = props === null || props === void 0 ? void 0 : props.data) === null || _a === void 0 ? void 0 : _a.status) && ((_b = props === null || props === void 0 ? void 0 : props.data) === null || _b === void 0 ? void 0 : _b.status.error) === true;
    var downloaded = ((_c = props === null || props === void 0 ? void 0 : props.data) === null || _c === void 0 ? void 0 : _c.status) && ((_d = props === null || props === void 0 ? void 0 : props.data) === null || _d === void 0 ? void 0 : _d.status.download);
    return (_jsxs("div", __assign({ className: classNames('rce-mbox-video', {
            'padding-time': !(props === null || props === void 0 ? void 0 : props.text),
        }) }, { children: [_jsxs("div", __assign({ className: 'rce-mbox-video--video', style: __assign({}, ((props === null || props === void 0 ? void 0 : props.data.width) &&
                    (props === null || props === void 0 ? void 0 : props.data.height) && {
                    width: props.data.width,
                    height: props.data.height,
                })) }, { children: [!downloaded && (_jsx("img", { src: props === null || props === void 0 ? void 0 : props.data.uri, alt: props === null || props === void 0 ? void 0 : props.data.alt, onClick: props.onOpen, onLoad: props.onLoad, onError: props.onPhotoError })), downloaded && (_jsxs("video", __assign({ controls: true, controlsList: props.controlsList }, { children: [_jsx("source", { src: props === null || props === void 0 ? void 0 : props.data.videoURL, type: 'video/mp4' }), "Your browser does not support HTML video."] }))), error && (_jsx("div", __assign({ className: 'rce-mbox-video--video__block' }, { children: _jsx("span", __assign({ className: 'rce-mbox-video--video__block-item rce-mbox-video--error' }, { children: _jsx(FaExclamationTriangle, {}) })) }))), !error && ((_e = props === null || props === void 0 ? void 0 : props.data) === null || _e === void 0 ? void 0 : _e.status) && !downloaded && (_jsxs("div", __assign({ className: 'rce-mbox-video--video__block' }, { children: [!props.data.status.click && (_jsx("button", __assign({ onClick: props.onDownload, className: 'rce-mbox-video--video__block-item rce-mbox-video--download' }, { children: _jsx(FaCloudDownloadAlt, {}) }))), typeof props.data.status.loading === 'number' && props.data.status.loading !== 0 && (_jsx(ProgressCircle, { animate: props.data.status.loading, className: 'rce-mbox-video--video__block-item', progressOptions: progressOptions }))] })))] })), (props === null || props === void 0 ? void 0 : props.text) && _jsx("div", __assign({ className: 'rce-mbox-text' }, { children: props.text }))] })));
};
export default VideoMessage;
