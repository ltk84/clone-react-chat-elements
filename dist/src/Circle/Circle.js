"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/storage/projects/Collaborative IDE/react-chat-elements/src/Circle/Circle.tsx";
var react_1 = require("react");
var progressbar_js_1 = require("progressbar.js");
var wrapper;
var ProgressCircle = function (_a) {
    var animate = _a.animate, progressOptions = _a.progressOptions, className = _a.className;
    var bar = (0, react_1.useMemo)(function () {
        wrapper = document.createElement('div');
        return new progressbar_js_1.Circle(wrapper, progressOptions);
    }, []);
    var node = (0, react_1.useCallback)(function (node) {
        if (node) {
            node.appendChild(wrapper);
        }
    }, []);
    (0, react_1.useEffect)(function () {
        bar.animate(animate);
    }, [animate, bar]);
    return (0, jsx_dev_runtime_1.jsxDEV)("div", { className: className, ref: node }, void 0, false, { fileName: _jsxFileName, lineNumber: 22, columnNumber: 9 }, _this);
};
exports.default = ProgressCircle;
//# sourceMappingURL=Circle.js.map