# AddIssueToCollectionResponseBody

Added

## Example Usage

```typescript
import { AddIssueToCollectionResponseBody } from "@versedbcom/sdk/models/operations";

let value: AddIssueToCollectionResponseBody = {
  data: {
    id: 1001,
    issue: {
      id: 5432,
      number: "1",
      title: "First Issue",
    },
    series: {
      id: 123,
      name: "Amazing Spider-Man",
    },
    variantId: null,
    condition: "NM",
    pricePaid: 4.99,
    notes: "First print, signed",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `data`                                                                                         | [operations.AddIssueToCollectionData](../../models/operations/add-issue-to-collection-data.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |