# GetCreatorsBlogPostsRequest

## Example Usage

```typescript
import { GetCreatorsBlogPostsRequest } from "@versedbcom/sdk/models/operations";

let value: GetCreatorsBlogPostsRequest = {
  creatorId: 789,
  limit: 20,
  page: 1,
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           | Example                                               |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `creatorId`                                           | *number*                                              | :heavy_check_mark:                                    | The creator ID.                                       | 789                                                   |
| `limit`                                               | *number*                                              | :heavy_minus_sign:                                    | Results per page (max 50).                            | 20                                                    |
| `page`                                                | *number*                                              | :heavy_minus_sign:                                    | Page number; meta.last_page says where the list ends. | 1                                                     |