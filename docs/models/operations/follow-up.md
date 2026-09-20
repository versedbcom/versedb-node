# FollowUp

## Example Usage

```typescript
import { FollowUp } from "@versedbcom/sdk/models/operations";

let value: FollowUp = {
  prompt: true,
  canMarkRead: true,
  canReview: true,
  hasReview: false,
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `prompt`           | *boolean*          | :heavy_minus_sign: | N/A                | true               |
| `canMarkRead`      | *boolean*          | :heavy_minus_sign: | N/A                | true               |
| `canReview`        | *boolean*          | :heavy_minus_sign: | N/A                | true               |
| `hasReview`        | *boolean*          | :heavy_minus_sign: | N/A                | false              |