# ViewYourUnfinishedComicsFromTheVerseDBReaderData

## Example Usage

```typescript
import { ViewYourUnfinishedComicsFromTheVerseDBReaderData } from "@versedbcom/sdk/models/operations";

let value: ViewYourUnfinishedComicsFromTheVerseDBReaderData = {
  issue: {
    id: 5678,
    name: "The Beginning",
    slug: "saga-1-5678",
    issueNumber: "1",
    coverUrl: "https://...-cover_lg.webp",
    isNsfw: false,
    releaseDate: "2012-03-14",
    series: {
      name: "Saga",
      publisherName: "Image Comics",
    },
  },
  percent: 42.5,
};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           | Example                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `issue`                                                                                                                                               | [operations.ViewYourUnfinishedComicsFromTheVerseDBReaderIssue](../../models/operations/view-your-unfinished-comics-from-the-verse-db-reader-issue.md) | :heavy_check_mark:                                                                                                                                    | N/A                                                                                                                                                   |                                                                                                                                                       |
| `percent`                                                                                                                                             | *number*                                                                                                                                              | :heavy_check_mark:                                                                                                                                    | N/A                                                                                                                                                   | 42.5                                                                                                                                                  |