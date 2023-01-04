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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/storage/projects/Collaborative IDE/react-chat-elements/src/VideoMessage/VideoMessage.tsx";
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
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: (0, classnames_1.default)('rce-mbox-video', {
            'padding-time': !(props === null || props === void 0 ? void 0 : props.text),
        }) }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mbox-video--video', style: __assign({}, ((props === null || props === void 0 ? void 0 : props.data.width) &&
                    (props === null || props === void 0 ? void 0 : props.data.height) && {
                    width: props.data.width,
                    height: props.data.height,
                })) }, { children: [!downloaded && ((0, jsx_dev_runtime_1.jsxDEV)("img", { src: props === null || props === void 0 ? void 0 : props.data.uri, alt: props === null || props === void 0 ? void 0 : props.data.alt, onClick: props.onOpen, onLoad: props.onLoad, onError: props.onPhotoError }, void 0, false, { fileName: _jsxFileName, lineNumber: 53, columnNumber: 26 }, _this)), downloaded && ((0, jsx_dev_runtime_1.jsxDEV)("video", __assign({ controls: true, controlsList: props.controlsList }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("source", { src: props === null || props === void 0 ? void 0 : props.data.videoURL, type: 'video/mp4' }, void 0, false, { fileName: _jsxFileName, lineNumber: 65, columnNumber: 13 }, _this), "Your browser does not support HTML video."] }), void 0, true, { fileName: _jsxFileName, lineNumber: 63, columnNumber: 25 }, _this)), error && ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mbox-video--video__block' }, { children: (0, jsx_dev_runtime_1.jsxDEV)("span", __assign({ className: 'rce-mbox-video--video__block-item rce-mbox-video--error' }, { children: (0, jsx_dev_runtime_1.jsxDEV)(fa_1.FaExclamationTriangle, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 73, columnNumber: 15 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 72, columnNumber: 13 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 70, columnNumber: 20 }, _this)), !error && ((_e = props === null || props === void 0 ? void 0 : props.data) === null || _e === void 0 ? void 0 : _e.status) && !downloaded && ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mbox-video--video__block' }, { children: [!props.data.status.click && ((0, jsx_dev_runtime_1.jsxDEV)("button", __assign({ onClick: props.onDownload, className: 'rce-mbox-video--video__block-item rce-mbox-video--download' }, { children: (0, jsx_dev_runtime_1.jsxDEV)(fa_1.FaCloudDownloadAlt, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 81, columnNumber: 17 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 79, columnNumber: 43 }, _this)), typeof props.data.status.loading === 'number' && props.data.status.loading !== 0 && ((0, jsx_dev_runtime_1.jsxDEV)(Circle_1.default, { animate: props.data.status.loading, className: 'rce-mbox-video--video__block-item', progressOptions: progressOptions }, void 0, false, { fileName: _jsxFileName, lineNumber: 84, columnNumber: 99 }, _this))] }), void 0, true, { fileName: _jsxFileName, lineNumber: 77, columnNumber: 59 }, _this))] }), void 0, true, { fileName: _jsxFileName, lineNumber: 43, columnNumber: 7 }, _this), (props === null || props === void 0 ? void 0 : props.text) && (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mbox-text' }, { children: props.text }), void 0, false, { fileName: _jsxFileName, lineNumber: 94, columnNumber: 22 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 37, columnNumber: 11 }, _this));
};
exports.default = VideoMessage;
//# sourceMappingURL=VideoMessage.js.map