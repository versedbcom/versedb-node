# GetStoryArcDetailData

## Example Usage

```typescript
import { GetStoryArcDetailData } from "@versedbcom/sdk/models/operations";

let value: GetStoryArcDetailData = {
  id: 16,
  name: "Civil War",
  slug: "civil-war",
  description: "A superhero registration act divides the Marvel Universe...",
  type: "crossover_event",
  status: "ended",
  imageUrl: "https://cdn.versedb.com/story_arcs/civil-war-md.jpg",
  images: {
    coverSm: "https://cdn.versedb.com/story_arcs/civil-war-sm.jpg",
    coverMd: "https://cdn.versedb.com/story_arcs/civil-war-md.jpg",
    coverLg: "https://cdn.versedb.com/story_arcs/civil-war-lg.jpg",
  },
  primaryUniverseId: 1,
  issuesCount: 102,
  charactersCount: 87,
  primaryUniverse: {
    id: 1,
    name: "Earth-616",
    description: "The primary continuity of the Marvel Universe.",
  },
  universes: [
    {
      id: 12,
      name: "Ultimate Universe",
    },
  ],
  startIssue: {
    id: 5432,
    name: "Civil War #1",
    slug: "civil-war-1",
    issueNumber: "1",
    seriesId: 412,
    coverUrl: "https://cdn.versedb.com/issues/civil-war-1-md.jpg",
    images: {
      coverMd: "https://cdn.versedb.com/issues/civil-war-1-md.jpg",
    },
    series: {
      id: 412,
      name: "Civil War",
      slug: "civil-war-2006",
      startYear: 2006,
    },
  },
  endIssue: {
    id: 5439,
    name: "Civil War #7",
    slug: "civil-war-7",
    issueNumber: "7",
    seriesId: 412,
    coverUrl: "https://cdn.versedb.com/issues/civil-war-7-md.jpg",
    images: {
      coverMd: "https://cdn.versedb.com/issues/civil-war-7-md.jpg",
    },
    series: {
      id: 412,
      name: "Civil War",
      slug: "civil-war-2006",
      startYear: 2006,
    },
  },
  lastEditedBy: {
    id: 42,
    name: "Jane Doe",
    username: "janedoe",
    avatarUrl: "https://cdn.versedb.com/users/janedoe-md.jpg",
  },
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                            | *number*                                                                                                        | :heavy_minus_sign:                                                                                              | N/A                                                                                                             | 16                                                                                                              |
| `name`                                                                                                          | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | N/A                                                                                                             | Civil War                                                                                                       |
| `slug`                                                                                                          | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | N/A                                                                                                             | civil-war                                                                                                       |
| `description`                                                                                                   | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | N/A                                                                                                             | A superhero registration act divides the Marvel Universe...                                                     |
| `type`                                                                                                          | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | N/A                                                                                                             | crossover_event                                                                                                 |
| `status`                                                                                                        | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | N/A                                                                                                             | ended                                                                                                           |
| `imageUrl`                                                                                                      | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | N/A                                                                                                             | https://cdn.versedb.com/story_arcs/civil-war-md.jpg                                                             |
| `images`                                                                                                        | [operations.GetStoryArcDetailImages](../../models/operations/get-story-arc-detail-images.md)                    | :heavy_minus_sign:                                                                                              | N/A                                                                                                             |                                                                                                                 |
| `primaryUniverseId`                                                                                             | *number*                                                                                                        | :heavy_minus_sign:                                                                                              | N/A                                                                                                             | 1                                                                                                               |
| `issuesCount`                                                                                                   | *number*                                                                                                        | :heavy_minus_sign:                                                                                              | N/A                                                                                                             | 102                                                                                                             |
| `charactersCount`                                                                                               | *number*                                                                                                        | :heavy_minus_sign:                                                                                              | N/A                                                                                                             | 87                                                                                                              |
| `primaryUniverse`                                                                                               | [operations.GetStoryArcDetailPrimaryUniverse](../../models/operations/get-story-arc-detail-primary-universe.md) | :heavy_minus_sign:                                                                                              | N/A                                                                                                             |                                                                                                                 |
| `universes`                                                                                                     | [operations.Universe](../../models/operations/universe.md)[]                                                    | :heavy_minus_sign:                                                                                              | N/A                                                                                                             | [<br/>{<br/>"id": 12,<br/>"name": "Ultimate Universe"<br/>}<br/>]                                               |
| `startIssue`                                                                                                    | [operations.StartIssue](../../models/operations/start-issue.md)                                                 | :heavy_minus_sign:                                                                                              | N/A                                                                                                             |                                                                                                                 |
| `endIssue`                                                                                                      | [operations.EndIssue](../../models/operations/end-issue.md)                                                     | :heavy_minus_sign:                                                                                              | N/A                                                                                                             |                                                                                                                 |
| `lastEditedBy`                                                                                                  | [operations.GetStoryArcDetailLastEditedBy](../../models/operations/get-story-arc-detail-last-edited-by.md)      | :heavy_minus_sign:                                                                                              | N/A                                                                                                             |                                                                                                                 |