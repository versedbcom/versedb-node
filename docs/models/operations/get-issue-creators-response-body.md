# GetIssueCreatorsResponseBody

Success

## Example Usage

```typescript
import { GetIssueCreatorsResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetIssueCreatorsResponseBody = {
  currentPage: 1,
  data: [
    {
      id: 789,
      name: "Nick Spencer",
      slug: "nick-spencer",
      roleId: 1,
      profilePhotoPath: "uploads/creators/2024/01/nick-spencer.jpg",
      biography: "An American comic book writer.",
      gender: "male",
      birth: "2024-01-15T10:30:00.000000Z",
      death: "2024-01-15T10:30:00.000000Z",
      birthPlace: "Cincinnati, Ohio",
      country: "US",
      links: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
      createdAt: "2024-01-15T10:30:00.000000Z",
      updatedAt: "2024-01-15T10:30:00.000000Z",
      deletedAt: "2024-01-15T10:30:00.000000Z",
      aliases: [
        "<value 1>",
      ],
      cachedIssuesCount: 250,
      cachedSeriesCount: 30,
      cachedTitlesCount: 20,
      lastEditedBy: 12,
      lastEditedAt: "2024-01-15T10:30:00.000000Z",
      publicListsCount: 4,
      originalLocale: "en",
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
      role: {
        id: 1,
        name: "Writer",
        description: "Writes the script.",
        createdAt: "2024-01-15T10:30:00.000000Z",
        updatedAt: "2024-01-15T10:30:00.000000Z",
      },
      pivot: {
        issueId: 5432,
        creatorId: 789,
        creatorRoleId: 1,
        isUncredited: false,
        sortOrder: 0,
        createdAt: "2024-01-15T10:30:00.000000Z",
        updatedAt: "2024-01-15T10:30:00.000000Z",
      },
    },
  ],
  firstPageUrl: "https://gullible-ocelot.name",
  from: 1,
  lastPage: 1,
  lastPageUrl: "https://actual-conservative.info",
  links: [
    {
      url: "https://reflecting-beret.com/",
      label: "<value>",
      active: false,
    },
  ],
  nextPageUrl: null,
  path: "/home/user/dir",
  perPage: 50,
  prevPageUrl: null,
  to: 15,
  total: 15,
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `currentPage`                                                                           | *number*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     | 1                                                                                       |
| `data`                                                                                  | [operations.GetIssueCreatorsData](../../models/operations/get-issue-creators-data.md)[] | :heavy_check_mark:                                                                      | N/A                                                                                     |                                                                                         |
| `firstPageUrl`                                                                          | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |                                                                                         |
| `from`                                                                                  | *number*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     | 1                                                                                       |
| `lastPage`                                                                              | *number*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     | 1                                                                                       |
| `lastPageUrl`                                                                           | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |                                                                                         |
| `links`                                                                                 | [operations.GetIssueCreatorsLink](../../models/operations/get-issue-creators-link.md)[] | :heavy_check_mark:                                                                      | N/A                                                                                     |                                                                                         |
| `nextPageUrl`                                                                           | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |                                                                                         |
| `path`                                                                                  | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |                                                                                         |
| `perPage`                                                                               | *number*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     | 50                                                                                      |
| `prevPageUrl`                                                                           | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |                                                                                         |
| `to`                                                                                    | *number*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     | 15                                                                                      |
| `total`                                                                                 | *number*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     | 15                                                                                      |