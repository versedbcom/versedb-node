# GetASpecificUniverseData

## Example Usage

```typescript
import { GetASpecificUniverseData } from "@versedbcom/sdk/models/operations";

let value: GetASpecificUniverseData = {
  id: 1,
  name: "Marvel Universe",
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
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             | Example                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                    | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     | 1                                                                                                                       |
| `name`                                                                                                                  | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     | Marvel Universe                                                                                                         |
| `nameI18n`                                                                                                              | Record<string, [operations.GetASpecificUniverseNameI18n](../../models/operations/get-a-specific-universe-name-i18n.md)> | :heavy_check_mark:                                                                                                      | One name per language, keyed by BCP 47 tag.                                                                             | {<br/>"ja": {<br/>"value": "講談社",<br/>"reading": "こうだんしゃ",<br/>"source": "madb"<br/>}<br/>}                             |
| `aliasesI18n`                                                                                                           | Record<string, *string*[]>                                                                                              | :heavy_check_mark:                                                                                                      | Alternative names per language.                                                                                         | {<br/>"en": [<br/>"Kodansha Comics"<br/>]<br/>}                                                                         |
| `originalLocale`                                                                                                        | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The language the universe is from, a BCP 47 tag.                                                                        | en                                                                                                                      |