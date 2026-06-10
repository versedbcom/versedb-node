# GetStoryArcsForASpecificIssueData

## Example Usage

```typescript
import { GetStoryArcsForASpecificIssueData } from "@versedbcom/sdk/models/operations";

let value: GetStoryArcsForASpecificIssueData = {
  id: 24,
  name: "The Night Gwen Stacy Died",
  slug: "the-night-gwen-stacy-died",
  type: "main_story",
  status: "ended",
  imageUrl:
    "https://cdn.versedb.com/story_arcs/the-night-gwen-stacy-died-md.jpg",
  images: {
    coverSm:
      "https://cdn.versedb.com/story_arcs/the-night-gwen-stacy-died-sm.jpg",
    coverMd:
      "https://cdn.versedb.com/story_arcs/the-night-gwen-stacy-died-md.jpg",
    coverLg:
      "https://cdn.versedb.com/story_arcs/the-night-gwen-stacy-died-lg.jpg",
  },
  issuesCount: 2,
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             | Example                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                    | *number*                                                                                                                | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     | 24                                                                                                                      |
| `name`                                                                                                                  | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     | The Night Gwen Stacy Died                                                                                               |
| `slug`                                                                                                                  | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     | the-night-gwen-stacy-died                                                                                               |
| `type`                                                                                                                  | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     | main_story                                                                                                              |
| `status`                                                                                                                | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     | ended                                                                                                                   |
| `imageUrl`                                                                                                              | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     | https://cdn.versedb.com/story_arcs/the-night-gwen-stacy-died-md.jpg                                                     |
| `images`                                                                                                                | [operations.GetStoryArcsForASpecificIssueImages](../../models/operations/get-story-arcs-for-a-specific-issue-images.md) | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |                                                                                                                         |
| `issuesCount`                                                                                                           | *number*                                                                                                                | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     | 2                                                                                                                       |