"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDeepEqualedObject = void 0;
const react_1 = require("react");
const react_2 = __importDefault(require("fast-deep-equal/react"));
/**
 * getDeepEqualedObject
 * useEffect, useCallback, useMemoの依存配列に渡す値がobject/arrayの場合、
 * 内容が同じでも更新判定されてしまうので、deep equalチェックをして更新がない
 * 場合は、値をそのまま返す。
 * @param obj
 */
const getDeepEqualedObject = (obj) => {
    // typeがobject(arrayもobject)以外の場合は関係ないのでそのまま返す
    if (typeof obj !== 'object')
        return obj;
    // 引数のrefを生成する
    const ref = react_1.useRef(obj);
    // deep equalチェックして不一致なら引数をそのままカレントに格納する
    if (!react_2.default(ref.current, obj))
        ref.current = obj;
    // 一致している場合はカレントをそのまま返す
    return ref.current;
};
exports.getDeepEqualedObject = getDeepEqualedObject;
