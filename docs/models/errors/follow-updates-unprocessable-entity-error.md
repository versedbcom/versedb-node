# FollowUpdatesUnprocessableEntityError

A query parameter out of range.

## Example Usage

```typescript
import { FollowUpdatesUnprocessableEntityError } from "@versedbcom/sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `message`                                               | *string*                                                | :heavy_check_mark:                                      | N/A                                                     | The days must not be greater than 30.                   |
| `errors`                                                | Record<string, *string*[]>                              | :heavy_check_mark:                                      | N/A                                                     | {<br/>"days": [<br/>"The days must not be greater than 30."<br/>]<br/>} |