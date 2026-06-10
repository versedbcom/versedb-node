# ListTitlesData

## Example Usage

```typescript
import { ListTitlesData } from "@versedbcom/sdk/models/operations";

let value: ListTitlesData = {
  id: 12,
  name: "Batman",
  slug: "batman",
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
  averageRating: 4.3,
  seriesCount: 25,
  issuesCount: 1450,
  ageRating: "Teen",
  isNsfw: false,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 12                                                                             |
| `name`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | Batman                                                                         |
| `slug`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | batman                                                                         |
| `startYear`                                                                    | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 1939                                                                           |
| `endYear`                                                                      | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | null                                                                           |
| `status`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | ongoing                                                                        |
| `type`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | Series                                                                         |
| `imageUrl`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | https://r2.versedb.com/uploads/titles/batman-12/batman-12-abc123-cover_md.webp |
| `images`                                                                       | [operations.ListTitlesImages](../../models/operations/list-titles-images.md)   | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `averageRating`                                                                | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 4.3                                                                            |
| `seriesCount`                                                                  | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 25                                                                             |
| `issuesCount`                                                                  | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 1450                                                                           |
| `ageRating`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | Teen                                                                           |
| `isNsfw`                                                                       | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            | false                                                                          |