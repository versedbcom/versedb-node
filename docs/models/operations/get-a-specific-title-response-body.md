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
    startYear: 1939,
    endYear: 2011,
    status: "ongoing",
    type: "Series",
    imageUrl: "https://...-cover_md.webp",
    images: {
      coverSm: "https://...-cover_sm.webp",
      coverMd: "https://...-cover_md.webp",
      coverLg: "https://...-cover_lg.webp",
    },
    contentRatingLabel: "15+",
    minAge: 15,
    isNsfw: true,
    imprintId: 3,
    seriesCount: 25,
    issuesCount: 1450,
    averageRating: "4.30",
    aliases: [
      "The Dark Knight",
    ],
    nameI18n: {
      "ja": {
        value: "講談社",
        source: "madb",
        reading: "こうだんしゃ",
      },
    },
    aliasesI18n: {
      "en": [
        "Kodansha Comics",
      ],
    },
    originalLocale: "en",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `data`                                                                                   | [operations.GetASpecificTitleData](../../models/operations/get-a-specific-title-data.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |