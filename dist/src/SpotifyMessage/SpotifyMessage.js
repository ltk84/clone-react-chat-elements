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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/storage/projects/Collaborative IDE/react-chat-elements/src/SpotifyMessage/SpotifyMessage.tsx";
require("./SpotifyMessage.css");
var SpotifyMessage = function (_a) {
    var _b = _a.width, width = _b === void 0 ? 300 : _b, _c = _a.height, height = _c === void 0 ? 380 : _c, props = __rest(_a, ["width", "height"]);
    var toUrl = function () {
        var formBody = [];
        for (var property in props) {
            var encodedKey = encodeURIComponent(property);
            // @ts-ignore
            var encodedValue = encodeURIComponent(props[property]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        return formBody.join('&');
    };
    if (!props.uri)
        return null;
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-mbox-spotify' }, { children: (0, jsx_dev_runtime_1.jsxDEV)("iframe", { src: 'https://open.spotify.com/embed?' + toUrl(), width: width, height: height, frameBorder: '0', allowTransparency: true }, void 0, false, { fileName: _jsxFileName, lineNumber: 25, columnNumber: 7 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 23, columnNumber: 11 }, _this));
};
exports.default = SpotifyMessage;
//# sourceMappingURL=SpotifyMessage.js.map