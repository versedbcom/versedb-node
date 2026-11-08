# GetKeyIssueReasonsData

## Example Usage

```typescript
import { GetKeyIssueReasonsData } from "@versedbcom/sdk/models/operations";

let value: GetKeyIssueReasonsData = {
  id: 1,
  name: "1st Appearance",
  category: "appearance",
  description: "First appearance of a character.",
  notes: "1st full appearance of Miles Morales",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  | Example                                      |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `id`                                         | *number*                                     | :heavy_check_mark:                           | N/A                                          | 1                                            |
| `name`                                       | *string*                                     | :heavy_check_mark:                           | N/A                                          | 1st Appearance                               |
| `category`                                   | *string*                                     | :heavy_check_mark:                           | appearance, story, creator, market or media. | appearance                                   |
| `description`                                | *string*                                     | :heavy_check_mark:                           | N/A                                          | First appearance of a character.             |
| `notes`                                      | *string*                                     | :heavy_check_mark:                           | N/A                                          | 1st full appearance of Miles Morales         |