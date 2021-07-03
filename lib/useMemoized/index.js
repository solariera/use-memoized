"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMemoized = void 0;
const useObjectMemo_1 = require("../useObjectMemo");
/**
 * useMemoized
 * @param {T} obj
 * @param {unknown[]} dependencies
 */
const useMemoized = (obj, dependencies) => {
    if (!dependencies)
        return useObjectMemo_1.useObjectMemo(() => obj, [obj]);
    return useObjectMemo_1.useObjectMemo(() => obj, dependencies);
};
exports.useMemoized = useMemoized;
