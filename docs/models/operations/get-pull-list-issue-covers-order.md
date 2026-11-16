# GetPullListIssueCoversOrder

Where the shop's order for this issue stands: `open` while a cover choice also goes on the user's list at the shop, `set` once the shop has ordered the issue (the choice stays on the user's VerseDB list); null when the issue isn't on the shop's list.

## Example Usage

```typescript
import { GetPullListIssueCoversOrder } from "@versedbcom/sdk/models/operations";

let value: GetPullListIssueCoversOrder = "set";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"open" | "set" | Unrecognized<string>
```