# GetStoryArcsForASpecificUniverseRequest

## Example Usage

```typescript
import { GetStoryArcsForASpecificUniverseRequest } from "@versedbcom/sdk/models/operations";

let value: GetStoryArcsForASpecificUniverseRequest = {
  universeId: 16,
  q: "batman",
  limit: 20,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `universeId`                                           | *number*                                               | :heavy_check_mark:                                     | The ID of the universe.                                | 16                                                     |
| `q`                                                    | *string*                                               | :heavy_minus_sign:                                     | Optional case-insensitive search within these results. | batman                                                 |
| `limit`                                                | *number*                                               | :heavy_minus_sign:                                     | Number of results per page (max 50).                   | 20                                                     |