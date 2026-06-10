# GetKeyIssueReasonsResponseBody

Success

## Example Usage

```typescript
import { GetKeyIssueReasonsResponseBody } from "@versedbcom/sdk/models/operations";

let value: GetKeyIssueReasonsResponseBody = {
  data: [
    {
      id: 1,
      name: "1st Appearance",
      category: "appearance",
      description: "First appearance of a character",
      notes: "1st full appearance of Wolverine (Logan)",
      source: "manual",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                          | Type                                                                                                                                                                                           | Required                                                                                                                                                                                       | Description                                                                                                                                                                                    | Example                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                                                                         | [operations.GetKeyIssueReasonsData](../../models/operations/get-key-issue-reasons-data.md)[]                                                                                                   | :heavy_minus_sign:                                                                                                                                                                             | N/A                                                                                                                                                                                            | [<br/>{<br/>"id": 1,<br/>"name": "1st Appearance",<br/>"category": "appearance",<br/>"description": "First appearance of a character",<br/>"notes": "1st full appearance of Wolverine (Logan)",<br/>"source": "manual"<br/>}<br/>] |