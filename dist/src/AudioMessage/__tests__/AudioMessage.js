"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/storage/projects/Collaborative IDE/react-chat-elements/src/AudioMessage/__tests__/AudioMessage.js";
var react_1 = __importStar(require("react"));
var enzyme_1 = require("enzyme");
var enzyme_to_json_1 = __importDefault(require("enzyme-to-json"));
var AudioMessage_1 = __importDefault(require("../AudioMessage"));
describe('AudioMessage component', function () {
    it('should render without issues', function () {
        var component = (0, enzyme_1.shallow)((0, jsx_dev_runtime_1.jsxDEV)(AudioMessage_1.default, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 8, columnNumber: 31 }, _this));
        expect(component.length).toBe(1);
        expect((0, enzyme_to_json_1.default)(component)).toMatchSnapshot();
    });
});
//# sourceMappingURL=AudioMessage.js.map