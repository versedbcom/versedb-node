# UpdateCollectionItemStatus

Whether the copy is owned, for_sale, or sold. A sold copy keeps its record but leaves the collection totals.

## Example Usage

```typescript
import { UpdateCollectionItemStatus } from "@versedbcom/sdk/models/operations";

let value: UpdateCollectionItemStatus = "sold";
```

## Values

```typescript
"owned" | "for_sale" | "sold"
```