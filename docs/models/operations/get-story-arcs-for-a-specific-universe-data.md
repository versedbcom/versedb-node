# GetStoryArcsForASpecificUniverseData

## Example Usage

```typescript
import { GetStoryArcsForASpecificUniverseData } from "@versedbcom/sdk/models/operations";

let value: GetStoryArcsForASpecificUniverseData = {
  id: 88,
  name: "Crisis on Infinite Earths",
  slug: "crisis-on-infinite-earths",
  type: "crossover_event",
  status: "ended",
  imageUrl:
    "https://cdn.versedb.com/story_arcs/crisis-on-infinite-earths-md.jpg",
  images: {
    coverSm:
      "https://cdn.versedb.com/story_arcs/crisis-on-infinite-earths-sm.jpg",
    coverMd:
      "https://cdn.versedb.com/story_arcs/crisis-on-infinite-earths-md.jpg",
    coverLg:
      "https://cdn.versedb.com/story_arcs/crisis-on-infinite-earths-lg.jpg",
  },
  issuesCount: 12,
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   | Example                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                          | *number*                                                                                                                      | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           | 88                                                                                                                            |
| `name`                                                                                                                        | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           | Crisis on Infinite Earths                                                                                                     |
| `slug`                                                                                                                        | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           | crisis-on-infinite-earths                                                                                                     |
| `type`                                                                                                                        | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           | crossover_event                                                                                                               |
| `status`                                                                                                                      | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           | ended                                                                                                                         |
| `imageUrl`                                                                                                                    | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           | https://cdn.versedb.com/story_arcs/crisis-on-infinite-earths-md.jpg                                                           |
| `images`                                                                                                                      | [operations.GetStoryArcsForASpecificUniverseImages](../../models/operations/get-story-arcs-for-a-specific-universe-images.md) | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           |                                                                                                                               |
| `issuesCount`                                                                                                                 | *number*                                                                                                                      | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           | 12                                                                                                                            |