# GetAchievementsForTheAuthenticatedUserResponse

## Example Usage

```typescript
import { GetAchievementsForTheAuthenticatedUserResponse } from "@versedbcom/sdk/models/operations";

let value: GetAchievementsForTheAuthenticatedUserResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    data: {
      earned: [],
      totalEarned: 0,
    },
  },
};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           | Example                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                             | Record<string, *string*[]>                                                                                                                            | :heavy_check_mark:                                                                                                                                    | N/A                                                                                                                                                   |                                                                                                                                                       |
| `result`                                                                                                                                              | [operations.GetAchievementsForTheAuthenticatedUserResponseBody](../../models/operations/get-achievements-for-the-authenticated-user-response-body.md) | :heavy_check_mark:                                                                                                                                    | N/A                                                                                                                                                   | {<br/>"data": {<br/>"earned": [],<br/>"total_earned": 0<br/>}<br/>}                                                                                   |