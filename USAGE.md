<!-- Start SDK Example Usage [usage] -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.titles.listTitles({
    q: "spider-man",
    publisherId: 1,
    publisher: 1,
    publisherIds: "1,4",
    hideUnreleased: true,
    medium: "manga",
    languages: "en,ja",
    ongoing: true,
    sort: "start_year",
    direction: "desc",
    limit: 20,
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->