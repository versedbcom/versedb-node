# ListFollowsUnprocessableEntityError

A type that is not followable, or a search past 100 characters.

## Example Usage

```typescript
import { ListFollowsUnprocessableEntityError } from "@versedbcom/sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `message`                                              | *string*                                               | :heavy_check_mark:                                     | N/A                                                    | The selected type is not followable.                   |
| `errors`                                               | Record<string, *string*[]>                             | :heavy_check_mark:                                     | N/A                                                    | {<br/>"type": [<br/>"The selected type is not followable."<br/>]<br/>} |