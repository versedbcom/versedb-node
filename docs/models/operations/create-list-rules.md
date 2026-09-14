# CreateListRules

A smart-list rule. Supply it to have the list built and kept current from a query instead of by hand. Requires a Pro subscription, and forces `is_ranked` to false because the rule carries its own sort. Fetch the field catalog from `/lists/rule-vocabulary` and validate a draft against `/lists/rule-preview`.

## Example Usage

```typescript
import { CreateListRules } from "@versedbcom/sdk/models/operations";

let value: CreateListRules = {};
```

## Fields

| Field       | Type        | Required    | Description |
| ----------- | ----------- | ----------- | ----------- |