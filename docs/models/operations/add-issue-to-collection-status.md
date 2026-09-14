# AddIssueToCollectionStatus

Whether the copy is owned, for_sale, or sold. A sold copy keeps its record but leaves the collection totals.

## Example Usage

```typescript
import { AddIssueToCollectionStatus } from "@versedbcom/sdk/models/operations";

let value: AddIssueToCollectionStatus = "sold";
```

## Values

```typescript
"owned" | "for_sale" | "sold"
```