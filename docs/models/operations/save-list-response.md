# SaveListResponse

## Example Usage

```typescript
import { SaveListResponse } from "@versedbcom/sdk/models/operations";

let value: SaveListResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    message: "List saved successfully.",
    saved: true,
    savesCount: 90,
  },
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `headers`                           | Record<string, *string*[]>          | :heavy_check_mark:                  | N/A                                 |
| `result`                            | *operations.SaveListResponseResult* | :heavy_check_mark:                  | N/A                                 |