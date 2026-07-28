<!-- Start SDK Example Usage [usage] -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.discovery.fOCDeadlines({
    limit: 10,
    days: 7,
    startDate: "2026-03-15",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->