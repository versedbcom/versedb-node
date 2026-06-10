# SaveListResponse

## Example Usage

```typescript
import { SaveListResponse } from "@versedbcom/sdk/models/operations";

let value: SaveListResponse = {
  headers: {},
  result: {
    message: "List is already saved.",
    saved: true,
  },
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `headers`                           | Record<string, *string*[]>          | :heavy_check_mark:                  | N/A                                 |
| `result`                            | *operations.SaveListResponseResult* | :heavy_check_mark:                  | N/A                                 |