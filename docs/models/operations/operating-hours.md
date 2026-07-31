# OperatingHours

## Example Usage

```typescript
import { OperatingHours } from "@versedbcom/sdk/models/operations";

let value: OperatingHours = {
  monday: "10:00-20:00",
  saturday: "10:00-21:00",
  sunday: "closed",
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `monday`           | *string*           | :heavy_minus_sign: | N/A                | 10:00-20:00        |
| `saturday`         | *string*           | :heavy_minus_sign: | N/A                | 10:00-21:00        |
| `sunday`           | *string*           | :heavy_minus_sign: | N/A                | closed             |