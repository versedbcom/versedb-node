# ListEventsRequest

## Example Usage

```typescript
import { ListEventsRequest } from "@versedbcom/sdk/models/operations";

let value: ListEventsRequest = {
  q: "comic-con",
  type: "convention",
  upcoming: true,
  past: true,
  isOnline: false,
  isFcbd: true,
  countryCode: "US",
  limit: 20,
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `q`                                                     | *string*                                                | :heavy_minus_sign:                                      | Search by event name.                                   | comic-con                                               |
| `type`                                                  | *string*                                                | :heavy_minus_sign:                                      | Filter by type (convention, store_event, signing, etc). | convention                                              |
| `upcoming`                                              | *boolean*                                               | :heavy_minus_sign:                                      | Only show upcoming events.                              | true                                                    |
| `past`                                                  | *boolean*                                               | :heavy_minus_sign:                                      | Only show past events.                                  | true                                                    |
| `isOnline`                                              | *boolean*                                               | :heavy_minus_sign:                                      | Filter online/in-person events.                         | false                                                   |
| `isFcbd`                                                | *boolean*                                               | :heavy_minus_sign:                                      | Filter Free Comic Book Day events.                      | true                                                    |
| `countryCode`                                           | *string*                                                | :heavy_minus_sign:                                      | Filter by country code.                                 | US                                                      |
| `limit`                                                 | *number*                                                | :heavy_minus_sign:                                      | Number of results per page (max 50).                    | 20                                                      |