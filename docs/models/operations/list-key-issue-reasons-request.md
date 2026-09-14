# ListKeyIssueReasonsRequest

## Example Usage

```typescript
import { ListKeyIssueReasonsRequest } from "@versedbcom/sdk/models/operations";

let value: ListKeyIssueReasonsRequest = {
  category: "appearance",
  q: "1st appearance",
  limit: 12,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `category`                                                       | *string*                                                         | :heavy_minus_sign:                                               | Filter by category (appearance, story, creator, market, media).  | appearance                                                       |
| `q`                                                              | *string*                                                         | :heavy_minus_sign:                                               | Match reasons whose name contains this.                          | 1st appearance                                                   |
| `limit`                                                          | *number*                                                         | :heavy_minus_sign:                                               | Cap the number returned (1-100). Applied only when q is present. | 12                                                               |