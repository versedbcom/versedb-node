<!-- Start SDK Example Usage [usage] -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.series.listSeries({
    q: "spider-man",
    titleId: 1,
    publisherId: 1,
    status: "Ongoing",
    genreIds: "3,11",
    publisherIds: "1,4",
    creatorIds: "812,1907",
    characterIds: "55,204",
    languages: "en,ja",
    medium: "manga",
    publicationType: "limited_series",
    format: "Omnibus",
    startYear: 2018,
    endYear: 2022,
    decade: "1990s",
    hideUnreleased: true,
    sort: "start_year",
    direction: "desc",
    limit: 20,
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->