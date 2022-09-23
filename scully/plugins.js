"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myPlugin = void 0;
const scully_1 = require("@scullyio/scully");
exports.myPlugin = 'myPlugin';
// eslint-disable-next-line arrow-body-style
const myFunctionPlugin = async (html) => {
    return html;
};
const validator = async () => [];
(0, scully_1.registerPlugin)('render', exports.myPlugin, myFunctionPlugin, validator);
//# sourceMappingURL=plugins.js.map