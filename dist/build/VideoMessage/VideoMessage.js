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
var jsx_runtime_1 = require("react/jsx-runtime");
require("./VideoMessage.css");
var fa_1 = require("react-icons/fa");
var classnames_1 = __importDefault(require("classnames"));
var Circle_1 = __importDefault(require("../Circle/Circle"));
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
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: (0, classnames_1.default)('rce-mbox-video', {
            'padding-time': !(props === null || props === void 0 ? void 0 : props.text),
        }) }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: 'rce-mbox-video--video', style: __assign({}, ((props === null || props === void 0 ? void 0 : props.data.width) &&
                    (props === null || props === void 0 ? void 0 : props.data.height) && {
                    width: props.data.width,
                    height: props.data.height,
                })) }, { children: [!downloaded && ((0, jsx_runtime_1.jsx)("img", { src: props === null || props === void 0 ? void 0 : props.data.uri, alt: props === null || props === void 0 ? void 0 : props.data.alt, onClick: props.onOpen, onLoad: props.onLoad, onError: props.onPhotoError })), downloaded && ((0, jsx_runtime_1.jsxs)("video", __assign({ controls: true, controlsList: props.controlsList }, { children: [(0, jsx_runtime_1.jsx)("source", { src: props === null || props === void 0 ? void 0 : props.data.videoURL, type: 'video/mp4' }), "Your browser does not support HTML video."] }))), error && ((0, jsx_runtime_1.jsx)("div", __assign({ className: 'rce-mbox-video--video__block' }, { children: (0, jsx_runtime_1.jsx)("span", __assign({ className: 'rce-mbox-video--video__block-item rce-mbox-video--error' }, { children: (0, jsx_runtime_1.jsx)(fa_1.FaExclamationTriangle, {}) })) }))), !error && ((_e = props === null || props === void 0 ? void 0 : props.data) === null || _e === void 0 ? void 0 : _e.status) && !downloaded && ((0, jsx_runtime_1.jsxs)("div", __assign({ className: 'rce-mbox-video--video__block' }, { children: [!props.data.status.click && ((0, jsx_runtime_1.jsx)("button", __assign({ onClick: props.onDownload, className: 'rce-mbox-video--video__block-item rce-mbox-video--download' }, { children: (0, jsx_runtime_1.jsx)(fa_1.FaCloudDownloadAlt, {}) }))), typeof props.data.status.loading === 'number' && props.data.status.loading !== 0 && ((0, jsx_runtime_1.jsx)(Circle_1.default, { animate: props.data.status.loading, className: 'rce-mbox-video--video__block-item', progressOptions: progressOptions }))] })))] })), (props === null || props === void 0 ? void 0 : props.text) && (0, jsx_runtime_1.jsx)("div", __assign({ className: 'rce-mbox-text' }, { children: props.text }))] })));
};
exports.default = VideoMessage;
//# sourceMappingURL=VideoMessage.js.map