# ListEventsResponseBody

Success

## Example Usage

```typescript
import { ListEventsResponseBody } from "@versedbcom/sdk/models/operations";

let value: ListEventsResponseBody = {
  data: [
    {
      id: 42,
      slug: "san-diego-comic-con-2026",
      name: "San Diego Comic-Con 2026",
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
      type: "convention",
      startDate: "2026-07-23",
      endDate: "2026-07-26",
      startTime: "10:00:00",
      endTime: "18:00:00",
      timezone: "America/Los_Angeles",
      isOnline: true,
      isFcbd: true,
      status: "scheduled",
      venueName: "San Diego Convention Center",
      city: "San Diego",
      region: "California",
      countryCode: "US",
      fullLocation:
        "San Diego Convention Center, San Diego, California, United States",
      logoUrl: "https://...-tile_sm.webp",
      images: {
        tileSm: "https://...-tile_sm.webp",
        fullMd: "https://...-full_md.webp",
        fullLg: "https://...-full_lg.webp",
      },
      ticketPrice: "USD $45.00 – $150.00",
      followerCount: 320,
    },
  ],
  links: {
    first: "<value>",
    last: "<value>",
    prev: "<value>",
    next: "<value>",
  },
  meta: {
    currentPage: 1,
    from: 1,
    lastPage: 25,
    links: [],
    path: "/etc/namedb",
    perPage: 20,
    to: 20,
    total: 500,
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `data`                                                                     | [operations.ListEventsData](../../models/operations/list-events-data.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |
| `links`                                                                    | [operations.ListEventsLinks](../../models/operations/list-events-links.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `meta`                                                                     | [operations.ListEventsMeta](../../models/operations/list-events-meta.md)   | :heavy_check_mark:                                                         | N/A                                                                        |