# GetASpecificTitleResponseBody

## Example Usage

```typescript
import { GetASpecificTitleResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetASpecificTitleResponseBody = {
  data: {
    id: 1,
    name: "Thor",
    slug: "thor",
    description:
      "Quisquam iure consequatur provident quod nostrum. Dolorem maxime inventore dolore architecto similique. Voluptas reiciendis iure ut nihil eveniet.",
    startYear: 1969,
    endYear: 1977,
    status: "completed",
    type: "Series",
    imageUrl: null,
    images: null,
    ageRating: "Teen",
    isNsfw: false,
    imprintId: null,
    seriesCount: 1,
    issuesCount: 1,
    averageRating: "3.77",
    aliases: null,
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `data`                                                                                   | [operations.GetASpecificTitleData](../../models/operations/get-a-specific-title-data.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |