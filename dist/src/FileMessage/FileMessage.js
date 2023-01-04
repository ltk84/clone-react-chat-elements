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
var _jsxFileName = "D:/storage/projects/Collaborative IDE/react-chat-elements/src/FileMessage/FileMessage.tsx";
var fa_1 = require("react-icons/fa");
var Circle_1 = __importDefault(require("../Circle/Circle"));
require("./FileMessage.css");
var FileMessage = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    var progressOptions = {
        strokeWidth: 5,
        color: '#333',
        trailColor: '#aaa',
        trailWidth: 5,
        step: function (state, circle) {
            circle.path.setAttribute('trail', state.color);
            circle.path.setAttribute('trailwidth-width', state.width);
            var value = Math.round(circle.value() * 100);
            if (value === 0)
                circle.setText('');
            else
                circle.setText(value);
        },
    };
    var error = ((_a = props === null || props === void 0 ? void 0 : props.data) === null || _a === void 0 ? void 0 : _a.status) && ((_b = props === null || props === void 0 ? void 0 : props.data) === null || _b === void 0 ? void 0 : _b.status.error) === true;
    var onClick = function (e) {
        var _a, _b, _c;
        if (!((_a = props === null || props === void 0 ? void 0 : props.data) === null || _a === void 0 ? void 0 : _a.status))
            return;
        if (!((_b = props === null || props === void 0 ? void 0 : props.data) === null || _b === void 0 ? void 0 : _b.status.download) && props.onDownload instanceof Function)
            props.onDownload(e);
        else if (((_c = props === null || props === void 0 ? void 0 : props.data) === null || _c === void 0 ? void 0 : _c.status.download) && props.onOpen instanceof Function)
            props.onOpen(e);
    };
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mbox-file' }, { children: (0, jsx_dev_runtime_1.jsxDEV)("button", __assign({ onClick: onClick }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mbox-file--icon' }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(fa_1.FaFile, { color: '#aaa' }, void 0, false, { fileName: _jsxFileName, lineNumber: 43, columnNumber: 11 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mbox-file--size' }, { children: props === null || props === void 0 ? void 0 : props.data.size }), void 0, false, { fileName: _jsxFileName, lineNumber: 44, columnNumber: 11 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 42, columnNumber: 9 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mbox-file--text' }, { children: props.text }), void 0, false, { fileName: _jsxFileName, lineNumber: 46, columnNumber: 9 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mbox-file--buttons' }, { children: [error && ((0, jsx_dev_runtime_1.jsxDEV)("span", __assign({ className: 'rce-error-button' }, { children: (0, jsx_dev_runtime_1.jsxDEV)(fa_1.FaExclamationTriangle, { color: '#ff3d3d' }, void 0, false, { fileName: _jsxFileName, lineNumber: 50, columnNumber: 15 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 48, columnNumber: 22 }, _this)), !error && ((_c = props === null || props === void 0 ? void 0 : props.data) === null || _c === void 0 ? void 0 : _c.status) && !((_d = props === null || props === void 0 ? void 0 : props.data) === null || _d === void 0 ? void 0 : _d.status.download) && !((_e = props === null || props === void 0 ? void 0 : props.data) === null || _e === void 0 ? void 0 : _e.status.click) && ((0, jsx_dev_runtime_1.jsxDEV)(fa_1.FaCloudDownloadAlt, { color: '#aaa' }, void 0, false, { fileName: _jsxFileName, lineNumber: 53, columnNumber: 109 }, _this)), !error &&
                            ((_f = props === null || props === void 0 ? void 0 : props.data) === null || _f === void 0 ? void 0 : _f.status) &&
                            typeof ((_g = props === null || props === void 0 ? void 0 : props.data) === null || _g === void 0 ? void 0 : _g.status.loading) === 'number' &&
                            ((_h = props === null || props === void 0 ? void 0 : props.data) === null || _h === void 0 ? void 0 : _h.status.loading) !== 0 && ((0, jsx_dev_runtime_1.jsxDEV)(Circle_1.default, { animate: (_j = props === null || props === void 0 ? void 0 : props.data) === null || _j === void 0 ? void 0 : _j.status.loading, className: 'rce-mbox-file--loading', progressOptions: progressOptions }, void 0, false, { fileName: _jsxFileName, lineNumber: 59, columnNumber: 51 }, _this))] }), void 0, true, { fileName: _jsxFileName, lineNumber: 47, columnNumber: 9 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 41, columnNumber: 7 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 39, columnNumber: 11 }, _this));
};
exports.default = FileMessage;
//# sourceMappingURL=FileMessage.js.map