# ViewYourUnfinishedComicsFromTheVerseDBReaderResponseBody

Success

## Example Usage

```typescript
import { ViewYourUnfinishedComicsFromTheVerseDBReaderResponseBody } from "@versedbcom/sdk/models/operations";

let value: ViewYourUnfinishedComicsFromTheVerseDBReaderResponseBody = {
  data: [
    {
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
    },
  ],
  meta: {
    currentPage: 1,
    lastPage: 1,
    perPage: 12,
    total: 0,
  },
};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                                | [operations.ViewYourUnfinishedComicsFromTheVerseDBReaderData](../../models/operations/view-your-unfinished-comics-from-the-verse-db-reader-data.md)[] | :heavy_check_mark:                                                                                                                                    | N/A                                                                                                                                                   |
| `meta`                                                                                                                                                | [operations.ViewYourUnfinishedComicsFromTheVerseDBReaderMeta](../../models/operations/view-your-unfinished-comics-from-the-verse-db-reader-meta.md)   | :heavy_check_mark:                                                                                                                                    | N/A                                                                                                                                                   |