# GetSeriesCharactersResponse

## Example Usage

```typescript
import { GetSeriesCharactersResponse } from "@versedbcom/sdk/models/operations";

let value: GetSeriesCharactersResponse = {
  headers: {},
  result: {
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
          seriesId: 123,
          characterId: 456,
          createdAt: "2024-01-15T10:30:00.000000Z",
          updatedAt: "2024-01-15T10:30:00.000000Z",
        },
      },
    ],
    firstPageUrl: "https://common-dress.name",
    from: 1,
    lastPage: 1,
    lastPageUrl: "https://first-laughter.name",
    links: [],
    nextPageUrl: "https://illiterate-case.net",
    path: "/usr/src",
    perPage: 50,
    prevPageUrl: "https://tired-cricket.com/",
    to: 15,
    total: 15,
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                    | Record<string, *string*[]>                                                                                   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `result`                                                                                                     | [operations.GetSeriesCharactersResponseBody](../../models/operations/get-series-characters-response-body.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |