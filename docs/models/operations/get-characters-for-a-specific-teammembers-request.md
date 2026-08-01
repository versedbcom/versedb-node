# GetCharactersForASpecificTeammembersRequest

## Example Usage

```typescript
import { GetCharactersForASpecificTeammembersRequest } from "@versedbcom/sdk/models/operations";

let value: GetCharactersForASpecificTeammembersRequest = {
  teamId: 5306,
  q: "batman",
  limit: 20,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `teamId`                                               | *number*                                               | :heavy_check_mark:                                     | The ID of the team.                                    | 5306                                                   |
| `q`                                                    | *string*                                               | :heavy_minus_sign:                                     | Optional case-insensitive search within these results. | batman                                                 |
| `limit`                                                | *number*                                               | :heavy_minus_sign:                                     | Number of results per page (max 50).                   | 20                                                     |