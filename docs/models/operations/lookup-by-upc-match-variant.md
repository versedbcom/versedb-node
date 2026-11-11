# LookupByUPCMatchVariant

## Example Usage

```typescript
import { LookupByUPCMatchVariant } from "@versedbcom/sdk/models/operations";

let value: LookupByUPCMatchVariant = {
  variantId: 789,
  variantName: "Cover B",
  coverUrl: "https://...",
  upc: "75960608936700121",
  lunarCode: "0518MA0102",
  universalCode: "DC10251017",
  diamondCode: "MAY180902",
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `variantId`        | *number*           | :heavy_check_mark: | N/A                | 789                |
| `variantName`      | *string*           | :heavy_check_mark: | N/A                | Cover B            |
| `coverUrl`         | *string*           | :heavy_check_mark: | N/A                | https://...        |
| `upc`              | *string*           | :heavy_check_mark: | N/A                | 75960608936700121  |
| `lunarCode`        | *string*           | :heavy_check_mark: | N/A                | 0518MA0102         |
| `universalCode`    | *string*           | :heavy_check_mark: | N/A                | DC10251017         |
| `diamondCode`      | *string*           | :heavy_check_mark: | N/A                | MAY180902          |