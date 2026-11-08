# GetIssueCharactersResponseBody

Success

## Example Usage

```typescript
import { GetIssueCharactersResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetIssueCharactersResponseBody = {
  currentPage: 1,
  data: [
    {
      id: 456,
      name: "Spider-Man",
      slug: "spider-man",
      realName: "Peter Parker",
      description: "Bitten by a radioactive spider.",
      alterEgo: [
        "Spidey",
      ],
      birthday: "2024-01-15T10:30:00.000000Z",
      birthPlace: "Queens, New York",
      occupation: "Photographer",
      height: "5'10\"",
      weight: "167 lbs",
      citizenship: "American",
      education: "College",
      aliases: [
        "<value 1>",
        "<value 2>",
      ],
      profilePhotoPath: "uploads/characters/2024/01/spider-man.jpg",
      gender: "male",
      createdAt: "2024-01-15T10:30:00.000000Z",
      updatedAt: "2024-01-15T10:30:00.000000Z",
      deletedAt: "2024-01-15T10:30:00.000000Z",
      lastEditedBy: 12,
      lastEditedAt: "2024-01-15 10:30:00",
      publicListsCount: 4,
      debutDate: "2024-01-15T10:30:00.000000Z",
      debutIssueId: 5432,
      debutEditorial: false,
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
      realNameI18n: {
        "ja": {
          value: "講談社",
          source: "madb",
          reading: "こうだんしゃ",
        },
      },
      race: "Human",
      tags: [
        {
          id: 12,
          name: {
            "en": "Wall-crawling",
          },
          slug: {
            "en": "wall-crawling",
          },
          type: "ability",
          orderColumn: 1,
          createdAt: "2024-01-15T10:30:00.000000Z",
          updatedAt: "2024-01-15T10:30:00.000000Z",
          pivot: {
            taggableType: "<value>",
            taggableId: 456,
            tagId: 12,
          },
        },
      ],
      pivot: {
        issueId: 5432,
        characterId: 456,
        isSpoiler: false,
        sortOrder: 0,
        createdAt: "2024-01-15T10:30:00.000000Z",
        updatedAt: "2024-01-15T10:30:00.000000Z",
      },
    },
  ],
  firstPageUrl: "https://coarse-interior.com",
  from: 1,
  lastPage: 1,
  lastPageUrl: "https://untimely-allocation.org/",
  links: [],
  nextPageUrl: "https://focused-waterspout.net/",
  path: "/usr/share",
  perPage: 50,
  prevPageUrl: "https://overcooked-rosemary.net",
  to: 15,
  total: 15,
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `currentPage`                                                                               | *number*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         | 1                                                                                           |
| `data`                                                                                      | [operations.GetIssueCharactersData](../../models/operations/get-issue-characters-data.md)[] | :heavy_check_mark:                                                                          | N/A                                                                                         |                                                                                             |
| `firstPageUrl`                                                                              | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |                                                                                             |
| `from`                                                                                      | *number*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         | 1                                                                                           |
| `lastPage`                                                                                  | *number*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         | 1                                                                                           |
| `lastPageUrl`                                                                               | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |                                                                                             |
| `links`                                                                                     | [operations.GetIssueCharactersLink](../../models/operations/get-issue-characters-link.md)[] | :heavy_check_mark:                                                                          | N/A                                                                                         |                                                                                             |
| `nextPageUrl`                                                                               | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |                                                                                             |
| `path`                                                                                      | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |                                                                                             |
| `perPage`                                                                                   | *number*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         | 50                                                                                          |
| `prevPageUrl`                                                                               | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |                                                                                             |
| `to`                                                                                        | *number*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         | 15                                                                                          |
| `total`                                                                                     | *number*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         | 15                                                                                          |