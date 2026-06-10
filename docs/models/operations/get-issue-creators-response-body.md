# GetIssueCreatorsResponseBody

Success

## Example Usage

```typescript
import { GetIssueCreatorsResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetIssueCreatorsResponseBody = {
  data: [
    {
      id: 789,
      name: "Nick Spencer",
      role: {
        id: 1,
        name: "Writer",
      },
    },
    {
      id: 790,
      name: "Ryan Ottley",
      role: {
        id: 2,
        name: "Artist",
      },
    },
  ],
  meta: {
    currentPage: 1,
    lastPage: 1,
    perPage: 50,
    total: 8,
  },
};
```

## Fields

| Field                                                                                                                                                         | Type                                                                                                                                                          | Required                                                                                                                                                      | Description                                                                                                                                                   | Example                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                                        | [operations.GetIssueCreatorsData](../../models/operations/get-issue-creators-data.md)[]                                                                       | :heavy_minus_sign:                                                                                                                                            | N/A                                                                                                                                                           | [<br/>{<br/>"id": 789,<br/>"name": "Nick Spencer",<br/>"role": {<br/>"id": 1,<br/>"name": "Writer"<br/>}<br/>},<br/>{<br/>"id": 790,<br/>"name": "Ryan Ottley",<br/>"role": {<br/>"id": 2,<br/>"name": "Artist"<br/>}<br/>}<br/>] |
| `meta`                                                                                                                                                        | [operations.GetIssueCreatorsMeta](../../models/operations/get-issue-creators-meta.md)                                                                         | :heavy_minus_sign:                                                                                                                                            | N/A                                                                                                                                                           |                                                                                                                                                               |