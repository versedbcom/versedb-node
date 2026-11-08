# GetStoryArcDetailData

## Example Usage

```typescript
import { GetStoryArcDetailData } from "@versedbcom/sdk/models/operations";

let value: GetStoryArcDetailData = {
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
  endIssue: null,
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
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                              | *number*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | 24                                                                                                                |
| `name`                                                                                                            | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | The Night Gwen Stacy Died                                                                                         |
| `slug`                                                                                                            | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | the-night-gwen-stacy-died                                                                                         |
| `type`                                                                                                            | *string*                                                                                                          | :heavy_check_mark:                                                                                                | main_story, side_story, tie_in_arc, mini_series_arc, crossover_event, prelude, epilogue or other.                 | main_story                                                                                                        |
| `status`                                                                                                          | *string*                                                                                                          | :heavy_check_mark:                                                                                                | active, ended, upcoming or cancelled.                                                                             | ended                                                                                                             |
| `imageUrl`                                                                                                        | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | https://...-cover_md.webp                                                                                         |
| `images`                                                                                                          | [operations.GetStoryArcDetailImages](../../models/operations/get-story-arc-detail-images.md)                      | :heavy_check_mark:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `primaryUniverseId`                                                                                               | *number*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | 1                                                                                                                 |
| `issuesCount`                                                                                                     | *number*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | 102                                                                                                               |
| `charactersCount`                                                                                                 | *number*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | 87                                                                                                                |
| `primaryUniverse`                                                                                                 | [operations.GetStoryArcDetailPrimaryUniverse](../../models/operations/get-story-arc-detail-primary-universe.md)   | :heavy_check_mark:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `universes`                                                                                                       | [operations.GetStoryArcDetailUniverse](../../models/operations/get-story-arc-detail-universe.md)[]                | :heavy_check_mark:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `startIssue`                                                                                                      | [operations.StartIssue](../../models/operations/start-issue.md)                                                   | :heavy_check_mark:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `endIssue`                                                                                                        | [operations.EndIssue](../../models/operations/end-issue.md)                                                       | :heavy_check_mark:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `nameI18n`                                                                                                        | Record<string, [operations.GetStoryArcDetailNameI18n](../../models/operations/get-story-arc-detail-name-i18n.md)> | :heavy_check_mark:                                                                                                | One name per language, keyed by BCP 47 tag.                                                                       | {<br/>"ja": {<br/>"value": "講談社",<br/>"reading": "こうだんしゃ",<br/>"source": "madb"<br/>}<br/>}                       |
| `aliasesI18n`                                                                                                     | Record<string, *string*[]>                                                                                        | :heavy_check_mark:                                                                                                | Alternative names per language.                                                                                   | {<br/>"en": [<br/>"Kodansha Comics"<br/>]<br/>}                                                                   |
| `originalLocale`                                                                                                  | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The language the story arc is from, a BCP 47 tag.                                                                 | en                                                                                                                |