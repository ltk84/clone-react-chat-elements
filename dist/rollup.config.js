"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var rollup_plugin_babel_1 = __importDefault(require("rollup-plugin-babel"));
var plugin_node_resolve_1 = __importDefault(require("@rollup/plugin-node-resolve"));
var rollup_plugin_peer_deps_external_1 = __importDefault(require("rollup-plugin-peer-deps-external"));
var rollup_plugin_postcss_1 = __importDefault(require("rollup-plugin-postcss"));
var rollup_plugin_terser_1 = require("rollup-plugin-terser");
var plugin_commonjs_1 = __importDefault(require("@rollup/plugin-commonjs"));
var path_1 = __importDefault(require("path"));
exports.default = [
    {
        input: './build/index.js',
        output: [
            {
                file: 'dist/main.js',
                format: 'cjs',
            },
            {
                file: 'dist/main.es.js',
                format: 'es',
                exports: 'named',
            },
        ],
        plugins: [
            (0, rollup_plugin_postcss_1.default)({
                plugins: [],
                minimize: true,
                extract: path_1.default.resolve('dist/main.css'),
            }),
            (0, rollup_plugin_babel_1.default)({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react'],
            }),
            (0, plugin_commonjs_1.default)(),
            (0, rollup_plugin_peer_deps_external_1.default)(),
            (0, plugin_node_resolve_1.default)(),
            (0, rollup_plugin_terser_1.terser)(),
        ],
    },
];
//# sourceMappingURL=rollup.config.js.map