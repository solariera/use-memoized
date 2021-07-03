import { useMemo } from 'react';
import { getDeepEqualedObject } from '../getDeepEqualedObject';

/**
 * useObjectMemo
 * @param {T} obj
 * @param {unknown[]} dependencies
 */
export const useObjectMemo = <T>(obj: () => T, dependencies: unknown[]): T => {
  return getDeepEqualedObject(useMemo(obj, dependencies));
};
