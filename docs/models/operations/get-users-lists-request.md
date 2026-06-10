# GetUsersListsRequest

## Example Usage

```typescript
import { GetUsersListsRequest } from "@versedbcom/sdk/models/operations";

let value: GetUsersListsRequest = {
  userId: 123,
  entityType: "issues",
  sort: "newest",
  limit: 20,
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   | Example                                       |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `userId`                                      | *number*                                      | :heavy_check_mark:                            | The user ID.                                  | 123                                           |
| `entityType`                                  | *string*                                      | :heavy_minus_sign:                            | Filter by entity type (issues, series, etc.). | issues                                        |
| `sort`                                        | *string*                                      | :heavy_minus_sign:                            | Sort order (newest, popular, most_saved).     | newest                                        |
| `limit`                                       | *number*                                      | :heavy_minus_sign:                            | Items per page (max 100).                     | 20                                            |