# Activity

## Example Usage

```typescript
import { Activity } from "@versedbcom/sdk/models/operations";

let value: Activity = {
  type: "review",
  title: "Reviewed",
  entityType: "Issue",
  entityName: "The Amazing Spider-Man #1",
  entityId: 5432,
  timestamp: "2024-06-01T18:00:00Z",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               | Example                   |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `type`                    | *string*                  | :heavy_minus_sign:        | N/A                       | review                    |
| `title`                   | *string*                  | :heavy_minus_sign:        | N/A                       | Reviewed                  |
| `entityType`              | *string*                  | :heavy_minus_sign:        | N/A                       | Issue                     |
| `entityName`              | *string*                  | :heavy_minus_sign:        | N/A                       | The Amazing Spider-Man #1 |
| `entityId`                | *number*                  | :heavy_minus_sign:        | N/A                       | 5432                      |
| `timestamp`               | *string*                  | :heavy_minus_sign:        | N/A                       | 2024-06-01T18:00:00Z      |