# ListAllPublishersWithOptionalSearchResponseBody

Success

## Example Usage

```typescript
import { ListAllPublishersWithOptionalSearchResponseBody } from "@versedbcom/sdk/models/operations";

let value: ListAllPublishersWithOptionalSearchResponseBody = {
  data: [
    {
      id: 1,
      name: "Marvel Comics",
      slug: "marvel-comics",
      foundedYear: 1939,
      headquarters: "New York, NY",
      status: "active",
      seriesCount: 12500,
      logoUrl: "https://...-full_lg.webp",
      images: {
        tileSm: "https://...-tile_sm.webp",
        profileMd: "https://...-profile_md.webp",
        fullLg: "https://...-full_lg.webp",
      },
    },
  ],
  meta: {
    currentPage: 1,
    lastPage: 25,
    perPage: 20,
    total: 500,
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                                               | Type                                                                                                                                                                                                                                                                                                                                                | Required                                                                                                                                                                                                                                                                                                                                            | Description                                                                                                                                                                                                                                                                                                                                         | Example                                                                                                                                                                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                                                                                                                                                                                                                              | [operations.ListAllPublishersWithOptionalSearchData](../../models/operations/list-all-publishers-with-optional-search-data.md)[]                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                  | N/A                                                                                                                                                                                                                                                                                                                                                 | [<br/>{<br/>"id": 1,<br/>"name": "Marvel Comics",<br/>"slug": "marvel-comics",<br/>"founded_year": 1939,<br/>"headquarters": "New York, NY",<br/>"status": "active",<br/>"series_count": 12500,<br/>"logo_url": "https://...-full_lg.webp",<br/>"images": {<br/>"tile_sm": "https://...-tile_sm.webp",<br/>"profile_md": "https://...-profile_md.webp",<br/>"full_lg": "https://...-full_lg.webp"<br/>}<br/>}<br/>] |
| `meta`                                                                                                                                                                                                                                                                                                                                              | [operations.ListAllPublishersWithOptionalSearchMeta](../../models/operations/list-all-publishers-with-optional-search-meta.md)                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                  | N/A                                                                                                                                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                     |