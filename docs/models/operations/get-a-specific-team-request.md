# GetASpecificTeamRequest

## Example Usage

```typescript
import { GetASpecificTeamRequest } from "@versedbcom/sdk/models/operations";

let value: GetASpecificTeamRequest = {
  teamId: 17123,
  languages: "ja,ko",
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             | Example                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `teamId`                                                                                                                                | *number*                                                                                                                                | :heavy_check_mark:                                                                                                                      | The ID of the team.                                                                                                                     | 17123                                                                                                                                   |
| `languages`                                                                                                                             | *string*                                                                                                                                | :heavy_minus_sign:                                                                                                                      | Keep only these languages in the `_i18n` maps (comma-separated BCP 47 tags). No other field changes, and `Accept-Language` is not read. | ja,ko                                                                                                                                   |