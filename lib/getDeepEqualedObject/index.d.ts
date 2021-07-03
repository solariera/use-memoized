/**
 * getDeepEqualedObject
 * useEffect, useCallback, useMemoの依存配列に渡す値がobject/arrayの場合、
 * 内容が同じでも更新判定されてしまうので、deep equalチェックをして更新がない
 * 場合は、値をそのまま返す。
 * @param {T} obj
 */
export declare const getDeepEqualedObject: <T>(obj: T) => T;
