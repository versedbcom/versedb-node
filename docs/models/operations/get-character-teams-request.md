# GetCharacterTeamsRequest

## Example Usage

```typescript
import { GetCharacterTeamsRequest } from "@versedbcom/sdk/models/operations";

let value: GetCharacterTeamsRequest = {
  characterId: 456,
  limit: 20,
  q: "batman",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `characterId`                                          | *number*                                               | :heavy_check_mark:                                     | The character ID.                                      | 456                                                    |
| `limit`                                                | *number*                                               | :heavy_minus_sign:                                     | Results per page (max 50).                             | 20                                                     |
| `q`                                                    | *string*                                               | :heavy_minus_sign:                                     | Optional case-insensitive search within these results. | batman                                                 |