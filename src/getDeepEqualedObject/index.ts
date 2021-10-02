import { useRef } from 'react';
import equal from 'fast-deep-equal/react';

/**
 * getDeepEqualedObject
 * useEffect, useCallback, useMemoの依存配列に渡す値がobject/arrayの場合、
 * 内容が同じでも更新判定されてしまうので、deep equalチェックをして更新がない
 * 場合は、値をそのまま返す。
 * @param {T} obj
 */
export const getDeepEqualedObject = <T>(obj: T): T => {
  // typeがobject(arrayもobject)以外の場合は関係ないのでそのまま返す
  if (typeof obj !== 'object') return obj;

  // 引数のrefを生成する
  const ref = useRef(obj);

  // deep equalチェックして不一致なら引数をそのままカレントに格納する
  if (!equal(ref.current, obj)) ref.current = obj;

  // 一致している場合はカレントをそのまま返す
  return ref.current;
};
