# GetIssueCreatorsData

## Example Usage

```typescript
import { GetIssueCreatorsData } from "@versedbcom/sdk/models/operations";

let value: GetIssueCreatorsData = {
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
  },
  createdAt: "2024-01-15T10:30:00.000000Z",
  updatedAt: "2024-01-15T10:30:00.000000Z",
  deletedAt: "2024-01-15T10:30:00.000000Z",
  aliases: [
    "<value 1>",
    "<value 2>",
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
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                           | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            | 789                                                                                                            |
| `name`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            | Nick Spencer                                                                                                   |
| `slug`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            | nick-spencer                                                                                                   |
| `roleId`                                                                                                       | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            | 1                                                                                                              |
| `profilePhotoPath`                                                                                             | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            | uploads/creators/2024/01/nick-spencer.jpg                                                                      |
| `biography`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            | An American comic book writer.                                                                                 |
| `gender`                                                                                                       | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            | male                                                                                                           |
| `birth`                                                                                                        | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            | 2024-01-15T10:30:00.000000Z                                                                                    |
| `death`                                                                                                        | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            | 2024-01-15T10:30:00.000000Z                                                                                    |
| `birthPlace`                                                                                                   | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            | Cincinnati, Ohio                                                                                               |
| `country`                                                                                                      | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            | US                                                                                                             |
| `links`                                                                                                        | Record<string, *any*>                                                                                          | :heavy_check_mark:                                                                                             | N/A                                                                                                            |                                                                                                                |
| `createdAt`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            | 2024-01-15T10:30:00.000000Z                                                                                    |
| `updatedAt`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            | 2024-01-15T10:30:00.000000Z                                                                                    |
| `deletedAt`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            | 2024-01-15T10:30:00.000000Z                                                                                    |
| `aliases`                                                                                                      | *string*[]                                                                                                     | :heavy_check_mark:                                                                                             | N/A                                                                                                            |                                                                                                                |
| `cachedIssuesCount`                                                                                            | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            | 250                                                                                                            |
| `cachedSeriesCount`                                                                                            | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            | 30                                                                                                             |
| `cachedTitlesCount`                                                                                            | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            | 20                                                                                                             |
| `lastEditedBy`                                                                                                 | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            | 12                                                                                                             |
| `lastEditedAt`                                                                                                 | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            | 2024-01-15T10:30:00.000000Z                                                                                    |
| `publicListsCount`                                                                                             | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            | 4                                                                                                              |
| `originalLocale`                                                                                               | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            | en                                                                                                             |
| `nameI18n`                                                                                                     | Record<string, [operations.GetIssueCreatorsNameI18n](../../models/operations/get-issue-creators-name-i18n.md)> | :heavy_check_mark:                                                                                             | One name per language, keyed by BCP 47 tag.                                                                    | {<br/>"ja": {<br/>"value": "講談社",<br/>"reading": "こうだんしゃ",<br/>"source": "madb"<br/>}<br/>}                    |
| `aliasesI18n`                                                                                                  | Record<string, *string*[]>                                                                                     | :heavy_check_mark:                                                                                             | Alternative names per language.                                                                                | {<br/>"en": [<br/>"Kodansha Comics"<br/>]<br/>}                                                                |
| `role`                                                                                                         | [operations.GetIssueCreatorsRole](../../models/operations/get-issue-creators-role.md)                          | :heavy_check_mark:                                                                                             | N/A                                                                                                            |                                                                                                                |
| `pivot`                                                                                                        | [operations.GetIssueCreatorsPivot](../../models/operations/get-issue-creators-pivot.md)                        | :heavy_check_mark:                                                                                             | N/A                                                                                                            |                                                                                                                |