# ListUniversesResponseBody

Success

## Example Usage

```typescript
import { ListUniversesResponseBody } from "@versedbcom/sdk/models/operations";

let value: ListUniversesResponseBody = {
  data: [
    {
      id: 1,
      name: "Marvel Universe (616)",
    },
  ],
  meta: {
    currentPage: 1,
    lastPage: 3,
    perPage: 20,
    total: 42,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `data`                                                                           | [operations.ListUniversesData](../../models/operations/list-universes-data.md)[] | :heavy_minus_sign:                                                               | N/A                                                                              | [<br/>{<br/>"id": 1,<br/>"name": "Marvel Universe (616)"<br/>}<br/>]             |
| `meta`                                                                           | [operations.ListUniversesMeta](../../models/operations/list-universes-meta.md)   | :heavy_minus_sign:                                                               | N/A                                                                              |                                                                                  |