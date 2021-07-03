# useMemoized / React hook

## Usage

### 1. Import use-memoized

```typescript
import { useMemoized, useMemoizedObject } from '@solariera/use-memoized';
```

### 2. Same use as useMemo

```typescript
const frameProps: FrameProps = useMemoized(() => frameProps, []);
```

### 3. Simple usage when you know object type

```typescript
const buttonProps: FrameProps = useMemoizedObject({ ...frameProps, onPress });
```
