# GetASpecificTitleData

## Example Usage

```typescript
import { GetASpecificTitleData } from "@versedbcom/sdk/models/operations";

let value: GetASpecificTitleData = {
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
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          | 12                                                                                           |
| `name`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          | Batman                                                                                       |
| `slug`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          | batman                                                                                       |
| `description`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          | The continuing adventures of the Dark Knight across his many series.                         |
| `startYear`                                                                                  | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          | 1939                                                                                         |
| `endYear`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          | null                                                                                         |
| `status`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          | ongoing                                                                                      |
| `type`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          | Series                                                                                       |
| `imageUrl`                                                                                   | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          | https://r2.versedb.com/uploads/titles/batman-12/batman-12-abc123-cover_md.webp               |
| `images`                                                                                     | [operations.GetASpecificTitleImages](../../models/operations/get-a-specific-title-images.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |
| `contentRatingLabel`                                                                         | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          | 15+                                                                                          |
| `minAge`                                                                                     | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          | 15                                                                                           |
| `isNsfw`                                                                                     | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | N/A                                                                                          | false                                                                                        |
| `imprintId`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          | null                                                                                         |
| `seriesCount`                                                                                | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          | 25                                                                                           |
| `issuesCount`                                                                                | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          | 1450                                                                                         |
| `averageRating`                                                                              | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          | 4.3                                                                                          |
| `aliases`                                                                                    | *string*[]                                                                                   | :heavy_minus_sign:                                                                           | N/A                                                                                          | [<br/>"The Dark Knight",<br/>"The Caped Crusader"<br/>]                                      |