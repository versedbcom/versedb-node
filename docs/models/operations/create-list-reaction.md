# CreateListReaction

## Example Usage

```typescript
import { CreateListReaction } from "@versedbcom/sdk/models/operations";

let value: CreateListReaction = {
  reaction: "heart",
  emoji: "❤️",
  label: "Love",
  count: 12,
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `reaction`         | *string*           | :heavy_check_mark: | N/A                | heart              |
| `emoji`            | *string*           | :heavy_check_mark: | N/A                | ❤️                 |
| `label`            | *string*           | :heavy_check_mark: | N/A                | Love               |
| `count`            | *number*           | :heavy_check_mark: | N/A                | 12                 |