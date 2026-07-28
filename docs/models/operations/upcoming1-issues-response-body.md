# Upcoming1IssuesResponseBody

Success

## Example Usage

```typescript
import { Upcoming1IssuesResponseBody } from "@versedbcom/sdk/models/operations";

let value: Upcoming1IssuesResponseBody = {
  data: [
    {
      id: 9876,
      number: "1",
      title: "New Series #1",
      releaseDate: "2024-02-15",
      series: {
        id: 456,
        name: "New Series",
        status: "ongoing",
        publicationType: "regular",
      },
    },
  ],
  meta: {
    lookaheadDays: 60,
    windowStart: "2024-01-15",
    windowEnd: "2024-03-15",
  },
};
```

## Fields

| Field                                                                                                                                                                                                            | Type                                                                                                                                                                                                             | Required                                                                                                                                                                                                         | Description                                                                                                                                                                                                      | Example                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                                                                                           | [operations.Upcoming1IssuesData](../../models/operations/upcoming1-issues-data.md)[]                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                               | N/A                                                                                                                                                                                                              | [<br/>{<br/>"id": 9876,<br/>"number": "1",<br/>"title": "New Series #1",<br/>"cover_url": "...",<br/>"release_date": "2024-02-15",<br/>"series": {<br/>"id": 456,<br/>"name": "New Series",<br/>"status": "ongoing",<br/>"publication_type": "regular"<br/>}<br/>}<br/>] |
| `meta`                                                                                                                                                                                                           | [operations.Upcoming1IssuesMeta](../../models/operations/upcoming1-issues-meta.md)                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                               | N/A                                                                                                                                                                                                              |                                                                                                                                                                                                                  |