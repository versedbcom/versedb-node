# GetCharacterTeamsData

## Example Usage

```typescript
import { GetCharacterTeamsData } from "@versedbcom/sdk/models/operations";

let value: GetCharacterTeamsData = {
  id: 10,
  name: "Avengers",
  originalLocale: "en",
  slug: "avengers",
  imageUrl: "https://...",
  membership: {
    role: "Member",
    joinedDate: "2012-05-01",
    leftDate: null,
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *number*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    | 10                                                                                                     |
| `name`                                                                                                 | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    | Avengers                                                                                               |
| `nameI18n`                                                                                             | [operations.GetCharacterTeamsNameI18n](../../models/operations/get-character-teams-name-i18n.md)       | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |                                                                                                        |
| `aliasesI18n`                                                                                          | [operations.GetCharacterTeamsAliasesI18n](../../models/operations/get-character-teams-aliases-i18n.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |                                                                                                        |
| `originalLocale`                                                                                       | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    | en                                                                                                     |
| `slug`                                                                                                 | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    | avengers                                                                                               |
| `imageUrl`                                                                                             | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    | https://...                                                                                            |
| `membership`                                                                                           | [operations.Membership](../../models/operations/membership.md)                                         | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |                                                                                                        |