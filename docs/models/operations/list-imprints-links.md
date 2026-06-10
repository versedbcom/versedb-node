# ListImprintsLinks

## Example Usage

```typescript
import { ListImprintsLinks } from "@versedbcom/sdk/models/operations";

let value: ListImprintsLinks = {
  first: "http://localhost:8000/api/v1/imprints?page=1",
  last: "http://localhost:8000/api/v1/imprints?page=1",
  prev: null,
  next: null,
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  | Example                                      |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `first`                                      | *string*                                     | :heavy_minus_sign:                           | N/A                                          | http://localhost:8000/api/v1/imprints?page=1 |
| `last`                                       | *string*                                     | :heavy_minus_sign:                           | N/A                                          | http://localhost:8000/api/v1/imprints?page=1 |
| `prev`                                       | *string*                                     | :heavy_minus_sign:                           | N/A                                          | null                                         |
| `next`                                       | *string*                                     | :heavy_minus_sign:                           | N/A                                          | null                                         |