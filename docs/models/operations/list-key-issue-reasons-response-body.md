# ListKeyIssueReasonsResponseBody

Success

## Example Usage

```typescript
import { ListKeyIssueReasonsResponseBody } from "@versedbcom/sdk/models/operations";

let value: ListKeyIssueReasonsResponseBody = {
  data: [
    {
      id: 1,
      name: "1st Appearance",
      category: "appearance",
      description: "First appearance of a character",
    },
  ],
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           | Example                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                | [operations.ListKeyIssueReasonsData](../../models/operations/list-key-issue-reasons-data.md)[]                        | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   | [<br/>{<br/>"id": 1,<br/>"name": "1st Appearance",<br/>"category": "appearance",<br/>"description": "First appearance of a character"<br/>}<br/>] |