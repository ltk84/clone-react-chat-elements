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
var _jsxFileName = "D:/storage/projects/Collaborative IDE/react-chat-elements/src/Avatar/Avatar.tsx";
var react_1 = require("react");
require("./Avatar.css");
var classnames_1 = __importDefault(require("classnames"));
var Avatar = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'default' : _b, _c = _a.size, size = _c === void 0 ? 'default' : _c, _d = _a.lazyLoadingImage, lazyLoadingImage = _d === void 0 ? undefined : _d, props = __rest(_a, ["type", "size", "lazyLoadingImage"]);
    var loadedAvatars = [];
    var loading = false;
    var src = props.src;
    var isLazyImage = false;
    (0, react_1.useEffect)(function () {
        if (lazyLoadingImage) {
            isLazyImage = true;
            if (!isLoaded(src)) {
                src = lazyLoadingImage;
                if (!loading) {
                    requestImage(props.src);
                }
            }
            else {
                isLazyImage = false;
            }
        }
    }, []);
    var isLoaded = function (src) {
        return loadedAvatars.indexOf(src) !== -1;
    };
    var requestImage = function (src) {
        loading = true;
        var loaded = function () {
            loadedAvatars.push(src);
            loading = false;
        };
        var img = document.createElement('img');
        img.src = src;
        img.onload = loaded;
        img.onerror = loaded;
    };
    var stringToColour = function (str) {
        var hash = 0;
        for (var i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        var colour = '#';
        for (var i = 0; i < 3; i++) {
            var value = (hash >> (i * 8)) & 0xff;
            value = (value % 150) + 50;
            colour += ('00' + value.toString(16)).substr(-2);
        }
        return colour;
    };
    return (
    // @ts-ignore
    (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: (0, classnames_1.default)('rce-avatar-container', type, size, props.className) }, { children: [props.letterItem ? ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: 'rce-avatar-letter-background', style: { backgroundColor: stringToColour(props.letterItem.id) } }, { children: (0, jsx_dev_runtime_1.jsxDEV)("span", __assign({ className: 'rce-avatar-letter' }, { children: props.letterItem.letter }), void 0, false, { fileName: _jsxFileName, lineNumber: 65, columnNumber: 11 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 63, columnNumber: 28 }, _this)) : ((0, jsx_dev_runtime_1.jsxDEV)("img", { alt: props.alt, src: src, onError: props.onError, className: (0, classnames_1.default)('rce-avatar', { 'rce-avatar-lazy': isLazyImage }) }, void 0, false, { fileName: _jsxFileName, lineNumber: 67, columnNumber: 12 }, _this)), props.sideElement] }), void 0, true, { fileName: _jsxFileName, lineNumber: 60, columnNumber: 11 }, _this));
};
exports.default = Avatar;
//# sourceMappingURL=Avatar.js.map