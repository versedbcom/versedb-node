# FollowUpdatesResponseBody

Success

## Example Usage

```typescript
import { FollowUpdatesResponseBody } from "@versedbcom/sdk/models/operations";

let value: FollowUpdatesResponseBody = {
  data: [
    {
      id: 5432,
      issueNumber: "26",
      releaseDate: "2026-03-04",
      series: {
        id: 123,
        name: "X-Men",
        startYear: 2024,
      },
      followContext: "New in X-Men",
      followType: "title",
    },
  ],
  meta: {
    days: 30,
    totalFollows: 12,
  },
};
```

## Fields

| Field                                                                                                                                                                                                              | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        | Example                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                                                                                                                             | [operations.FollowUpdatesData](../../models/operations/follow-updates-data.md)[]                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                | [<br/>{<br/>"id": 5432,<br/>"issue_number": "26",<br/>"cover_url": "...",<br/>"release_date": "2026-03-04",<br/>"series": {<br/>"id": 123,<br/>"name": "X-Men",<br/>"start_year": 2024<br/>},<br/>"follow_context": "New in X-Men",<br/>"follow_type": "title"<br/>}<br/>] |
| `meta`                                                                                                                                                                                                             | [operations.FollowUpdatesMeta](../../models/operations/follow-updates-meta.md)                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                |                                                                                                                                                                                                                    |