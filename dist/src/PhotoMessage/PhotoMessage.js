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
var _jsxFileName = "D:/storage/projects/Collaborative IDE/react-chat-elements/src/PhotoMessage/PhotoMessage.tsx";
require("./PhotoMessage.css");
var fa_1 = require("react-icons/fa");
var Circle_1 = __importDefault(require("../Circle/Circle"));
var PhotoMessage = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    var progressOptions = {
        strokeWidth: 2.3,
        color: '#efe',
        trailColor: '#aaa',
        trailWidth: 1,
        step: function (state, circle) {
            var _a, _b;
            circle.path.setAttribute('trail', (_a = state === null || state === void 0 ? void 0 : state.state) === null || _a === void 0 ? void 0 : _a.color);
            circle.path.setAttribute('trailwidth-width', (_b = state === null || state === void 0 ? void 0 : state.state) === null || _b === void 0 ? void 0 : _b.width);
            var value = Math.round(circle.value() * 100);
            if (value === 0)
                circle.setText('');
            else
                circle.setText(value);
        },
    };
    var error = ((_a = props === null || props === void 0 ? void 0 : props.data) === null || _a === void 0 ? void 0 : _a.status) && ((_b = props === null || props === void 0 ? void 0 : props.data) === null || _b === void 0 ? void 0 : _b.status.error) === true;
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mbox-photo' }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mbox-photo--img', style: __assign({}, (((_c = props === null || props === void 0 ? void 0 : props.data) === null || _c === void 0 ? void 0 : _c.width) &&
                    ((_d = props === null || props === void 0 ? void 0 : props.data) === null || _d === void 0 ? void 0 : _d.height) && {
                    width: props.data.width,
                    height: props.data.height,
                })) }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("img", { src: (_e = props === null || props === void 0 ? void 0 : props.data) === null || _e === void 0 ? void 0 : _e.uri, alt: (_f = props === null || props === void 0 ? void 0 : props.data) === null || _f === void 0 ? void 0 : _f.alt, onClick: props.onOpen, onLoad: props.onLoad, onError: props.onPhotoError }, void 0, false, { fileName: _jsxFileName, lineNumber: 46, columnNumber: 9 }, _this), error && ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mbox-photo--img__block' }, { children: (0, jsx_dev_runtime_1.jsxDEV)("span", __assign({ className: 'rce-mbox-photo--img__block-item rce-mbox-photo--error' }, { children: (0, jsx_dev_runtime_1.jsxDEV)(fa_1.FaExclamationTriangle, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 56, columnNumber: 15 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 55, columnNumber: 13 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 53, columnNumber: 20 }, _this)), !error && ((_g = props === null || props === void 0 ? void 0 : props.data) === null || _g === void 0 ? void 0 : _g.status) && !((_j = (_h = props === null || props === void 0 ? void 0 : props.data) === null || _h === void 0 ? void 0 : _h.status) === null || _j === void 0 ? void 0 : _j.download) && ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mbox-photo--img__block' }, { children: [!((_k = props === null || props === void 0 ? void 0 : props.data) === null || _k === void 0 ? void 0 : _k.status.click) && ((0, jsx_dev_runtime_1.jsxDEV)("button", __assign({ onClick: props.onDownload, className: 'rce-mbox-photo--img__block-item rce-mbox-photo--download' }, { children: (0, jsx_dev_runtime_1.jsxDEV)(fa_1.FaCloudDownloadAlt, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 64, columnNumber: 17 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 62, columnNumber: 45 }, _this)), typeof ((_l = props === null || props === void 0 ? void 0 : props.data) === null || _l === void 0 ? void 0 : _l.status.loading) === 'number' && ((_m = props === null || props === void 0 ? void 0 : props.data) === null || _m === void 0 ? void 0 : _m.status.loading) !== 0 && ((0, jsx_dev_runtime_1.jsxDEV)(Circle_1.default, { animate: (_o = props === null || props === void 0 ? void 0 : props.data) === null || _o === void 0 ? void 0 : _o.status.loading, progressOptions: progressOptions, className: 'rce-mbox-photo--img__block-item' }, void 0, false, { fileName: _jsxFileName, lineNumber: 67, columnNumber: 103 }, _this))] }), void 0, true, { fileName: _jsxFileName, lineNumber: 60, columnNumber: 78 }, _this))] }), void 0, true, { fileName: _jsxFileName, lineNumber: 36, columnNumber: 7 }, _this), (props === null || props === void 0 ? void 0 : props.text) && (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mbox-text' }, { children: props.text }), void 0, false, { fileName: _jsxFileName, lineNumber: 77, columnNumber: 22 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 34, columnNumber: 11 }, _this));
};
exports.default = PhotoMessage;
//# sourceMappingURL=PhotoMessage.js.map