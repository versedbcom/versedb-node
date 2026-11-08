# Merge

## Example Usage

```typescript
import { Merge } from "@versedbcom/sdk/models/operations";

let value: Merge = {
  moved: 4,
  skippedDuplicates: 1,
  convertedToMixed: false,
  sourceDeleted: false,
};
```

## Fields

| Field               | Type                | Required            | Description         | Example             |
| ------------------- | ------------------- | ------------------- | ------------------- | ------------------- |
| `moved`             | *number*            | :heavy_check_mark:  | N/A                 | 4                   |
| `skippedDuplicates` | *number*            | :heavy_check_mark:  | N/A                 | 1                   |
| `convertedToMixed`  | *boolean*           | :heavy_check_mark:  | N/A                 | false               |
| `sourceDeleted`     | *boolean*           | :heavy_check_mark:  | N/A                 | false               |