# LookupByISBNStoryArc

## Example Usage

```typescript
import { LookupByISBNStoryArc } from "@versedbcom/sdk/models/operations";

let value: LookupByISBNStoryArc = {
  id: 24,
  name: "Civil War",
  slug: "civil-war",
  imageUrl: "https://...-cover_md.webp",
  images: {
    coverSm: "https://...-cover_sm.webp",
    coverMd: "https://...-cover_md.webp",
    coverLg: "https://...-cover_lg.webp",
  },
  sortOrder: 1,
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `id`                                                                                                | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 | 24                                                                                                  |
| `name`                                                                                              | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 | Civil War                                                                                           |
| `slug`                                                                                              | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 | civil-war                                                                                           |
| `imageUrl`                                                                                          | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 | https://...-cover_md.webp                                                                           |
| `images`                                                                                            | [operations.LookupByISBNStoryArcImages](../../models/operations/lookup-by-isbn-story-arc-images.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |                                                                                                     |
| `sortOrder`                                                                                         | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 | 1                                                                                                   |