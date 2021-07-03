"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useObjectMemo = void 0;
const react_1 = require("react");
const getDeepEqualedObject_1 = require("../getDeepEqualedObject");
/**
 * useObjectMemo
 * @param {T} obj
 * @param {unknown[]} dependencies
 */
const useObjectMemo = (obj, dependencies) => {
    return getDeepEqualedObject_1.getDeepEqualedObject(react_1.useMemo(obj, dependencies));
};
exports.useObjectMemo = useObjectMemo;
