# GetAchievementsForTheAuthenticatedUserRequest

## Example Usage

```typescript
import { GetAchievementsForTheAuthenticatedUserRequest } from "@versedbcom/sdk/models/operations";

let value: GetAchievementsForTheAuthenticatedUserRequest = {
  includeProgress: false,
  includeAll: false,
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `includeProgress`                                             | *boolean*                                                     | :heavy_minus_sign:                                            | Include in-progress achievements. Default: false.             | false                                                         |
| `includeAll`                                                  | *boolean*                                                     | :heavy_minus_sign:                                            | Include all achievements grouped by category. Default: false. | false                                                         |