# LendACopyOutCoverKind

Which cover the copy is of: `catalog` when `variant_id` names a live variant of the copy's issue, `custom` when it names none and the copy is flagged a variant (`is_variant`), else `main`, the issue's own cover.

## Example Usage

```typescript
import { LendACopyOutCoverKind } from "@versedbcom/sdk/models/operations";

let value: LendACopyOutCoverKind = "catalog";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"main" | "catalog" | "custom" | Unrecognized<string>
```