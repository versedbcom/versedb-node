# GetStoryArcsForASpecificCharacterRequest

## Example Usage

```typescript
import { GetStoryArcsForASpecificCharacterRequest } from "@versedbcom/sdk/models/operations";

let value: GetStoryArcsForASpecificCharacterRequest = {
  characterId: 1,
  q: "batman",
  limit: 20,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `characterId`                                          | *number*                                               | :heavy_check_mark:                                     | The ID of the character.                               | 1                                                      |
| `q`                                                    | *string*                                               | :heavy_minus_sign:                                     | Optional case-insensitive search within these results. | batman                                                 |
| `limit`                                                | *number*                                               | :heavy_minus_sign:                                     | Number of results per page (max 50).                   | 20                                                     |