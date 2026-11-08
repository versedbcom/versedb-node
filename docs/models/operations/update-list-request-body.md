# UpdateListRequestBody

## Example Usage

```typescript
import { UpdateListRequestBody } from "@versedbcom/sdk/models/operations";

let value: UpdateListRequestBody = {
  title: "Updated Title",
  description: "Updated description",
  isRanked: false,
  isPrivate: true,
  status: "published",
  rules: {
    "version": 2,
    "match": {
      "all": [
        {
          "field": "launch_date",
          "op": "within_last",
          "value": {
            "count": 3,
            "unit": "months",
          },
        },
      ],
    },
    "sort": {
      "field": "launch_date",
      "direction": "desc",
    },
    "limit": 500,
  },
};
```

## Fields

| Field                                                                                                                                                                                                       | Type                                                                                                                                                                                                        | Required                                                                                                                                                                                                    | Description                                                                                                                                                                                                 | Example                                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`                                                                                                                                                                                                     | *string*                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                          | The name of the list (3 to 100 characters).                                                                                                                                                                 | Updated Title                                                                                                                                                                                               |
| `description`                                                                                                                                                                                               | *string*                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                          | The description (up to 2000 characters).                                                                                                                                                                    | Updated description                                                                                                                                                                                         |
| `isRanked`                                                                                                                                                                                                  | *boolean*                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                          | Whether items are ranked.                                                                                                                                                                                   | false                                                                                                                                                                                                       |
| `isPrivate`                                                                                                                                                                                                 | *boolean*                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                          | Whether the list is private. Non-wishlist private lists require a Pro subscription.                                                                                                                         | true                                                                                                                                                                                                        |
| `status`                                                                                                                                                                                                    | [operations.Status](../../models/operations/status.md)                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                          | The list status.                                                                                                                                                                                            | published                                                                                                                                                                                                   |
| `rules`                                                                                                                                                                                                     | Record<string, *any*>                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                          | Replaces the smart-list rule. Only a list built from a rule takes one, and the list is rebuilt from the new rule unless its updates are paused.                                                             | {<br/>"version": 2,<br/>"match": {<br/>"all": [<br/>{<br/>"field": "launch_date",<br/>"op": "within_last",<br/>"value": {<br/>"count": 3,<br/>"unit": "months"<br/>}<br/>}<br/>]<br/>},<br/>"sort": {<br/>"field": "launch_date",<br/>"direction": "desc"<br/>},<br/>"limit": 500<br/>} |