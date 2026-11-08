# GetCreatorDetailsAward

## Example Usage

```typescript
import { GetCreatorDetailsAward } from "@versedbcom/sdk/models/operations";

let value: GetCreatorDetailsAward = {
  name: "Eisner Award",
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
  year: 1988,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `name`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    | Eisner Award                                                                           |
| `nameI18n`                                                                             | Record<string, [operations.AwardNameI18n](../../models/operations/award-name-i18n.md)> | :heavy_check_mark:                                                                     | One name per language, keyed by BCP 47 tag.                                            | {<br/>"ja": {<br/>"value": "講談社",<br/>"reading": "こうだんしゃ",<br/>"source": "madb"<br/>}<br/>} |
| `aliasesI18n`                                                                          | Record<string, *string*[]>                                                             | :heavy_check_mark:                                                                     | Alternative names per language.                                                        | {<br/>"en": [<br/>"Kodansha Comics"<br/>]<br/>}                                        |
| `originalLocale`                                                                       | *string*                                                                               | :heavy_check_mark:                                                                     | The language the entity is from, a BCP 47 tag.                                         | en                                                                                     |
| `year`                                                                                 | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    | 1988                                                                                   |