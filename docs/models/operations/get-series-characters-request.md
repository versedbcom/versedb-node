# GetSeriesCharactersRequest

## Example Usage

```typescript
import { GetSeriesCharactersRequest } from "@versedbcom/sdk/models/operations";

let value: GetSeriesCharactersRequest = {
  id: 123,
  page: 1,
  languages: "ja,ko",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *number*                                                                                             | :heavy_check_mark:                                                                                   | The series ID.                                                                                       | 123                                                                                                  |
| `page`                                                                                               | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Page number; meta.last_page says where the list ends.                                                | 1                                                                                                    |
| `languages`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Keep only these languages in the `_i18n` maps (comma-separated BCP 47 tags). No other field changes. | ja,ko                                                                                                |