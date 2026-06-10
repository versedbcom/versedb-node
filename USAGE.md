<!-- Start SDK Example Usage [usage] -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.activity.getActivityFeed({
    perPage: 20,
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->