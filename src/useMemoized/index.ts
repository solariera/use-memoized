import { useObjectMemo } from '../useObjectMemo';

/**
 * useMemoized
 * @param {T} obj
 * @param {unknown[]} dependencies
 */
export const useMemoized = <T>(obj: T, dependencies?: unknown[]): T => {
  if (!dependencies) return useObjectMemo(() => obj, [obj]);
  return useObjectMemo(() => obj, dependencies);
};
