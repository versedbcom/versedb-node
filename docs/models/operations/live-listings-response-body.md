# LiveListingsResponseBody

Success

## Example Usage

```typescript
import { LiveListingsResponseBody } from "@versedbcom/sdk/models/operations";

let value: LiveListingsResponseBody = {
  data: [
    {
      source: "ebay",
      title: "Amazing Spider-Man #1 CGC 9.8",
      price: 150,
    },
  ],
  meta: {
    issueId: 5432,
    total: 15,
    cached: true,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `data`                                                                                         | [operations.LiveListingsData](../../models/operations/live-listings-data.md)[]                 | :heavy_minus_sign:                                                                             | N/A                                                                                            | [<br/>{<br/>"source": "ebay",<br/>"title": "Amazing Spider-Man #1 CGC 9.8",<br/>"price": 150,<br/>"url": "..."<br/>}<br/>] |
| `meta`                                                                                         | [operations.LiveListingsMeta](../../models/operations/live-listings-meta.md)                   | :heavy_minus_sign:                                                                             | N/A                                                                                            |                                                                                                |