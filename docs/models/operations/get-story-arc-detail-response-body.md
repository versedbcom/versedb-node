# GetStoryArcDetailResponseBody

Success

## Example Usage

```typescript
import { GetStoryArcDetailResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetStoryArcDetailResponseBody = {
  data: {
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
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `data`                                                                                   | [operations.GetStoryArcDetailData](../../models/operations/get-story-arc-detail-data.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |