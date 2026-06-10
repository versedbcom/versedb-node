# ListAllStoryArcsWithOptionalSearchRequest

## Example Usage

```typescript
import { ListAllStoryArcsWithOptionalSearchRequest } from "@versedbcom/sdk/models/operations";

let value: ListAllStoryArcsWithOptionalSearchRequest = {
  q: "civil war",
  status: "ended",
  type: "crossover_event",
  limit: 20,
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `q`                                  | *string*                             | :heavy_minus_sign:                   | Search by story arc name.            | civil war                            |
| `status`                             | *string*                             | :heavy_minus_sign:                   | Filter by status.                    | ended                                |
| `type`                               | *string*                             | :heavy_minus_sign:                   | Filter by type.                      | crossover_event                      |
| `limit`                              | *number*                             | :heavy_minus_sign:                   | Number of results per page (max 50). | 20                                   |