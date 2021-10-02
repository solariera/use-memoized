# useMemoized / React hook

[![npm](https://img.shields.io/npm/v/@solariera/use-memoized)](https://www.npmjs.com/package/@solariera/use-memoized)
[![npm](https://img.shields.io/npm/dw/@solariera/use-memoized)](https://www.npmjs.com/package/@solariera/use-memoized)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@solariera/use-memoized)](https://bundlephobia.com/result?p=@solariera/use-memoized)

This is npm package template

## 1. Usage

### 1-1. Installation

```console
# npm
npm install @solariera/use-memoized
```

```console
# yarn
yarn add @solariera/use-memoized
```

### 1-2. Basic Usage

```typescript
import { useObjectMemo, useMemoized } from '@solariera/use-memoized';

/** Same use as useMemo */
const frameProps: FrameProps = useObjectMemo(() => frameProps, []);

/** Simple usage when you know object type */
const buttonProps: FrameProps = useMemoized({ ...frameProps, onPress });
```
