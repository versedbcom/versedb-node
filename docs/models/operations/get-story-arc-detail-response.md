# GetStoryArcDetailResponse

## Example Usage

```typescript
import { GetStoryArcDetailResponse } from "@versedbcom/sdk/models/operations";

let value: GetStoryArcDetailResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [],
  },
  result: {
    data: {
      id: 24,
      name: "The Night Gwen Stacy Died",
      slug: "the-night-gwen-stacy-died",
      type: "main_story",
      status: "ended",
      imageUrl: "https://...-cover_md.webp",
      images: {
        coverSm: "https://...-cover_sm.webp",
        coverMd: "https://...-cover_md.webp",
        coverLg: "https://...-cover_lg.webp",
      },
      primaryUniverseId: 1,
      issuesCount: 102,
      charactersCount: 87,
      primaryUniverse: {
        id: 1,
        name: "Earth-616",
      },
      universes: [],
      startIssue: {
        id: 5432,
        name: "Civil War #1",
        slug: "civil-war-1",
        issueNumber: "1",
        seriesId: 412,
        coverUrl: "https://...-cover_md.webp",
        images: null,
        series: {
          id: 412,
          name: "Civil War",
          slug: "civil-war-2006",
          startYear: 2006,
        },
      },
      endIssue: {
        id: 5432,
        name: "Civil War #1",
        slug: "civil-war-1",
        issueNumber: "1",
        seriesId: 412,
        coverUrl: "https://...-cover_md.webp",
        images: {
          thumb: "https://...-thumb.webp",
          coverSm: "https://...-cover_sm.webp",
          coverMd: "https://...-cover_md.webp",
          coverLg: "https://...-cover_lg.webp",
        },
        series: {
          id: 412,
          name: "Civil War",
          slug: "civil-war-2006",
          startYear: 2006,
        },
      },
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
  },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                 | Record<string, *string*[]>                                                                                | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `result`                                                                                                  | [operations.GetStoryArcDetailResponseBody](../../models/operations/get-story-arc-detail-response-body.md) | :heavy_check_mark:                                                                                        | N/A                                                                                                       |