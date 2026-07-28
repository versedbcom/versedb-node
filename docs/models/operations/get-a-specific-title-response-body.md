# GetASpecificTitleResponseBody

Success

## Example Usage

```typescript
import { GetASpecificTitleResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetASpecificTitleResponseBody = {
  data: {
    id: 12,
    name: "Batman",
    slug: "batman",
    description:
      "The continuing adventures of the Dark Knight across his many series.",
    startYear: 1939,
    endYear: null,
    status: "ongoing",
    type: "Series",
    imageUrl:
      "https://r2.versedb.com/uploads/titles/batman-12/batman-12-abc123-cover_md.webp",
    images: {
      coverSm:
        "https://r2.versedb.com/uploads/titles/batman-12/batman-12-abc123-cover_sm.webp",
      coverMd:
        "https://r2.versedb.com/uploads/titles/batman-12/batman-12-abc123-cover_md.webp",
      coverLg:
        "https://r2.versedb.com/uploads/titles/batman-12/batman-12-abc123-cover_lg.webp",
    },
    contentRatingLabel: "15+",
    minAge: 15,
    isNsfw: false,
    imprintId: null,
    seriesCount: 25,
    issuesCount: 1450,
    averageRating: 4.3,
    aliases: [
      "The Dark Knight",
      "The Caped Crusader",
    ],
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `data`                                                                                   | [operations.GetASpecificTitleData](../../models/operations/get-a-specific-title-data.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |