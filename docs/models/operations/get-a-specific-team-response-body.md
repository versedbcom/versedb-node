# GetASpecificTeamResponseBody

Success

## Example Usage

```typescript
import { GetASpecificTeamResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetASpecificTeamResponseBody = {
  data: {
    id: 78,
    name: "Avengers",
    slug: "avengers",
    aliases: [
      "Earth's Mightiest Heroes",
    ],
    formationDate: "1963-09-01",
    disbandedDate: null,
    headquarters: "Avengers Tower, New York",
    membersCount: 312,
    seriesCount: 48,
    appearancesCount: 5200,
    listsCount: 86,
    imageUrl: "https://...-full_lg.webp",
    images: {
      tileSm: "https://...-tile_sm.webp",
      profileMd: "https://...-profile_md.webp",
      fullLg: "https://...-full_lg.webp",
    },
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
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `data`                                                                                 | [operations.GetASpecificTeamData](../../models/operations/get-a-specific-team-data.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |