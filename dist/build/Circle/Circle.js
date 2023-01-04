"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
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
    return (0, jsx_runtime_1.jsx)("div", { className: className, ref: node });
};
exports.default = ProgressCircle;
//# sourceMappingURL=Circle.js.map