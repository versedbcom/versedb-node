# LikeListOrReactToItRequestBody

## Example Usage

```typescript
import { LikeListOrReactToItRequestBody } from "@versedbcom/sdk/models/operations";

let value: LikeListOrReactToItRequestBody = {
  reaction: "clap",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `reaction`                                                             | *string*                                                               | :heavy_minus_sign:                                                     | One of heart, laugh, wow, fire, clap, confused. Omit for a plain like. | clap                                                                   |