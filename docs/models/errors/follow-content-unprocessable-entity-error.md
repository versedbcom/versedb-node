# FollowContentUnprocessableEntityError

The body fails its rules, or the member is following themselves.

## Example Usage

```typescript
import { FollowContentUnprocessableEntityError } from "@versedbcom/sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   | Example                                       |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `message`                                     | *string*                                      | :heavy_check_mark:                            | N/A                                           | The type field is required.                   |
| `errors`                                      | Record<string, *string*[]>                    | :heavy_minus_sign:                            | N/A                                           | {<br/>"type": [<br/>"The type field is required."<br/>]<br/>} |